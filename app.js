import 'dotenv/config';
import morgan from 'morgan';
import express from 'express';
import { createServer } from 'http';

import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/index.js';

const app = express();

const { PORT } = process.env;

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(routes);

// error handlers
app.use(errorHandler.notFound);
app.use(errorHandler.errors);

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

