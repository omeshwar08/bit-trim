# Bit-Trim — URL Shortener

Live Demo: [https://bit-trim.netlify.app/](https://bit-trim.netlify.app/)
Repository: [https://github.com/omeshwar08/bit-trim](https://github.com/omeshwar08/bit-trim)

---

## Overview

Bit‑Trim is a simple and fast URL shortening tool that I built using **React 18 (Vite)** on the frontend and **Spring Boot (Java 21)** on the backend. The goal was to create a clean, responsive, and reliable URL shortener with minimal complexity but solid structure.

The backend is deployed on **Render**, and all URL mappings are stored in a **Neon PostgreSQL database**, which is a cloud‑hosted, scalable Postgres service. The frontend is deployed on **Netlify**.

This README explains the project architecture, how to run it, how it’s deployed, and how to extend it.

---

## Features

* Convert long URLs into clean, short links
* Instant copy-to-clipboard feature
* Fast redirection handled by backend
* URL validation on frontend + backend
* Fully responsive UI built with Vite + React
* Cloud PostgreSQL database (Neon)
* Backend running as a Render web service

---

## Tech Stack

### **Frontend**

* React 18
* Vite
* Axios
* CSS / Tailwind (if used)

### **Backend**

* Spring Boot (Java 21)
* Spring Web
* Spring Data JPA
* PostgreSQL (Neon DB)

### **Deployment**

* Netlify (Frontend)
* Render (Backend)
* Neon (Database)

---

## Folder Structure

```
bit-trim/
├── url-shortener-react/       # Vite + React frontend
└── url-shortener-sb/          # Spring Boot backend
```

---

## Running the Project Locally

### Prerequisites

* Node.js (16+)
* Java 21
* Maven or Gradle
* PostgreSQL running locally (optional, since H2 can be used for dev)

---

# Backend Setup (Spring Boot - Java 21)

1. Go to the backend folder:

   ```bash
   cd url-shortener-sb
   ```
2. Run the backend:

   ```bash
   mvn spring-boot:run
   ```
3. The backend will start at:

```
http://localhost:8080
```

### Development Database (Optional)

You can use H2 locally by updating `application.properties` or keep Neon credentials when testing.

### Example `application.properties`

```
spring.datasource.url=${SPRING_DATASOURCE_URL}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
frontend.url=${FRONTEND_URL}
server.port=8080
```

If you are using Neon locally, export the environment variables before running the app.

---

# Frontend Setup (React 18 + Vite)

1. Go to the frontend folder:

   ```bash
   cd url-shortener-react
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the Vite development server:

   ```bash
   npm run dev
   ```

The app will be available at:

```
http://localhost:5173
```

### Frontend `.env` Example

```
VITE_BACKEND_URL=""
VITE_REACT_FRONT_END_URL=""
```

For production, this URL must be changed to your Render backend URL.

---

## How It Works (Architecture)

The flow is intentionally simple:

1. User pastes a long URL in the frontend.
2. The frontend sends it to the backend (POST request).
3. The backend creates a short unique code and stores it in Neon PostgreSQL.
4. The backend returns the generated short URL.
5. When someone opens the short URL, the backend receives the request using the short code.
6. It fetches the original URL from the database and redirects the user instantly.

Because the backend handles the redirect rather than the frontend, it’s faster and avoids unnecessary routing.

---

## Database (Neon PostgreSQL)

Neon stores all URL records. A basic table structure looks like:

```
id (primary key)
short_code (unique)
original_url
created_at
total_clicks (optional)
```

Neon is serverless and scales automatically, which makes it ideal for this kind of project.

---

## Deployment

### Frontend (Netlify)

1. Build the project:

   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder on Netlify.

### Backend (Render)

* Create a **Web Service** on Render.
* Connect your GitHub repo.
* Render will auto-detect Java + Maven.
* Set the build and start commands:

  ```bash
  mvn clean package
  ```

  ```bash
  java -jar target/*.jar
  ```
* Add environment variables:

  * `SPRING_DATASOURCE_URL`
  * `SPRING_DATASOURCE_USERNAME`
  * `SPRING_DATASOURCE_PASSWORD`
  * `SERVER_PORT=8080`

### Database (Neon)

* Create a Neon PostgreSQL DB
* Copy connection string
* Use it as `SPRING_DATASOURCE_URL` in Render

---

## Author

Built by **Omeshwar Chowdhury**.
If you want to contribute, suggest improvements, or open issues, feel free to submit PRs on GitHub.

---
