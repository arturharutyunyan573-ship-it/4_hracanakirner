import * as usersModel from "../models/users.js";

async function register(req, res, next) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                status: "error",
                message: "All fields required"
            });
        }

        const user = await usersModel.createUser({
            username,
            email,
            password
        });

        res.status(201).json({
            status: "ok",
            user
        });
    } catch (err) {
        next(err);
    }
}