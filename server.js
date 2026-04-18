require("dotenv").config(); // ✅ FIRST

const express = require("express");
const connectDB = require("./config/db");
const cookieparser = require("cookie-parser");
const path = require("path");
const helmet = require("helmet");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser());

app.use((req, res, next) => {
    const token = req.cookies.token;
    res.locals.isLoggedIn = !!token;
    next();
});

app.get("/", (req, res) => {
    res.redirect("/students");
});

// routes
app.use("/students", require("./routes/student.routes"));
app.use("/students", require("./routes/admin.routes"));
app.use("/students", require("./routes/video.routes"));
app.use("/students", require("./routes/auth.routes"));
app.use("/students", require("./routes/view.routes"));
app.use("/mail", require("./routes/sendMailRoute"));

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});