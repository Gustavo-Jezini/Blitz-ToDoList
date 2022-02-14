const todos = (todos = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...todos, action.payload];
    case "UPDATE":
      return todos.map((todo) => todo._id === action.payload._id ? action.payload : todo)
      default:
      return todos
  }
}

export default todos;