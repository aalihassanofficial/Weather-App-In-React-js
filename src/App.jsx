import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Component from './component/example-1/component'
import LightDarkMood from './component/example-2/lightDarkMood'
import Todo from './component/example-3/todo'
import About from './component/example-4/about'
import Home from '../home'
import TodoDetails from './component/example-3/todoDetails'
import Weather from './component/example-5/Weather'

const appRouter = createBrowserRouter([
  {
     path:"/",
     element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/todo",
    element:<Todo/>

  },
  
  {
    path:"/todo/:todoId",
    element:<TodoDetails/>  //ya dynamic route ha  

  },
  {
    path:"/weather",
    element:<Weather/>
  }
])



function App() {

  return (
    // <>
    // <div>
    //    <h1 className='text-red-600 font-bold '>Hello</h1>
    //    <Component name = "alihassan"  email = "alihassan@gmail.com" age = {19}/>

    // </div>
   <div>
   
    {/* <LightDarkMood/> */}
    <RouterProvider router = {appRouter} />
    </div>
  
  )
}

export default App
