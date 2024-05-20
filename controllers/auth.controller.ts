import { type Request, type Response } from 'express';
import user from '../models/user.model';

class AuthController {
    // login method
    public login(req: Request, res: Response) {
        try {
            user.findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            }).then((user) => {
                if (user) {
                    res.status(200).json({
                        success: 'success',
                        data: user,
                        message: "User logged in successfully"
                    });
                } else {
                    res.status(404).json({
                        success: 'failed',
                        message: "Invalid credentials"
                    });
                }
            })
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    // register method
    public register(req: Request, res: Response) {
        const { user_name, username, password } = req.body;
        try {
            user.create({
                user_name: user_name,
                username: username,
                password: password
            }).then((user) => {
                res.status(201).json({
                    success: 'success',
                    data: user,
                    message: "User created successfully"
                });
            })
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default new AuthController();