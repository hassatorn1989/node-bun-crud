import { Router } from 'express';
import user from '../controllers/user.controller';

class UserRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', user.index);
        this.router.get('/show/:id', user.show);
    }
}

export default new UserRoute().router;