import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../actions/todos';
import './style.css'

const Form = () => {
  const dispatch = useDispatch();
  const [todoData, setTodoData] = useState({
    title: '',
    needTodo: '',
    creator: '',
  });

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(createTodo(todoData))
  }

  return (
    <div className="form">
      <label className="form-label">
        Criador da Tarefa
        <input 
        type="text"
        name='creator'
        value={todoData.creator}
        onChange={(e) => setTodoData({ ...todoData, creator: e.target.value })}
        />
      </label>
      <label className="form-label">
        titulo da tarefa
        <input 
        type="text"
        name='title'
        value={todoData.title}
        onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        />
      </label>
      <label className="form-label">
        tarefa
        <input 
        type="text"
        name='needTodo'
        value={todoData.needTodo}
        onChange={(e) => setTodoData({ ...todoData, needTodo: e.target.value })}
        />
      </label>
      <button
      onClick={handleClick}
      >
        Gerar Tarefa
      </button>
    </div>
  )
}

export default Form