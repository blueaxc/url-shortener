## Preview
![image](https://github.com/user-attachments/assets/441264fc-dab8-4792-9d67-dca94b7915d4)

# 🚀 URL Shortener

A full-stack URL shortener application built with:

- 🧠 Node.js + Express
- 📦 MongoDB (NoSQL)
- ⚡ Redis for caching
- 🎨 HTML, CSS, JavaScript frontend
- ☁️ Deployed and tested in a WSL (Ubuntu on Windows) environment

---

## 📂 Project Structure

url-shortener/ ├── backend/ │ ├── config/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── server.js │ ├── db.js │ ├── redisClient.js │ └── .env ├── frontend/ │ ├── index.html │ ├── style.css │ └── app.js ├── .gitignore ├── README.md

markdown
Copy
Edit

---

## 🛠 Features

- Generate short URLs
- Redirect to original URLs via short codes
- Cache URL lookups using Redis
- Track IPs for each click
- Clean, minimal frontend
- Built and tested on **WSL Ubuntu**

---

## 🚀 Getting Started

### 📦 Requirements

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Ubuntu recommended)

### 🛠 Install Dependencies

```bash
cd backend
npm install
⚙️ Configuration
Create a .env file in the backend/ directory:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/urlShortener
REDIS_URL=redis://localhost:6379
BASE_URL=http://localhost:5000
▶️ Run the App (WSL)
Start MongoDB (use mongod or sudo service mongod start)

Start Redis (use redis-server or sudo service redis-server start)

Run the server with nodemon:

bash
Copy
Edit
nodemon server.js
🌐 Frontend
Open frontend/index.html directly in the browser (or serve with live server).

📮 API Endpoints
POST /api/shorten – shorten a URL

GET /:code – redirect to original URL

🧪 Testing
Use Postman or curl to test:

bash
Copy
Edit
curl -X POST http://localhost:5000/api/shorten \
-H "Content-Type: application/json" \
-d '{"originalUrl":"https://example.com"}'
👨‍💻 Developed with WSL
This project was built and tested using WSL (Windows Subsystem for Linux) running Ubuntu, allowing full Linux development tools inside Windows.
