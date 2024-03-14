# ChatSphere 💬 - Real-time Chat Application with MERN Stack and Socket.IO

ChatSphere is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Socket.IO for real-time communication. It allows users to register 📝, login 🔑, and engage in real-time conversations with other users in various chat rooms.

## Screenshots

![12](https://github.com/AKASH-PRASAD7/ChatSphere/assets/110546856/ceb881b9-52f4-4d07-b3a5-2983a1ae8127)


## Features

- User authentication 🔒: Users can register, login, and logout securely.
- Real-time messaging 💬: Users can send and receive messages instantly in real-time.
- User profiles 🧑‍🤝‍🧑: Users have profiles with usernames and profile pictures.
- Responsive design 📱: The application is mobile-friendly and works well on different devices.

## Technologies Used

- **Frontend**:

  - React.js ⚛️
  - Socket.IO Client 🔌
  - React Router 🛣️
  - Context API (for state management) 🔄
  - Tailwind CSS (for styling) 🎨
  - Zustand (for global state management) 🗺️

- **Backend**:
  - Node.js 🚀
  - Express.js 🌐
  - MongoDB (with Mongoose ODM) 🗃️
  - Socket.IO 🔌
  - JWT (for user authentication) 🔑
  - Bcrypt (for password hashing) 🔒
  - Cookie Parser (for parsing cookies) 🍪

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/AKASH-PRASAD7/ChatSphere.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chatsphere
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd client && pnpm install
   cd /server && pnpm install
   ```

4. Set up environment variables:

   ### For `server` folder:

   i. Rename the `.sample.env` file to `.env`.
   ii. Open the `.env` file and add the following variables:

   ```
   PORT=3001 // Port number on which the server will run
   MONGODB_URI= // MongoDB connection URI
   JWT_SECRET_KEY=your-secret-key // Secret key for JWT authentication
   CLIENT_URL= // URL of the client application
   ```

   ### For `client` folder:

   1. Create a `.env` file in the `client` folder.
   2. Open the `.env` file and add the following variable:

   ```
   VITE_BASE_URL= // Base URL of the server API
   ```

5. Start the backend server:

   ```bash
   cd server && pnpm start
   ```

6. Start the frontend development server:

   ```bash
   cd client && pnpm dev
   ```

7. Visit `http://localhost:5173` in your browser to access the application.

## Folder Structure

- **client**: Contains the frontend React.js application.
- **server**: Contains the backend Node.js and Express.js application.
