import mongoose from "mongoose";
import PostToDo from "../models/todoModel.js"

export const getTodos = async (req, res) => {
  try {
    // Procura no banco de dados (cluster do mongo) se ja tem alguma Tarefa
    const todos = await PostToDo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json(error.message);
  };
};

export const createTodo = async (req, res) => {
  // Vem do front - end
  const {title, needTodo, creator} = req.body;

  const newTodo = new PostToDo({title, needTodo, creator})

  try {
    await newTodo.save()

    res.status(201).json(newTodo)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
};

export const updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Tarefa nao encontrada');

  const updatedToDo = await PostToDo.findByIdAndUpdate(_id, todo, { new: true }); 

  res.json(updatedToDo);
}