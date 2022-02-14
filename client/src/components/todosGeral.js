import React from 'react'
import TodoEmProgresso from './todos/todoEmProgresso';
import TodoFinalizado from './todos/todoFinalizado';
import TodoPendente from './todos/todoPendente';
import './style.css'

import { useSelector } from 'react-redux';

const TodosGeral = ({ setCurrentId }) => {
  // Tem acesso a todo state do redux
  const todos = useSelector((state) => state.todos)

  console.log(todos);

  return (
    !todos.length ? <h1>Loading</h1> : (
      <main>
        <TodoPendente setCurrentId={setCurrentId} />
        <TodoEmProgresso setCurrentId={setCurrentId} />
        <TodoFinalizado setCurrentId={setCurrentId} />
      </main>
    )
  )
}

export default TodosGeral;