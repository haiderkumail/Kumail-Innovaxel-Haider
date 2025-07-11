# Kumail-Innovaxel-Haider
# URL Shortener API

A simple **RESTful API** and minimal **frontend** to shorten long URLs, retrieve original URLs, update or delete them, and track usage statistics.

---

## 📌 **Project Structure**

- `server.js` — Main Express server
- `routes/shortenRoutes.js` — API routes for create, retrieve, update, delete, stats
- `controllers/shortenController.js` — Logic for handling API requests
- `models/ShortUrl.js` — Mongoose model for storing URLs
- `public/index.html` — Minimal frontend to interact with the API
- `public/redirect.html` — Handles redirecting a short code to the original URL

---

## ⚙️ **Tech Stack**

- **Backend:** Node.js, Express.js, Mongoose (MongoDB Atlas)
- **Database:** MongoDB Atlas
- **Frontend:** Plain HTML + Vanilla JavaScript

---

## 🚀 **Features**

✅ Create new short URLs  
✅ Retrieve original URLs from short codes  
✅ Update existing short URLs  
✅ Delete short URLs  
✅ Get access statistics (number of times accessed)  
✅ Minimal web frontend to test all operations  
✅ Redirection from short link to original URL

---

## 🏃‍♂️ **Getting Started**

1️⃣ Clone the Repository

git clone -b dev  https://github.com/haiderkumail/Kumail-Innovaxel-Haider.git
cd Kumail-Innovaxel-Haider

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment

Create a .env file in the project root:
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
✅ Replace with your MongoDB Atlas connection string.

4️⃣ Run the Application

node server.js
The server will start at:
👉 http://localhost:5000

🌐 Frontend Usage
Open your browser:

http://localhost:5000

You can:

Create a short URL

Update it

Get its stats

Use the generated link to redirect back to the original URL

🔗 API Endpoints
Method	Endpoint	Description
POST	/shorten	Create a new short URL
GET	/shorten/:shortCode	Retrieve original URL & increment counter
PUT	/shorten/:shortCode	Update existing short URL
DELETE	/shorten/:shortCode	Delete short URL
GET	/shorten/:shortCode/stats	Get access statistics

✔️ Branching
main — Only contains this README.md

dev — Contains the complete working application

📣 Submission
✅ main → README only
✅ dev → Complete code
✅ At least 15 meaningful commits with clear messages

🙌 Author
Name: Kumail Haider
Email: hkumail245@gmail.com
Repository: kumail-innovaxel-haider
