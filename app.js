import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';

import routes from './routes/index.js';

const app = express();

const { PORT } = process.env;

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the app',
    });
});
app.use(routes);

const server = createServer(app);

app.listen(PORT, () => {
    server.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
});
