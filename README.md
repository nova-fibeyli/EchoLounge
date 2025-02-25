# Project Setup Guide

## 1. Environment Variables (`.env` File)

This project requires a `.env` file to store sensitive information such as database credentials, API keys, and JWT secrets.

### Example `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### How to Set Up `.env`:
1. Create a `.env` file in the root directory.
2. Copy and paste the example variables above.
3. Replace placeholder values with actual credentials.

## 2. Installing Dependencies

Before running the project, install all necessary dependencies using:
```sh
npm install
```
This will create a `node_modules` folder containing all required packages.

## 3. Running the Project Locally

To start the server in development mode:
```sh
npm start
```
Or, if using `nodemon` (if installed):
```sh
npm run dev
```

### Testing API Endpoints
- Use **Postman** to send requests to `http://localhost:5000/api/`.
- Ensure you include authentication tokens (if required).
- For "'admin@example.com', 'admin2@example.com'" have 'admin' roles, other emails have only 'user' roles 

```sh
POST /api/auth/register
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

```sh
POST /api/auth/login
{
  "email": "test@example.com",
  "password": "password123"
}
```

```sh
POST /api/posts
Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
{
  "title": "Мой первый пост",
  "content": "Это содержимое поста"
}
```

```sh
PUT /api/posts/:id
Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
{
  "title": "Мой первый пост",
  "content": "Это содержимое поста"
}
```

```sh
GET /api/posts
Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
{
  "title": "Мой первый пост",
  "content": "Это содержимое поста"
}
```

```sh
DELETE /api/posts/:id
Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
{
  "title": "Мой первый пост",
  "content": "Это содержимое поста"
}
```

## 4. Deploying to Railway

### Steps to Deploy:
1. Sign up at [Railway.app](https://railway.app/).
2. Create a new project.
3. Connect your GitHub repository.
4. Set environment variables in **Railway Settings**.
5. Deploy the project by clicking **Deploy**.
6. Once deployed, Railway provides a public URL for the API.

### Updating the Deployment:
After making changes:
```sh
git add .
git commit -m "Updated backend functionality"
git push origin main
```
Railway will automatically detect the changes and redeploy the project.

## 5. Additional Notes
- **Ensure `.env` is correctly configured** before running the project.
- **Check logs on Railway** in case of errors (`railway logs`).
- **Use `npm install`** after pulling updates from Git to install any new dependencies.

For any issues, check Railway logs or run:
```sh
npm run debug
```

---
This guide helps ensure smooth setup and deployment for other backend developers.

