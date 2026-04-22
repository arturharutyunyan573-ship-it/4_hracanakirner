import 'dotenv/config';
import express from 'express';

const {PORT} = process.env;

const app = express();

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World!',
//     });
// })


const hendler1 = (req, res, next) => {
    console.log('hendler1');
    req.customData = 'This is a custom data from hendler 1';
    next();
};

const handler2 = (req, res) => {
    console.log('handler2');
    res.send(`handler2 received: ${req.customData}`);
};

app.get("/",  hendler1, handler2);

app.listen(PORT, () => {
    console.log(`app listning on port ${PORT}`);
});