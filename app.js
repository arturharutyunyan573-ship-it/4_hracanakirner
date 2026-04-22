import 'dotenv/config';
import express from 'express';

const {PORT} = process.env;
const port = 5000;

const app = express();




const hendler1 = (req, res, next) => {
    console.log('hendleer1');
    req.customData = 'This is a custom data from hendleer 1';
    next();
}

const handler2 = (req, res) => {
    console.log('handler2');
    res.send(`handler2 received: ${req.customData}`);
}

app.get("/",hendler1, handler2);

app.post('/data', (req, res) => {
    res.send(`Received data`);
});
app.listen(PORT, () => {
    console.log(`app listning on port ${PORT}`);
});

