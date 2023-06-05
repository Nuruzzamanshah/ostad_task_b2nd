const {hashPassword, comparePassword} = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel")

const JWT_SECRET = "ThisIsNotASecret"

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({ error: "Name is required" });
        }
        if (!email) {
            return res.json({ error: "Email is required" });
        }
        if (!password || password.length < 6) {
            return res.json({ error: "Password must be at least 6 characters long" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ error: "Email is taken" });
        }

        const hashedPassword = await hashPassword(password);

        const user = await new User({
            name,
            email,
            password: hashedPassword,
        }).save();
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "1d",
        });
        res.json({
            user: {
                name: user.name,
                email: user.email
            },
            token,
        });
    } catch (err) {
        console.log(err);
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.json({ error: "Email is required" });
        }
        if (!password || password.length < 6) {
            return res.json({ error: "Password must be at least 6 characters long" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: "User not found" });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d",
        });
        res.json({
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        });
    } catch (err) {
        console.log(err);
    }
};



exports.protected = async (req,res) =>{
    try {
        const token = req.headers.token;
        if (!token){
            return res.json({error: "No token Provided"})
        }
        try {
            const decode = await jwt.verify(token, JWT_SECRET);
            res.json({message:"Protected route accessed Successfully"})
        }catch (err) {
            console.log(err);
            return res.json({message:"Invalid Token"});
        }
    }catch (err){
        console.log(err);
        return res.json({message:"Internal server error"});
    }
}