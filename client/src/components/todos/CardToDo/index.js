import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../actions/todos'

const CardToDo = ({ todoList, setCurrentId }) => {
  const dispatch = useDispatch();

  
  return (
    <ul>
    {todoList.map((toDos) => {
    return (
    <li key={toDos._id}>
    <h2 >{toDos.creator}</h2>
    <h3 >{toDos.title}</h3>
    <p >{toDos.needTodo}</p>
    <h5 >{moment(toDos.createdAt).fromNow()}</h5>
    <button  onClick={() => {}}>Iniciar Tarefa</button>
    <button  onClick={() => {setCurrentId(toDos._id)}}>Edit</button>
    <button  onClick={() => {dispatch(deleteTodo(toDos._id))}}>delete</button>
    </li>
      )
    })}
  </ul>
  )
}

export default CardToDo