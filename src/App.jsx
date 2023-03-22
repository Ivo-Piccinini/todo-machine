import { useState, useEffect } from "react"
import Header from "./components/Header"
import AddTodos from "./components/AddTodos"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [todo, setTodo] = useState({});

  // Local Storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])



  const deleteTodo = id => {
    const updatedTodos = todos.filter( todo => todo.id !== id );
    setTodos(updatedTodos);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <AddTodos 
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          setTodo={setTodo}
        />
        <TodoList 
          todos={todos}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
