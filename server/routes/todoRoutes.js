import express from 'express';
import { createTodo, getTodos, deleteTodo, updateTodo } from '../controllers/todosController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo)

export default router;