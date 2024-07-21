import { Outlet } from "react-router-dom"


function TodoApp() {
  return <div>
    A basic todo app
    <Outlet/>
  </div>
}

export default TodoApp