import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/register.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/eventDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.post('/login', (req, res) => {
    res.render("login");
});

app.get('/register', (req, res) => {
    res.render("register");
});

app.post('/register', async (req, res) => {

    const fullName = req.query.fullname;
    const userName = req.query.username;
    const password = req.query.password;

    try {
        const existingUser = await User.findOne({ userName });
        if(existingUser) return res.status(400).json({ message: "User already exists." });
        
        const regUser = await User.create({
            fullName,
            userName,
            password
        });

        res.status(200).json({ message: "You have been registered successfully." });

    } catch(err) {
        res.status(500).json({ message: "Something went wrong. Please try again." });
    }

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
