import React from 'react'
import moment from 'moment';

const CardToDo = ({ todoList, setCurrentId }) => {
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
    <button  onClick={() => {}}>delete</button>
    </li>
      )
    })}
  </ul>
  )
}

export default CardToDo