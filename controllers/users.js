import HttpErrors from "http-errors";

export default {
    async profile(req, res, next) {
        try {
            // throw new HttpErrors(422, 'Invalid user id!');

            res.json({
                params: req.params,
                query: req.query,
            });
        } catch (e) {
            next(e);
        }
    },

    async login(req, res, next) {
        try {
            res.json({
                params: req.params,
                query: req.query,
                body: req.body,
            });
        } catch (e) {
            next(e);
        }
    },
}
