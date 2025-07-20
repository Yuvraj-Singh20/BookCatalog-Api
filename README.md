# 📚 Book Catalog REST API

A fully functional RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to manage a collection of books.  
This project was developed as part of my internship at **CodeXIntern** to showcase backend development skills, including routing, CRUD operations, validation, and RESTful design.

---

## 🚀 Features

- 📖 Create, Read, Update, and Delete books
- 🧾 Book attributes: title, author, description, genre, year, availability
- ✅ Input validation with `express-validator`
- 🔄 Centralized error handling
- 📁 Clean and scalable project structure using MVC pattern
- ⏱️ Timestamps for created and updated entries
- 🌐 RESTful design following best practices

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Validation**: express-validator
- **Environment Config**: dotenv
- **Development Tools**: Nodemon, Postman

---

## 📁 Project Structure

book-catalog-api/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── book.controller.js
│
├── models/
│ └── book.model.js
│
├── middleware/
│ ├── validateBook.js
│ └── errorHandler.js
│
├── routes/
│ └── book.routes.js
│
├── app.js
├── server.js
├── .env
├── package.json
├── README.md
└── Book Catalog-Api.postman_collection.json ✅

yaml
Copy
Edit

---

## 📬 API Endpoints

All endpoints are prefixed with: `http://localhost:5000/api/books`

| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| POST   | `/api/books`           | Add a new book          |
| GET    | `/api/books`           | Get all books           |
| GET    | `/api/books/:id`       | Get a specific book     |
| PUT    | `/api/books/:id`       | Update a specific book  |
| DELETE | `/api/books/:id`       | Delete a specific book  |

📌 All endpoints return `JSON` responses.

---

## 🧪 Postman Collection

You can test the complete API using the included Postman collection.

- **📁 File**: [`Book Catalog-Api.postman_collection.json`](./Book%20Catalog-Api.postman_collection.json)

### How to Import:

1. Open **Postman**.
2. Click on **Import**.
3. Choose the file: `Book Catalog-Api.postman_collection.json`
4. Use the pre-configured requests to test the API.

---

## ⚙️ Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/Yuvraj-Singh20/book-catalog-api.git
cd book-catalog-api
Step 2: Install Dependencies
bash
Copy
Edit
npm install
Step 3: Create a .env File
Create a .env file in the root directory and add your MongoDB URI:

env
Copy
Edit
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
Replace <your_mongodb_connection_string> with your actual MongoDB URI.

Step 4: Run the Server
bash
Copy
Edit
npm run dev
If you don't have nodemon installed globally, use:

bash
Copy
Edit
npx nodemon server.js
✅ Sample Book JSON (for POST or PUT requests)
json
Copy
Edit
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "description": "A novel about a shepherd's journey to follow his dreams.",
  "genre": "Fiction",
  "year": 1988,
  "available": true
}


📌 Notes
API returns 204 No Content on successful deletion.

Validation errors return 400 Bad Request with details.

Invalid or missing IDs return 404 Book not found.


🙌 Author
Yuvraj Singh

