import { useReducer, useState } from "react"
import { Outlet } from "react-router-dom"

import "./todoapp.css"
import { actionAdd, actionRemove, actionToggle, TaskProvider, useTasks, useTasksDispatch } from "../app/taskContext";

function TodoApp() {
  return <TaskProvider>
    <div>
      <h1>Todo Peer</h1>
      <TodoInputLine />
      <TodoList />
      <Outlet />
    </div>
  </TaskProvider>
}

function TodoInputLine() {
  const [input, setInput] = useState("")

  const dispatch = useTasksDispatch();
  const addTodo = (text) => {
    text = text.trim();
    if (text === "") return; // no action upon empty text
    dispatch(actionAdd(text));
  }
  return <div>
    <input value={input} onChange={(e) => setInput(e.target.value)}/>
    <button onClick={() => addTodo(input)}>Add</button>
  </div>
}

function TodoList() {
  const todos = useTasks();
  return <ul>
    {todos.map((todo) => <TodoLine todo={todo} key={todo.id}/>)}
  </ul>
}

function TodoLine({todo}) {
  const dispatch = useTasksDispatch();
  return <li className={"todo-"+todo.status}>
    <input type="checkbox" checked={todo.status === "done"} onChange={() => dispatch(actionToggle(todo.id))}/>
    {todo.text}&nbsp;<span onClick={() => dispatch(actionRemove(todo.id))}>x</span>
  </li>
}

export default TodoApp