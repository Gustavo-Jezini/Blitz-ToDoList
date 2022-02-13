import express from 'express';
import { getTodos } from '../controllers/todosController.js';

const router = express.Router();

router.get('/', getTodos);

export default router;