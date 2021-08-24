import express from "express";
import mongoose from "mongoose";
import _ from "lodash";
import dotenv from "dotenv";

import User from "./models/register.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/eventDB", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Event Details API");
});

app.get('/register/', async (req, res) => {

    const fullName = _.lowerCase(req.query.fullname);
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
