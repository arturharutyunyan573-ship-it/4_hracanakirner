import 'dotenv/config';
import express from 'express';

const {PORT} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
})

app.listen(PORT, () => {
    console.log(`app listning on port ${PORT}`);
});

const handler2 = (req, res) => {
    console.log('handler2');
    res.send(`handler2 received: ${req.customData}`);
}

app.get("/", handler2);