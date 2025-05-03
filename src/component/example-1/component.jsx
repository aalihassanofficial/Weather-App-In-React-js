import React from 'react'
import { Component2 } from './Component-2'
const Component = ({name , email , age}) => {
    return (
    <div>
       <h1 className='text-amber-500 font-black'>Hello I am Component - {name} - {email} - {age}</h1>
       <Component2 name = {name} email = {email} age = {age}/>
    </div>
  )
}

export default Component
