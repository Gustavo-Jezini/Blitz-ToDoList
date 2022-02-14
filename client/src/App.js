import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodosGeral from "./components/todosGeral";

// Importarei a action
import { getTodos } from './actions/todos.js'
import { useDispatch } from "react-redux";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  // Hook para realizar um dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // É Preciso de uma action para utilizar o dispatch.
    dispatch(getTodos());
  }, [currentId, dispatch])

  return(
    <>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <TodosGeral setCurrentId={setCurrentId} />
    </>
  )
}

export default App;