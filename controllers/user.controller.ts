
import { type Request, type Response } from 'express';
import user from '../models/user.model';
// set Class UserController
class UserController {
    // index method
    public index(req: Request, res: Response) {
        try {
            user.findAll().then((users) => {
                if (users.length > 0) {
                    res.status(200).json({
                        success: 'success',
                        data: users,
                        message: "All users fetched successfully"
                    });
                } else {
                    res.status(404).json({
                        success: 'failed',
                        message: "No user found"
                    });
                }
            })
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    // create method
    public create(req: Request, res: Response) {
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

    // show method
    public show(req: Request, res: Response) {
        try {
            user.findByPk(req.params.id).then((user) => {
                if (user) {
                    res.status(200).json({
                        success: 'success',
                        data: user,
                        message: "User fetched successfully"
                    });
                } else {
                    res.status(404).json({
                        success: 'failed',
                        message: "No user found"
                    });
                }
            })
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    // update method
    public update(req: Request, res: Response) {
        const { id, user_name, username, password } = req.body;
        try {
            user.update({
                user_name: user_name,
                username: username,
                password: password
            }, {
                where: { id: req.params.id }
            }).then((user) => {
                if (user) {
                    res.status(200).json({
                        success: 'success',
                        data: user,
                        message: "User updated successfully"
                    });
                } else {
                    res.status(404).json({
                        success: 'failed',
                        message: "No user found"
                    });
                }
            })
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    // delete method
    public delete(req: Request, res: Response) {
        try {
            user.destroy({
                where: { id: req.params.id }
            }).then((user) => {
                if (user) {
                    res.status(200).json({
                        success: 'success',
                        data: user,
                        message: "User deleted successfully"
                    });
                } else {
                    res.status(404).json({
                        success: 'failed',
                        message: "No user found"
                    });
                }
            })
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default new UserController();