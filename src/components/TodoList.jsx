import Todo from "./Todo"
import '../scroll.css'

const TodoList = ({todos, setTodo, deleteTodo}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5'>

      {todos && todos.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Todo list</h2>
          <p className='text-xl mt-5 mb-7 text-center'>
            Manage your {''}
            <span className='text-red-500 font-bold'>Todos</span>
          </p>

        
           
            <div className="md:h-screen overflow-y-scroll scroll h-1/2">
            { todos.map( todo => (
              <Todo
                key={todo.id}
                todo={todo}
                setTodo={setTodo}
                deleteTodo={deleteTodo}
              />
            ))}
            </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No Todos</h2>
          <p className='text-xl mt-5 mb-7 text-center'>
            Start adding todos {''}
            <span className='text-red-500 font-bold'>and they will appear here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default TodoList