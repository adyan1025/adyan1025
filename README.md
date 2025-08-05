# React + Flask Authentication App

A modern web application with a React.js frontend and Flask backend featuring user authentication, clean landing page, and dashboard.

## Features

- 🔐 **Secure Authentication**: User registration and login with password hashing
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds and animations
- ⚡ **Fast Performance**: React frontend with Flask API backend
- 📱 **Mobile Responsive**: Works perfectly on all device sizes
- 🛡️ **Session Management**: Secure session handling with Flask

## Project Structure

```
/workspace/
├── frontend/          # React.js application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── LandingPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── SignUpPage.js
│   │   │   └── Dashboard.js
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── backend/           # Flask application
│   ├── app.py            # Flask server
│   └── requirements.txt  # Python dependencies
└── README.md
```

## Setup Instructions

### Prerequisites

- Python 3.7+
- Node.js 14+
- npm or yarn

### Backend Setup (Flask)

1. Navigate to the backend directory:
   ```bash
   cd /workspace/backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   python app.py
   ```

The Flask backend will run on `http://localhost:5000`

### Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd /workspace/frontend
   ```

2. Install npm dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The React frontend will run on `http://localhost:3000`

## Usage

1. **Landing Page**: Visit `http://localhost:3000` to see the landing page
2. **Sign Up**: Click "Sign Up" to create a new account
3. **Login**: Use the "Login" button to sign in with existing credentials
4. **Dashboard**: After authentication, you'll be redirected to the dashboard

## API Endpoints

- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/user` - Get current user info

## Technology Stack

### Frontend
- React 18.x
- React Router DOM for routing
- Axios for HTTP requests
- Modern CSS with gradients and animations

### Backend
- Flask 2.3.x
- Flask-CORS for cross-origin requests
- Werkzeug for password hashing
- Session-based authentication

## Development Notes

- The backend uses in-memory storage for demo purposes. In production, use a proper database.
- CORS is configured to allow requests from `http://localhost:3000`
- All passwords are hashed using Werkzeug's security functions
- Session management is handled by Flask's built-in session support

## Security Features

- Password hashing with Werkzeug
- Session-based authentication
- CORS protection
- Input validation and error handling

## Customization

You can easily customize the app by:
- Changing colors in the CSS files
- Modifying the landing page content
- Adding new dashboard features
- Integrating with a real database

Enjoy building with React and Flask! 🚀
