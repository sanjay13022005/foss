# Blog Platform Setup and User Registration

Follow these steps to set up the blog platform and register a new user.

1.  **Navigate to the project directory:**
    ```bash
    cd blog-platform
    ```

2.  **Initialize npm project:**
    ```bash
    npm init -y
    ```

3.  **Install production dependencies:**
    ```bash
    npm install express mongoose bcryptjs jsonwebtoken dotenv cors
    ```

4.  **Install development dependencies (nodemon):**
    ```bash
    npm install nodemon --save-dev
    ```

5.  **Configure MongoDB Connection:**
    Ensure your application is configured to connect to your MongoDB instance. The connection string should be:
    `mongodb://127.0.0.1:27017/blog`

6.  **Update Database Configuration File:**
    If you have a `db.js` file (or similar configuration file for your database connection), make sure the MongoDB connection string is set to:
    `mongodb://127.0.0.1:27017/blog`
    *Example (conceptual, actual code might vary):*
    ```javascript
    // In db.js or your database connection setup
    const mongoose = require('mongoose');
    const MONGO_URI = "mongodb://127.0.0.1:27017/blog";

    const connectDB = async () => {
      try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected...');
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
    };

    module.exports = connectDB;
    ```

7.  **Start the development server:**
    (Assuming you have a `dev` script in your `package.json` like `"dev": "nodemon server.js"`)
    ```bash
    npm run dev
    ```

8.  **Register a User via API Client (e.g., Thunder Client):**
    *   Open your API client (Thunder Client, Postman, Insomnia, etc.).
    *   Create a new `POST` request.
    *   Set the URL to: `http://localhost:5000/api/auth/register`

9.  **Add Request Body:**
    *   Go to the "Body" tab of your request.
    *   Select "JSON" as the body type.
    *   Add the following JSON payload:
        ```json
        {
          "username": "hello",
          "email": "hello@gmail.com",
          "password": "1234"
        }
        ```
    *   Send the request. You should receive a response indicating successful registration or any errors.

---
**MongoDB Connection String Reference:**
`mongodb://127.0.0.1:27017/blog`
---
