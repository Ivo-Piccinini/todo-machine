import React from 'react'

const Todo = ({todo, setTodo, deleteTodo}) => {

  const handleDelete = () => {
    const respuesta = confirm('Do you want delete this todo?');

    if(respuesta) {
      deleteTodo(todo.id);
    }
  }

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            {todo.name}
        </p>

        <p className='font-normal mb-3 text-gray-700'>
            {todo.description}
        </p>

    <div className='flex justify-between mt-10'>
      <button
        type='button'
        className='py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg'
        onClick={() => setTodo(todo)}
        >Edit</button>

      <button
        type='button'
        className='py-2 px-10 bg-gray-600 hover:bg-gray-700 text-white font-bold uppercase rounded-lg'
        onClick={handleDelete}
        >Delete</button>
    </div>

  </div>
  )
}

export default Todo