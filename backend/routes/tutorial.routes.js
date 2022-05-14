import express from "express";
import { create, findAll, findOne, update, deleteOne, deleteAll, findAllPublished } from "../controllers/tutorial.controller.js";


const router = express.Router();


router.post('/', create);
router.get('/', findAll);
router.get('/:id', findOne);
router.put('/:id', update);
router.delete('/:id', deleteOne);
router.delete('/', deleteAll);
router.get('/published', findAllPublished);

export default router;