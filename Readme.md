# IRTC App

## Overview
IRTC App is a comprehensive railway booking system built with modern web technologies. It includes features for user authentication, booking management, and train schedules. The app leverages both frontend and backend technologies to provide a seamless experience.

## Features
- User Authentication (Login/Register)
- Train Booking and Management
- Train Schedules
- Calendar Feature

## Technologies Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language of the web.
- **CSS**: Styling the application.

### Pages
- **Login**: User login page.
- **Register**: User registration page.
- **Home**: Landing page after login.
- **Trains**: Page to view and book trains.

### Libraries
- **react-date-picker**: To showcase calendar feature.
- **react-router-dom**: To establish connection between paths.

### Backend
- **Node.js**: A JavaScript runtime built on  JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A document database with the scalability and flexibility that you want with the querying and indexing that you need.

### Libraries
- **bcrypt**: For password hashing.
- **jwt (JSON Web Token)**: For userId hashing and isAdmin property (true or false).
- **cors**: For sharing network resources in the backend.
- **dotenv**: To store JWT secret key and MongoDB connection.

## Installation

### Prerequisites
- Node.js
- npm (Node package manager)
- MongoDB

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/irtc-app.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd irtc-app/backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the `backend` directory and add the following:
    ```
    JWT_SECRET=your_jwt_secret_key
    MONGODB_URI=your_mongodb_connection_string
    ```
5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd irtc-app/frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage
1. Navigate to `http://localhost:3000` in your browser to access the frontend application.
2. Use the login and register pages to create and authenticate users.
3. Explore train schedules and booking features.





