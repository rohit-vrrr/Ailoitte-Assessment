import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    userName: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, minlength: 6 }
});

const User = mongoose.model("User", userSchema);

export default User;
