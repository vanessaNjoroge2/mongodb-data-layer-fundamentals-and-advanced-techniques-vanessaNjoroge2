PLP MongoDB Bookstore

This project is a simple MongoDB + Node.js setup for managing a bookstore database. It demonstrates how to insert, query, update, and delete documents in MongoDB using the official Node.js driver.

🚀 Features

Insert multiple book documents into a collection

Query all books from the database

Update book details (e.g., price, stock availability)

Delete specific books

Connects to MongoDB locally (127.0.0.1:27017)

📂 Project Structure
PLP Mongodb/
│── insert_books.js   # Inserts 12 books into the 'books' collection
│── queries.js        # Run queries like find, update, delete
│── package.json      # Node.js dependencies
│── README.md         # Project documentation
│── 12 books inthe db.jpg   # Screenshot showing inserted books in MongoDB


📸 Example Screenshot:


⚙️ Setup Instructions
1️⃣ Clone or Download the Project

If it’s in GitHub:

git clone <your-repo-link>
cd PLP\ Mongodb


Or manually copy the folder into your system.

2️⃣ Install Dependencies

Run inside the project folder:

npm init -y
npm install mongodb

3️⃣ Run the Insert Script

This will drop existing data (if any) and insert 12 books.

node insert_books.js


Expected output:

Connected to MongoDB server
Collection already contains 12 documents. Dropping collection...
Collection dropped successfully
12 books were successfully inserted into the database

4️⃣ Run Queries

To query, update, or delete books, run:

node queries.js


Examples:

Find all books

Delete a book by title

Update book price or stock

View Data in MongoDB Compass

Open MongoDB Compass

Connect to:

mongodb://127.0.0.1:27017


Select database: plp_bookstore

Open collection: books

You will see all inserted documents.

📖 Technologies Used

MongoDB (Database)

Node.js (Runtime)

MongoDB Node.js Driver
