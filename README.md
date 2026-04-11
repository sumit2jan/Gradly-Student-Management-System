# Gradly - Student Management System

Gradly is a full-stack student management web application built for managing student records, authentication, profiles, admin workflows, and student-uploaded media from a single portal.

The project focuses on practical school or institute administration workflows: students can register, verify their email, manage their profile, upload profile images and videos, while admins can review and manage student records from a protected dashboard.

## Features

- Student registration with profile details, image upload, and validation
- Secure login using JWT-based authentication stored in HTTP-only cookies
- Email verification flow with expiring verification links
- Forgot password and reset password flow through email
- Change password flow for authenticated users
- Student profile page with editable personal and academic details
- Admin-only dashboard for viewing, updating, and deleting student records
- Role-based access control for protected admin actions
- Video upload support for student media
- Public student video feed with uploader details
- MongoDB data modeling for users, student details, and uploaded videos
- Server-side validation, duplicate-record handling, and file cleanup on failed registration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens
- bcryptjs
- Nodemailer
- Multer
- Joi
- HTML/CSS and JavaScript

## Project Structure

```text
Gradly-Student-Management-System/
├── config/            # Database connection
├── controllers/       # Request handlers and business logic
├── middleware/        # Auth, admin, and file upload middleware
├── models/            # Mongoose schemas
├── public/            # Static CSS, JavaScript, and image assets
├── routes/            # Application routes
├── service/           # Mail transport setup
├── uploads/           # Runtime upload storage
├── utils/             # Token and mail helper utilities
├── validations/       # Validation helpers
├── views/             # Server-rendered pages
├── server.js          # Application entry point
└── package.json       # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- MongoDB running locally or a MongoDB Atlas connection string
- SMTP credentials for email verification and password reset emails

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Gradly-Student-Management-System
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Update `.env` with your MongoDB URI, JWT secret, SMTP settings, and admin email.

Start the development server:

```bash
npm run dev
```

For production-style startup:

```bash
npm start
```

The app runs on:

```text
http://localhost:4000/students
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Server port. Defaults to `4000` if not provided. |
| `MONGO_URI` | MongoDB connection string. |
| `JWT_SECRET` | Secret key used for login, email verification, and password reset tokens. |
| `SMTP_HOST` | SMTP server host. |
| `SMTP_PORT` | SMTP server port. |
| `SMTP_USER` | SMTP account username. |
| `SMTP_PASSWORD` | SMTP account password or app password. |
| `SMTP_APP_NAME` | Sender application name shown in emails. |
| `MAIL_FROM_ADDRESS` | Sender email address. |
| `SUPER_ADMIN_EMAIL` | Email address allowed to access protected admin controls. |

## Main Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/students` | Home page and latest videos |
| `GET` | `/students/register` | Registration page |
| `POST` | `/students/register` | Create a student account |
| `GET` | `/students/login` | Login page |
| `POST` | `/students/login` | Authenticate student |
| `GET` | `/students/profile` | Authenticated student profile |
| `GET` | `/students/edit/:id` | Edit student profile |
| `POST` | `/students/edit/:id` | Update student profile |
| `POST` | `/students/delete/:id` | Delete student record, admin only |
| `GET` | `/students/admin/dashboard` | Admin dashboard |
| `POST` | `/students/upload` | Upload student video |
| `GET` | `/students/video-dashboard` | Browse student media |
| `GET` | `/students/view/:id` | View a student profile and videos |
| `POST` | `/students/forgot-password` | Send password reset email |
| `POST` | `/students/reset-password` | Reset password |
| `POST` | `/students/change-password` | Change current password |

## Security Notes

- Passwords are hashed before being stored.
- JWT tokens are stored in HTTP-only cookies.
- Email verification and password reset links expire automatically.
- Admin actions are protected by authentication and an admin email check.
- Uploaded profile images and videos are stored outside version control.
- Never commit `.env` or real SMTP/database credentials.

## Recommended GitHub Commit Message

```text
Initial commit: add Gradly student management system
```

## License

This project is licensed under the ISC License.
