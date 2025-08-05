from flask import Flask, request, jsonify, session
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
import os

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)

# Configure CORS
CORS(app, supports_credentials=True, origins=["http://localhost:3000"])

# In-memory user storage (in production, use a proper database)
users = {}

@app.route('/')
def home():
    return jsonify({"message": "Flask backend is running!"})

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        if not data or not data.get('email') or not data.get('password'):
            return jsonify({"error": "Email and password are required"}), 400
        
        email = data['email']
        password = data['password']
        name = data.get('name', '')
        
        # Check if user already exists
        if email in users:
            return jsonify({"error": "User already exists"}), 400
        
        # Hash password and store user
        password_hash = generate_password_hash(password)
        users[email] = {
            'name': name,
            'email': email,
            'password_hash': password_hash
        }
        
        # Set session
        session['user_email'] = email
        
        return jsonify({
            "message": "User registered successfully",
            "user": {"name": name, "email": email}
        }), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not data or not data.get('email') or not data.get('password'):
            return jsonify({"error": "Email and password are required"}), 400
        
        email = data['email']
        password = data['password']
        
        # Check if user exists
        if email not in users:
            return jsonify({"error": "Invalid credentials"}), 401
        
        user = users[email]
        
        # Verify password
        if not check_password_hash(user['password_hash'], password):
            return jsonify({"error": "Invalid credentials"}), 401
        
        # Set session
        session['user_email'] = email
        
        return jsonify({
            "message": "Login successful",
            "user": {"name": user['name'], "email": user['email']}
        }), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user_email', None)
    return jsonify({"message": "Logout successful"}), 200

@app.route('/api/user', methods=['GET'])
def get_user():
    if 'user_email' not in session:
        return jsonify({"error": "Not authenticated"}), 401
    
    email = session['user_email']
    if email in users:
        user = users[email]
        return jsonify({"user": {"name": user['name'], "email": user['email']}})
    
    return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)