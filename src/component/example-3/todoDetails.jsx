import React from 'react'
import { useParams } from 'react-router-dom'

const TodoDetails = () => {
     
    const params = useParams();
    console.log(params);
    

  return (
    <div>
         <h1>Todo Details -- {params.todoId}</h1>
    </div>
  )
}

export default TodoDetails
   