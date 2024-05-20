import { Router } from 'express';
import auth from '../controllers/auth.controller';


class AuthRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post('/login', auth.login);
        this.router.post('/register', auth.register);
    }
}

export default new AuthRoute().router;