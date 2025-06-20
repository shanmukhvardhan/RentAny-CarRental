# 🚗 RentAny - Vehicle Rental Platform

A modern, full-featured vehicle rental web application for India.  
Book SUVs, Sedans, Mini cars, Premium vehicles, Bikes, and Machinery—anytime, anywhere.

---

## 🌟 Live Demo

[🔗 Visit the Live Site]https://rentany-rentalplace.onrender.com

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 📝 About

**RentAny** is a seamless, user-friendly platform for renting vehicles across multiple categories and locations in India.  
It offers real-time vehicle availability, secure booking, payment simulation, and a beautiful, responsive UI.

---

## ✨ Features

- **Category Browsing:** SUVs, Sedans, Mini, Premium, Bikes, Machinery
- **Location-Based Search:** Visakhapatnam, Bheemli, Siripuram, and more
- **Date-Based Availability:** Book by pickup and handover dates
- **Detailed Listings:** High-quality images, pricing, and descriptions
- **User Authentication:** Secure sign up & login (JWT)
- **Booking Management:** Confirm, view, and manage your bookings
- **Payment Simulation:** Realistic payment UI with validation
- **Responsive Design:** Works on desktop, tablet, and mobile
- **Admin Features:** (Optional) Add/update vehicles, manage users

---


---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript, Bootstrap, Font Awesome
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Deployment:** Render
- **Other:** Toast Notifications, JWT, Dotenv

---

## 🚀 Getting Started

### 1. **Clone the repository**
git clone https://github.com/shanmukhvardhan/RentAny-CarRental.git
cd RentAny-CarRental


### 2. **Backend Setup**
cd backend
npm install

- Create a `.env` file in `backend/`:
PORT=5000
MONGO_URI=mongodb+srv://MongoUser:MongoUser@mycluster.zbjzmo8.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=MyCluster
JWT_SECRET=supersecretkey


### 3. **Seed the Database**
node scripts/seedVehicles.js


### 4. **Run the Backend**
npm start
- The backend will be available at `http://localhost:5000/`

### 5. **Frontend Setup**
- All static files are in `backend/public/`
- Open `http://localhost:5000/` in your browser to use the app locally.

---

## 📂 Project Structure

backend/
public/
index.html
assets/
css/
js/
... (all frontend files)
models/
routes/
scripts/
app.js
package.json
.env


---

## 💡 Usage

- **Browse:** Choose a category and location to see available vehicles.
- **Book:** Select dates, view pricing, and confirm your booking.
- **Pay:** Enter payment details (simulated gateway).
- **Manage:** View and manage your bookings from your dashboard.

---

## 🔗 API Endpoints

| Method | Endpoint                       | Description                        |
|--------|-------------------------------|------------------------------------|
| GET    | `/api/vehicles/search`        | Search vehicles by category, location, dates |
| GET    | `/api/vehicles/:id/details`   | Get details for a specific vehicle |
| POST   | `/api/auth/register`          | Register a new user                |
| POST   | `/api/auth/login`             | User login                         |
| POST   | `/api/bookings/create`        | Create a new booking               |

---

## 🤝 Contributing

Contributions are welcome!  
- Fork the repo
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Render](https://render.com/)
- [Vercel](https://vercel.com/)
- [Unsplash](https://unsplash.com/) & [Pexels](https://pexels.com/) for images
- [Professional README Guide][2]

---

> _“Find your ride, anytime. RentAny makes mobility effortless.”_

