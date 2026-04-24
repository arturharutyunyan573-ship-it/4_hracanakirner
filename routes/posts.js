import { Router } from 'express';

const router = Router();

router.get('/data', (req, res) => {
    res.json({
        query: req.query,
    });
});

router.post('/data/kuku', (req, res) => {
    res.json({
        query: req.query,
    });
});

export default router;
