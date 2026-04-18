# Gradly - Student Management System

Gradly is a Node.js and Express web app for managing student records, authentication, profiles, and student media uploads.

## Features

- Student registration, login, email verification, and password reset
- JWT authentication with HTTP-only cookies
- Student profile management with profile image upload
- Admin dashboard for viewing, updating, and deleting student records
- Student video upload and public video dashboard
- MongoDB models for students, details, and uploaded videos
- Server-side validation and basic upload cleanup

## Tech Stack

- Node.js, Express.js, EJS
- MongoDB and Mongoose
- JWT, bcryptjs, cookie-parser
- Multer for uploads
- Nodemailer for email flows
- Joi for validation

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Update `.env` with your MongoDB URI, JWT secret, SMTP credentials, and admin email before starting the app.

The app runs at:

```text
http://localhost:4000/students
```

## Scripts

```bash
npm start
npm run dev
node seed.js
```

`node seed.js` creates sample students in the configured MongoDB database.

## Environment

Required values are documented in `.env.example`. Keep real credentials in `.env` only and do not commit them.

## Project Structure

```text
config/        Database connection
controllers/   Route controllers
middleware/    Auth and upload middleware
models/        Mongoose models
public/        Static assets
routes/        Express routes
service/       Mail setup
uploads/       Runtime uploaded files
utils/         Token and mail helpers
validations/   Joi validation helpers
views/         EJS pages
server.js      App entry point
```

## Notes

Uploaded profile images and videos are runtime files and are ignored by Git. Keep only placeholder files or shared default assets in version control.
