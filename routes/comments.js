import express from "express";
const router = express.Router();
import { CommentsService } from "../services/Comment.js";

router.post("/", (req, res) => {
    const { body } = req; //req.body
    CommentsService.insert(body).then((comment) => {
        res.json(comment);
    });
});   

router.get("/", function (_, res) {
	CommentsService.findAll().then(function (comments) {
		res.json(comments);
	});
});

export default router;