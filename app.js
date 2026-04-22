import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
})

app.listen(PORT, () => {
    console.log(`app listning on port ${PORT}`);
});