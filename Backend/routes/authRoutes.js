import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
router.post("/register", async (req, res) => {
    console.log("Incoming Register Request:", req.body);

    try {
        const { name, email, password, role } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            console.log("User already exists:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            name,
            email,
            password: hashedPassword,
            role: role || "patient",
        });

        await user.save();
        console.log("✅ User registered successfully:", user);

        // 🔥 Return user details (excluding password) in the response
        res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("🔥 Registration Error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});


// Login Route
router.post("/login", async (req, res) => {
    console.log("Incoming Login Request:", req.body);

    try {
        const { email, password } = req.body;

        // ✅ Check if the user exists
        let user = await User.findOne({ email });

        if (!user) {
            console.log("❌ User not found:", email);
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Compare entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log("❌ Incorrect password for:", email);
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Generate JWT Token
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in the .env file");
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("✅ Login successful:", email);
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("🔥 Login Error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

export default router;


