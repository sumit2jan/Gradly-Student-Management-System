require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Student = require("./models/student.model");
const StudentDetail = require("./models/studentDetail.model");

mongoose.connect(process.env.MONGO_URI, {
  dbName: "classDB"
})
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

const firstNames = [
  "Aarav", "Vivaan", "Aditya", "Krishna", "Arjun", "Ishaan", "Rohan", "Kunal", "Rahul", "Sahil",
  "Neha", "Priya", "Ananya", "Sneha", "Pooja", "Kavya", "Riya", "Simran", "Megha", "Nisha"
];

const lastNames = [
  "Sharma", "Verma", "Gupta", "Singh", "Yadav", "Mehta", "Jain", "Agarwal", "Patel", "Kumar"
];

const hobbiesList = [
  ["Cricket", "Music"],
  ["Reading", "Travel"],
  ["Gaming", "Coding"],
  ["Football", "Gym"],
  ["Movies", "Music"]
];

const generateStudents = async () => {
  const students = [];
  const details = [];
  const hashedPassword = await bcrypt.hash("test@1234", 10);

  for (let i = 0; i < 50; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[i % lastNames.length];

    const student = new Student({
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}${i}@yopmail.com`,
      password: hashedPassword,
      isValid: true
    });

    students.push(student);

    const detail = new StudentDetail({
      student: student._id,
      age: 18 + (i % 5),
      gender: i % 2 === 0 ? "Male" : "Female",
      phone: `9876543${100 + i}`,
      pan: `ABCDE${1000 + i}F`,
      adhar: `12341234${1000 + i}`,
      country: "India",
      dob: new Date(2000, i % 12, (i % 28) + 1),
      address: `${firstName} Street ${i}, Delhi`,
      hobbies: hobbiesList[i % hobbiesList.length],
      image: "/uploads/default.png"
    });

    details.push(detail);
  }

  return { students, details };
};

const seedStudents = async () => {
  try {
    console.log("Seeding started...");

    await Student.deleteMany();
    await StudentDetail.deleteMany();

    const { students, details } = await generateStudents();

    await Student.insertMany(students);
    await StudentDetail.insertMany(details);

    console.log("50 Students + Details Seeded Successfully");
    process.exit();
  } catch (err) {
    console.log("Error:", err);
    process.exit(1);
  }
};

seedStudents();
