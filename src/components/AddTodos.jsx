import { useState, useEffect } from "react"
import Error from "./Error";

const AddTodos = ({ todos, setTodos, todo, setTodo }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    const [error, setError] = useState(false);


    // Para llenar los campos con la información escrita
    useEffect(() => {
        if( Object.keys(todo).length > 0 ) {
            setName(todo.name);
            setDescription(todo.description);
        }
    }, [todo])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if([ name, description ].includes('')) {
            console.log('Hay al menos un campo vacio');

            setError(true);
            return;
        }

        setError(false);

        const todoObject = {
            name,
            description,
        }
   
        if(todo.id) {
            // Editando el registro
            todoObject.id = todo.id
            const updatedTodos = todos.map( todoState => todoState.id === todo.id ? todoObject : todoState );

            setTodos(updatedTodos);
            setTodo({});
        } else {
            // Nuevo registro
            todoObject.id = generarId();
            setTodos([...todos, todoObject]);
        }
        

        setName('');
        setDescription('');
    }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
            Todos Monitoring
        </h2>

        <p className='text-lg mt-5 text-center mb-10'>
            Add Todos and {''}
            <span className='text-red-500 font-bold'>Manage Them</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        >

            { error && <Error mensaje='Todos los campos son obligatorios' />}
            <div className='mb-5'>
                <label
                    htmlFor='todo'
                    className='block text-gray-700 uppercase font-bold'
                >
                    Todo Name
                
                </label>

                <input 
                    id='todo'
                    type="text"
                    placeholder='Todo Name'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    htmlFor='description'
                    className='block text-gray-700 uppercase font-bold'
                >
                    Todo Description
                
                </label>

                <textarea 
                    id='description'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Todo Description'
                    value={description}
                    onChange={ (e) => setDescription(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className='bg-red-500 w-full p-2 text-white uppercase font-bold hover:bg-red-600 cursor-pointer transition-all'
                value={todo.id ? 'Edit Todo' : 'Add Todo'}
            />
        </form>

    </div>
  )
}

export default AddTodos