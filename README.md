# 📚 Book Catalog REST API

A fully functional RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to manage a collection of books.  
This project was built as part of my internship at **CodeXIntern** to demonstrate backend development skills including routing, validation, error handling, and modular REST API design.

---

## 🚀 Features

- 📖 Create, Read, Update, and Delete books
- ✅ Input validation using `express-validator`
- ❗ Centralized error handling middleware
- 📌 Each book includes title, author, description, genre, published year, and availability
- 🧰 Clean, scalable project structure using MVC pattern
- ⌛ Timestamps for created and updated books
- 🌐 RESTful API design following best practices

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: express-validator
- **Error Handling**: Custom middleware
- **Environment Config**: dotenv
- **Tools**: Nodemon, Postman

---

## 📁 Project Structure

book-catalog-api/
│
├── controllers/
│ └── book.controller.js
│
├── middleware/
│ ├── errorHandler.js
│ └── validateBook.js
│
├── models/
│ └── book.model.js
│
├── routes/
│ └── book.Routes.js
│
├── config/
│ └── db.js
│
├── app.js
├── server.js
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## 📬 API Endpoints

All endpoints are prefixed with `/api/books`.

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/books`     | Create a new book       |
| GET    | `/api/books`     | Get all books           |
| GET    | `/api/books/:id` | Get a book by ID        |
| PUT    | `/api/books/:id` | Update a book by ID     |
| DELETE | `/api/books/:id` | Delete a book by ID     |

> All endpoints return JSON responses.  
> `POST` and `PUT` routes validate input fields.

---

## ✅ Validation Rules

The following fields are validated using `express-validator`:

- `title` (required)
- `author` (required)
- `genre` (optional, must be a string)
- `publishedYear` (optional, must be an integer)

If validation fails, a 400 error with detailed messages is returned.

---

## 🧪 Postman Collection

You can test all endpoints using the included Postman collection.

**📁 File:** `book-catalog-postman-collection.json`

📌 Steps:
1. Open Postman.
2. Click **Import**.
3. Select the JSON file.
4. Use the preconfigured requests to test your API.

---

## ⚙️ Setup Instructions

### Step 1: Clone the repository

```bash
git clone https://github.com/Yuvraj-Singh20/book-catalog-api
cd book-catalog-api


Step 2: Install Dependencies
bash
Copy
Edit
npm install


Step 3: Create a .env file in the root directory
env
Copy
Edit
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
🔐 Replace <your_mongodb_connection_string> with your actual MongoDB connection URI.



Step 4: Start the server
bash
Copy
Edit
# Development (with nodemon)
npm run dev

# OR if you want to run it manually
node server.js
If nodemon is not installed globally:

bash
Copy
Edit
npm install -g nodemon
# or use npx
npx nodemon server.js


🧼 Best Practices Followed
MVC pattern (Models, Routes, Controllers)

Modular route structure

Centralized error handling

Validation middleware

Clean file organization

Environment configuration using .env


📞 Contact
Built by Yuvraj Singh for internship evaluation at CodeXIntern.

📌 License
This project is licensed for educational and evaluation purposes only.

