import HttpErrors from "http-errors";
import * as fs from "node:fs";

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



export async function writeJSon(data) {
    try{
        await fs.writeFile(authorsFile, JSON.stringify(data, null, 2));
    }catch (err) {
        console.error(err);
    }
}

export async function findById(id) {
    const users = readJSON();
    return users.find(user => user.id === id) || users;
}