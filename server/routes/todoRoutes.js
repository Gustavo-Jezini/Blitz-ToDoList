import express from 'express';
import { createTodo, getTodos, updateTodo } from '../controllers/todosController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);

export default router;