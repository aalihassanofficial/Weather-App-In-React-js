import React, { useEffect, useState } from 'react'

const Todo = () => {
    const[input , setInput] = useState("")
    const[todos,setTodos] = useState([])

    const fetchTodo = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const jsonData = await res.json()
        setTodos(jsonData)

    }

 useEffect(()=>{
    fetchTodo();
 },[])

console.log("Component Rendring");

  return (
    <div>
       <h1 className='font-bold text-4xl '>
        Todo is coming
       </h1>
       {
        todos.map((todo)=>(
                <div key={todo} className='bg-gray-300 p-2 rounded my-2'>
                    <h1>{todo.title}</h1>
                </div>
        ))
       }
    </div>
  )
}

export default Todo
