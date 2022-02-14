import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, updateTodo } from '../actions/todos';
import './style.css'

const Form = ({ setCurrentId, currentId }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => currentId ? state.todos.find(todo => todo._id === currentId) : null)
  const [todoData, setTodoData] = useState({
    title: '',
    needTodo: '',
    creator: '',
  });

  useEffect(() => {
    if(todo) setTodoData(todo)
  }, [todo])

  const handleClick = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updateTodo(currentId, todoData));
    } else { 
      dispatch(createTodo(todoData)) 
    }
    clear();
  }

  const clear = (e) => {
    setCurrentId(null);
    setTodoData({
      title: '',
      needTodo: '',
      creator: '',
    });
  }

  return (
    <div className="form">
      <label className="form-label">
        { currentId ? "Editar tarefa" : "Criar tarefa"}
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
        Enviar
      </button>
    </div>
  )
}

export default Form