import express from "express";
import { signUp, signIn } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/sign-in', signIn)
router.post('/sign-up', signUp)


export default router;