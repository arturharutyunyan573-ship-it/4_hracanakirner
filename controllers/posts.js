import * as postsModel from "../models/posts.js";
import * as usersModel from "../models/users.js";

const controller = {
    async getAllPosts(req, res, next) {
        try {
            const { id } = req.query;

            const posts = await postsModel.getAllPosts({ id });

            const users = await usersModel.getAllUsers();

            const result = posts.map(post => {
                const user = users.find(u => u.id === post.userId);
                return { ...post, user };
            });

            res.json({ status: "ok", posts: result });
        } catch (err) {
            next(err);
        }
    },

    async getPost(req, res, next) {
        try {
            const post = await postsModel.getPostById(req.params.id);

            if (!post) {
                return res.status(404).json({
                    status: "error",
                    message: "Post not found"
                });
            }

            const user = await usersModel.getUserById(post.userId);

            res.json({
                status: "ok",
                post: { ...post, user }
            });
        } catch (err) {
            next(err);
        }
    },

    async createPost(req, res, next) {
        try {
            const { title, content } = req.body;

            if (!title || !content) {
                return res.status(400).json({
                    status: "error",
                    message: "Title and content are required"
                });
            }

            const post = await postsModel.createPost({
                title,
                content,
                userId: req.user.id
            });

            res.status(201).json({
                status: "ok",
                post
            });
        } catch (err) {
            next(err);
        }
    },

    async updatePost(req, res, next) {
        try {
            const post = await postsModel.getPostById(req.params.id);

            if (!post) {
                return res.status(404).json({
                    status: "error",
                    message: "Post not found"
                });
            }

            if (post.userId !== req.user.id) {
                return res.status(403).json({
                    status: "error",
                    message: "Forbidden"
                });
            }

            const updates = {};
            if (req.body.title) updates.title = req.body.title;
            if (req.body.content) updates.content = req.body.content;

            const updated = await postsModel.updatePost(post.id, updates);

            res.json({
                status: "ok",
                post: updated
            });
        } catch (err) {
            next(err);
        }
    },

    async deletePost(req, res, next) {
        try {
            const post = await postsModel.getPostById(req.params.id);

            if (!post) {
                return res.status(404).json({
                    status: "error",
                    message: "Post not found"
                });
            }

            if (post.userId !== req.user.id) {
                return res.status(403).json({
                    status: "error",
                    message: "Forbidden"
                });
            }

            await postsModel.deletePost(post.id);

            res.json({
                status: "ok",
                message: "Post deleted"
            });
        } catch (err) {
            next(err);
        }
    }
};

export default controller;