import { Router } from 'express';

const router = Router();

router.get('/:name/:id', (req, res) => {
    res.json({
        params: req.params,
        query: req.query,
    });
});

export default router;
