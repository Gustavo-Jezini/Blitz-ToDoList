import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

const TodoPendente = () => {
  const todos = useSelector((state) => state.todos);

  const pendentTodos = todos.filter((todo) => todo.progress === 'begin');
  return (
    <div>
      <ul>
      {pendentTodos.map((toDos) => {
      return (
      <li key={todos._id}>
      <h2>{toDos.creator}</h2>
      <h3>{toDos.title}</h3>
      <p>{toDos.needTodo}</p>
      <h5>{moment(toDos.createdAt).fromNow()}</h5>
      <button onClick={() => {}}>Edit</button>
      <button onClick={() => {}}>delete</button>
      </li>
        )
      })}
    </ul>
    </div>
  )
}

export default TodoPendente