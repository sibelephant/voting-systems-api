import express from "express";
import auth from "../middleware/auth";

//import controllers

const router = express.Router();

router.post("/polls", auth /*controller to create a poll*/);
router.get("polls" /*controller to get all polls  */);
router.get("polls/:id" /*controller to get a single poll */);
router.post("poll/:id/vote", auth /*controller to cast a vote */);

export default router;
