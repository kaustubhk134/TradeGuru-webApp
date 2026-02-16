# 📈TradeGuru

### Full-Stack Trading Simulation Platform (MERN Stack)

TradeGuru is a full-stack trading simulation platform built using the MERN stack (MongoDB, Express, React, Node.js). It models the workflow of a modern online brokerage system, enabling users to simulate stock trading, manage portfolios, analyze holdings, and monitor positions through a dedicated trading dashboard.

The application is architected with clear separation between presentation, business logic, and data layers, following scalable backend design principles and modular React component architecture.

---

## Table of Contents

- Project Overview
- Architecture & Design
- Tech Stack
- Core Features
- Installation
- Environment Variables
- Usage
- Folder Structure

---

## Project Overview

TradeGuru simulates real-world equity trading operations within a structured full-stack architecture. The platform includes:

- User authentication with session management
- Buy and Sell order placement
- Portfolio holdings management
- Open position tracking
- Watchlist functionality
- Portfolio visualization with charts
- Funds overview

The system separates the public landing interface from the authenticated trading dashboard, reflecting real-world product architecture patterns.

---

## Architecture & Design

TradeGuru follows a three-tier architecture:

### 1. Client Layer

- **Frontend (Landing Application)** – Public pages, pricing, product information, account access.
- **Dashboard (Trading Interface)** – Authenticated user interface for trading operations.

### 2. Application Layer

- Express.js REST API
- Authentication middleware
- Order processing logic
- Portfolio calculation engine

### 3. Data Layer

- MongoDB Atlas (Cloud-hosted database)
- Mongoose models and schemas

This separation ensures maintainability, scalability, and clarity of responsibility across components.

---

## Tech Stack

### Backend

- Node.js
- Express.js (v5)
- MongoDB Atlas
- Mongoose
- Passport.js (Local Strategy)
- Passport-Local-Mongoose
- Express-session
- CORS
- dotenv

### Frontend (Landing)

- React 19
- React Router
- Axios
- CSS

### Dashboard

- React 19
- Material UI (MUI)
- Chart.js
- React ChartJS 2
- Context API
- Axios

---

## Core Features

### Authentication

- User registration
- Login and logout
- Session-based authentication
- Password hashing via Passport-Local-Mongoose
- Protected API routes

(Authentication is partially implemented and being enhanced.)

---

### Trading Engine (Simulation)

- Place Buy and Sell orders
- Automatic holdings updates
- Position tracking
- Portfolio summary calculation
- Funds overview
- Watchlist management

---

### Dashboard & Analytics

- Portfolio distribution visualization (Doughnut charts)
- Comparative asset graphs (Bar charts)
- Modular trading components
- Real-time state synchronization with backend

---

## Installation

### Prerequisites

Ensure you have installed:

- Node.js (v18+ recommended)
- MongoDB Atlas account

---

### 1. Clone the Repository

```bash
gitclone https://github.com/kaustubhk134/TradeGuru-webApp.git
```

---

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 4. Install Dashboard Dependencies

```bash
cd dashboard
npm install
```

---

## Environment Variables

Create a `.env` file inside the `Backend/` directory:

```
MONGO_URI=your_mongodb_atlas_connection_stringSESSION_SECRET=your_session_secretPORT=5000
```

### Required Configuration

- Enable network access in MongoDB Atlas
- Create a database user with proper credentials
- Use a secure session secret

---

## Running the Application Locally

### Start Backend

```bash
cd Backend
npm start
```

Server runs on:

```
http://localhost:3002
```

---

### Start Frontend (Landing Application)

```bash
cd frontend
npm start
```

Runs on:

```
http://localhost:3000
```

---

### Start Dashboard

```bash
cd dashboard
npm start
```

Runs on the next available port (commonly 3001).

---

## Usage

### Authentication Routes

- Signup – Account creation via frontend
- Login – Authenticates and creates session
- Logout – Destroys session

After login, users can:

- Place simulated trades
- View portfolio holdings
- Monitor open positions
- Track funds
- Analyze portfolio distribution
- Manage watchlist

---

### Folder Structure

```bash

├── Backend/
│   ├── .gitignore
│   ├── model/
│   │   ├── OrdersModel.js
│   │   ├── HoldingsModel.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── OrdersSchema.js
│   │   ├── HoldingsSchema.js
│   │   └── PositionsSchema.js
│   ├── package.json
│   └── index.js
│
├── dashboard/
│   ├── public/
│   │   ├── robots.txt
│   │   ├── logo.png
│   │   ├── manifest.json
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.js
│   │   │   ├── Home.js
│   │   │   ├── DoughnoutChart.js
│   │   │   ├── Orders.js
│   │   │   ├── TopBar.js
│   │   │   ├── VerticalGraph.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── Funds.js
│   │   │   ├── Menu.js
│   │   │   ├── Holdings.js
│   │   │   ├── BuyActionWindow.css
│   │   │   └── WatchList.js
│   │   │
│   │   ├── index.js
│   │   ├── data/
│   │   │   └── data.js
│   │   └── index.css
│   │
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   ├── robots.txt
│   │   ├── media/
│   │   ├── manifest.json
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── signup/
│   │   │   │   └── Signup.js
│   │   │   ├── about/
│   │   │   │   ├── AboutPage.js
│   │   │   │   ├── Team.js
│   │   │   │   └── Hero.js
│   │   │   ├── pricing/
│   │   │   │   ├── PricingPage.js
│   │   │   │   ├── Hero.js
│   │   │   │   └── Brokerage.js
│   │   │   ├── NotFound.js
│   │   │   ├── support/
│   │   │   │   ├── SupportPage.js
│   │   │   │   ├── Hero.js
│   │   │   │   └── CreateTicket.js
│   │   │   ├── home/
│   │   │   │   ├── HomePage.js
│   │   │   │   ├── Hero.js
│   │   │   │   ├── Education.js
│   │   │   │   ├── Pricing.js
│   │   │   │   ├── Awards.js
│   │   │   │   └── Stats.js
│   │   │   ├── products/
│   │   │   │   ├── Hero.js
│   │   │   │   ├── RightSection.js
│   │   │   │   ├── LeftSection.js
│   │   │   │   ├── Universe.js
│   │   │   │   └── ProductsPage.js
│   │   │   ├── OpenAccount.js
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   │
│   │   ├── test/
│   │   │   └── Hero.test.js
│   │   ├── index.css
│   │   └── index.js
│   │
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
└── README.md
```
