import user from './user.route';
import auth from './auth.route';
import { Router } from 'express';


class Route {
    public router: any;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.use('/user', user);
        this.router.use('/auth', auth);
    }
}

export default new Route().router;