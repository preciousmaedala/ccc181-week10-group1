const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;

// Demo user
const demoUser = {
    id: 1,
    name: "Demo Student",
    email: "student@campusconnect.test",
    passwordHash: "$2b$10$QYAqvMZf5DgOzLJvfRCS.uYykWcKee.rczmVsPTWmT8pvdQy.yYqy"
};

// Middleware
app.use(cors({
    origin: process.env.CLIENT_ORIGIN
}));

app.use(express.json());

// Health check
app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

// Login
app.post("/api/v1/sessions", async (req, res) => {
    const { email, password } = req.body;

    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        !email.trim() ||
        !password
    ) {
        return res.status(400).json({
            error: "Email and password are required."
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
            error: "Please provide a valid email address."
        });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const passwordMatches = await bcrypt.compare(
        password,
        demoUser.passwordHash
    );

    if (
        normalizedEmail !== demoUser.email ||
        !passwordMatches
    ) {
        return res.status(401).json({
            error: "Invalid email or password."
        });
    }

    // Generate JWT token
    const token = jwt.sign(
        {
            id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return res.status(200).json({
        token,
        user: {
            id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
