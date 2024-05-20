import express from "express";
import router from "./routes/index";

class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = 3000;

        this.init();
    }

    private init() {
        this.app.get('/', (req, res) => {
            res.json({ message: "Hello World!" });
        });
        this.app.use('/api/v1', router);
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

const server = new Server();
server.start();