export default {
    async profile(req, res) {
        res.json({
            params: req.params,
            query: req.query,
        });
    },


    async login(req, res) {
res.json({
    params: req.params,
    query: req.query,
})
    }
}