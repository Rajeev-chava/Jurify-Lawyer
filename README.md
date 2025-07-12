# ⚖️ Jurify - Lawyer Management System

**Jurify** is a full-stack MERN web application designed to simplify lawyer-client interactions. It provides appointment scheduling, client management, and a responsive user interface — all streamlined for legal professionals.

---

## 🚀 Features

- 🧑‍⚖️ Lawyer & Client Login
- 📅 Book and view appointments
- 🔐 Secure authentication using JWT and cookies
- 📱 Responsive design for desktop and mobile
- 📊 Role-based dashboard interfaces

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- Tailwind CSS

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication

**Other Tools**:
- Git & GitHub
- dotenv for environment configuration

---

## 📁 Folder Structure

jurify/
├── jurify-frontend/ # React frontend
└── jurify-backend/ # Node + Express backend


---

## 🧑‍💻 Developed by

**Chava Rajeev**  
📧 22jr5a1207@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/chavarajeev)  
🔗 [GitHub](https://github.com/Rajeev-chava)

---

## ⚙️ Installation Guide


### 1. Clone the repository 
<pre>
git clone https://github.com/Rajeev-chava/Jurify-Lawyer.git
</pre>

### 2. Navigate to directory
<pre>
cd jurify Lawyer
</pre>
### 3. Set up the backend
<pre>
cd jurify-backend

npm install
</pre>

### 4. Create a .env file inside jurify-backend:
<pre>
MONGO_URL="your_mongodb_url_here"
PORT=5000
</pre>
### 5. Start the backend server:
<pre>
npm start
</pre>
### 6. Set up the frontend
<pre>
cd jurify-frontend
npm install
npm start
</pre>

---

### Visit: 
http://localhost:3000

---

## 📌 Notes
- .env files are excluded from version control via .gitignore for security

- Replace your_mongodb_url_here with your actual MongoDB connection string

- Ensure the backend runs on port 5000 or update the proxy in jurify-frontend/package.json if needed.

---

## 🪪 License
This project is licensed under the MIT License.