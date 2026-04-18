# Gradly - Student Management System

Gradly is a full-stack student management web application built with Node.js, Express, MongoDB, and EJS. It helps students create accounts, manage profiles, upload media, reset passwords, and access a simple dashboard experience, while giving administrators a protected space to view and manage student records.

## Live Project

The project is deployed and available here:

[View Gradly Live](https://gradly-student-management-system.onrender.com)

## Project Overview

Gradly focuses on the core workflows needed in a student record management system:

- Student registration and login
- Email verification for new accounts
- Secure password reset and password change flow
- JWT-based authentication using HTTP-only cookies
- Student profile creation and profile image upload
- Profile editing and student record deletion
- Protected admin dashboard for student management
- Student video upload and video dashboard
- MongoDB-backed data storage with Mongoose models
- Server-side validation and upload handling

## Tech Stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js |
| Backend Framework | Express.js |
| Views | EJS |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT, bcryptjs, cookie-parser |
| File Uploads | Multer |
| Email Service | Nodemailer |
| Validation | Joi |
| Security | Helmet |

## Main Features

### Student Authentication

Students can register, verify their email, log in securely, change their password, and recover access through a password reset flow.

### Student Profiles

Authenticated students can view and update their profile details, including profile images uploaded through Multer.

### Admin Dashboard

Admins can access a protected dashboard to view and manage student records. Admin access is controlled through middleware and the configured super admin email.

### Media Uploads

Students can upload video files and view uploaded media through the protected video dashboard.

### Secure Server Setup

The app uses environment variables for sensitive configuration, JWT authentication for sessions, HTTP-only cookies, Helmet security headers, and structured validation for incoming data.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB, either local or hosted
- SMTP credentials for email verification and password reset emails

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Update `.env` with your own values:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/gradly
JWT_SECRET=replace-with-a-strong-secret

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_APP_NAME=Gradly
MAIL_FROM_ADDRESS=no-reply@example.com

SUPER_ADMIN_EMAIL=admin@example.com
```

Start the development server:

```bash
npm run dev
```

The app runs locally at:

```text
http://localhost:4000/students
```

## Available Scripts

```bash
npm start
```

Runs the app with Node.js.

```bash
npm run dev
```

Runs the app with Nodemon for local development.

```bash
node seed.js
```

Seeds sample student data into the configured MongoDB database.

## Project Structure

```text
config/        Database connection
controllers/   Request handlers and page logic
middleware/    Authentication, admin, and upload middleware
models/        Mongoose schemas and models
public/        Static CSS, JavaScript, and image assets
routes/        Express route definitions
service/       Nodemailer configuration
uploads/       Runtime uploaded images and videos
utils/         Token and mail helper functions
validations/   Joi validation schemas
views/         EJS templates
server.js      Application entry point
seed.js        Sample data seeding script
```

## Important Routes

| Route | Description |
| --- | --- |
| `/students` | Home page |
| `/students/register` | Student registration page |
| `/students/login` | Student login page |
| `/students/profile` | Protected student profile page |
| `/students/edit/:id` | Protected profile edit page |
| `/students/change-password` | Protected password change page |
| `/students/forgot-password` | Password recovery page |
| `/students/video-dashboard` | Protected video dashboard |
| `/students/admin/dashboard` | Protected admin dashboard |

## Environment Notes

Keep real credentials in `.env` only. The `.env.example` file documents the required variables and should be safe to commit.

Uploaded profile images and videos are runtime files. In production, consider using persistent object storage such as Cloudinary, AWS S3, or another media storage provider instead of relying only on the server filesystem.

## Deployment

Gradly is currently deployed on Render:

[https://gradly-student-management-system.onrender.com](https://gradly-student-management-system.onrender.com)

For deployment, configure the same environment variables used locally, including MongoDB, JWT, SMTP, and admin email settings.
