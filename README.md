# 📘 LearnHub – Your Center for Skill Enhancement 🎓

LearnHub is a full-stack MERN-based online learning platform designed to simplify course creation, enrollment, and interaction between students and instructors. It supports secure authentication, user role management, and structured course content delivery.

---

## 🌐 Live Demo

> ⚠️ _Coming soon..._

---

## 🛠️ Tech Stack

**Frontend:**  
- React.js (with React Router, Axios)  
- Tailwind CSS / Bootstrap (optional for styling)  
- Vite (for faster builds)

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  
- JWT (Authentication)  
- bcrypt.js (Password security)

---

## 👥 User Roles

| Role        | Permissions |
|-------------|-------------|
| 🧑‍🎓 Student   | Register, enroll in courses, view content, chat with instructor |
| 👨‍🏫 Instructor | Create courses, add content, respond to student queries |
| 🛠️ Admin      | Manage users, assign roles, view system-wide stats |

---

## 🔐 Authentication & Authorization

- JWT-based token authentication
- bcrypt-hashed passwords with salting
- Role-based route access (Admin, Instructor, Student)
- Token expiry for session security

---

## 🔧 Features

✅ User Registration and Login  
✅ Role-based Dashboards  
✅ Add/View Courses (by instructors & students)  
✅ Secure API Routes with JWT  
✅ Instructor-Student Chat (Polling based)  
✅ Course Enrollment and Tracking  
✅ Responsive UI (mobile, tablet, desktop)

---

## 🧪 Testing

### 🧍 Manual Testing:
- All modules tested using real data inputs.
- Verified flows: registration, login, course addition, chat, enrollment.

### 🧪 API Testing with Postman:
- Tested endpoints like:
  - `POST /register`
  - `POST /login`
  - `POST /courses/add`
  - `POST /enroll`
  - `POST /messages`

### 🎨 UI Testing:
- Form validations, responsiveness, and user feedback
- Tested on various devices: mobile, tablet, and desktop

---

## 🐞 Known Issues

- No email verification after registration
- No real-time chat (uses polling)
- File uploads (e.g., for assignments) not implemented
- Some forms lack real-time client-side validation
- Role assignment done manually via backend

---

## 🚀 Future Enhancements

1. 🔴 Real-time Chat using Socket.IO  
2. 📩 Email & SMS Notifications  
3. 📊 Learning Analytics Dashboard  
4. 📁 File Upload for Assignments  
5. 🌐 Multilingual Interface  
6. 🔔 Push Notifications  
7. 🧑‍💼 Admin Role Management UI  
8. 📱 React Native Mobile App

---

## 📂 Folder Structure (Simplified)

/client # React frontend
/server # Node.js backend
├── /models # MongoDB schemas
├── /routes # Express routes
├── /controllers # Business logic
.env # Environment variables
README.md




## 📦 Installation & Setup

# Clone repository
git clone https://github.com/yourusername/learnhub.git
cd learnhub

# Backend setup
cd server
npm install
npm run dev

# Frontend setup
cd ../client
npm install
npm run dev
📜 License
This project is licensed under the MIT License.

🤝 Acknowledgments
Built as part of the SmartInternz Internship Program.


Let me know your GitHub username or repo URL if you want it personalized, or if you'd like a `.md` file download.
