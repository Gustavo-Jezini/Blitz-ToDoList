import React, { useEffect } from "react";
import Form from "./components/Form";
import TodosGeral from "./components/todosGeral";

// Importarei a action
import { getTodos } from './actions/todos.js'
import { useDispatch } from "react-redux";

const App = () => {
  // Hook para realizar um dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // É Preciso de uma action para utilizar o dispatch.
    dispatch(getTodos());
  }, [dispatch])

  return(
    <>
      <Form />
      <TodosGeral />
    </>
  )
}

export default App;