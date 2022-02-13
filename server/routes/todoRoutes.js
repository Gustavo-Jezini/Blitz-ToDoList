import express from 'express';
import { createTodo, getTodos } from '../controllers/todosController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);

export default router;