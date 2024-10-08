# ProductPal

**ProductPal** is a full-stack single-page application designed to allow users to browse, search, filter, and sort products efficiently. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it features robust functionalities like pagination, searching, categorization, sorting, and authentication.

## Live Demo

Check out the live version of the project: [ProductPal Online Store](https://productpal-online-store-02.web.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contact](#contact)

## Features

1. **Pagination**: Efficiently load and navigate through products with page numbers and navigation buttons.
2. **Search**: Search products by name using a search bar.
3. **Categorization**: Filter products by:
   - Brand Name
   - Category Name
   - Price Range
4. **Sorting**: Sort products by:
   - Price: Low to High, High to Low
   - Date Added: Newest First
5. **Authentication**:
   - Google Authentication using Firebase.
   - Email and Password Authentication using Firebase.
6. **Responsive Design**: Mobile-first design with fully responsive UI.
7. **Product Cards**: Display product information concisely using fixed-size product cards.
8. **Navigation**:
   - Navbar with the website name/logo and relevant routes.
   - Footer with necessary information and links.

## Technologies Used

### Frontend

- React.js
- Tailwind CSS (for styling)
- Firebase Authentication
- Axios (for API calls)

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose (for database management)
- Firebase Admin SDK (for authentication verification)

## Project Structure

```bash
ProductPal/
├── client/                # Frontend code (React)
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Application pages
│   │   ├── assets/        # Images, icons, etc.
│   │   ├── App.js         # Main application component
│   │   ├── index.js       # Entry point for React
│   │   ├── ...            # Other configuration and setup files
│   ├── public/
│   ├── README.md          # Project overview and instructions
│   └── ...                # Other files like package.json, etc.
│
└── server/                # Backend code (Node.js, Express)
    ├── src/
    │   ├── index.js       # Main server configuration
    │   ├── ...            # Other configuration and setup files
    ├── README.md          # Project overview and instructions
    └── ...                # Other files like package.json, etc.
```

## Installation and Setup

### Backend

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mdimamhosen/ProductPal-Server.git
   cd ProductPal-Server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGODB_URI=<Your MongoDB connection string>
     FIREBASE_ADMIN_SDK_JSON=<Firebase Admin SDK JSON>
     PORT=3001
     ```

4. **Run the server**:
   ```bash
   npm start
   ```

### Frontend

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mdimamhosen/ProductPal---Client.git
   cd ProductPal---Client
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     REACT_APP_API_URL=<Your backend API URL>
     REACT_APP_FIREBASE_API_KEY=<Your Firebase API Key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
     REACT_APP_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
     REACT_APP_FIREBASE_APP_ID=<Your Firebase App ID>
     ```

4. **Run the React app**:
   ```bash
   npm start
   ```

## API Endpoints

Here are the main API endpoints available:

- `GET /products`: Fetch all products.
- `GET /productDetails/:id`: Fetch a single product by its ID.
- `GET /allproducts`: Fetch all products with pagination, filtering, and sorting options.
- `POST /signup`: User signup.
- `POST /login`: User login.

## Authentication

ProductPal supports two types of authentication:

1. **Google Authentication**: Users can sign in using their Google accounts via Firebase.
2. **Email and Password Authentication**: Users can sign up and log in using their email and password via Firebase.

## Contact

For any questions or inquiries, feel free to reach out:

- **Md Imam Hosen**
- **Email**: mdimam.cse9.bu@gmail.com
- **LinkedIn**: [Md Imam Hosen](https://www.linkedin.com/in/mdimam02/)

This `README.md` provides an overview of the project, including features, setup instructions, and other relevant information.
