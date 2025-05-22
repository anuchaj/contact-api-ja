# contact-api-ja

# 📇 Contacts API

A RESTful API for storing and managing contacts, built with Node.js, Express, and MongoDB. The API is fully documented with Swagger and deployed to Render.

---

## 🔗 Live Links

- 🔥 Render URL: [https://your-app.onrender.com](https://your-app.onrender.com)
- 📘 Swagger Docs: [https://your-app.onrender.com/api-docs](https://your-app.onrender.com/api-docs)
- 🎥 YouTube Demo: [https://youtube.com/your-demo-link](https://youtube.com/your-demo-link)
- 📁 GitHub Repo: [https://github.com/your-username/contacts-api](https://github.com/your-username/contacts-api)

---

## 📦 Tech Stack

- Node.js
- Express
- MongoDB (via Mongoose)
- Swagger (OpenAPI)
- Render (Deployment)

---

## 📋 Features

- Create, read, update, and delete (CRUD) contacts
- Swagger UI for API documentation
- REST Client test file (`contacts.rest`)
- Environment config with `.env`
- Deployable to cloud services like Render

---

## 🧪 API Endpoints

| Method | Route                  | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/contacts`        | Get all contacts         |
| GET    | `/api/contacts/:id`    | Get contact by ID        |
| POST   | `/api/contacts`        | Create new contact       |
| PUT    | `/api/contacts/:id`    | Update existing contact  |
| DELETE | `/api/contacts/:id`    | Delete a contact         |

---

## 🔌 Local Setup

```bash
# Clone the repo
git clone https://github.com/your-username/contacts-api
cd contacts-api

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit the .env file to include your MongoDB URI

# Start the server
npm run dev
