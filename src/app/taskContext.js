import { createContext, useContext, useReducer } from "react";
import { isReturnStatement } from "typescript";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer,[{id: 1, text: "first item", status: "pending"}]);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}


function taskReducer(tasks, action) {
  switch(action.type) {
    case "add": {
      return [...tasks, {id: tasks.length + 1, text: action.text, status: "pending"}]
    }
    case "remove": {
      return tasks.filter(task => task.id !== action.id)
    }
    case "toggle": {
      return tasks.map(task => task.id === action.id ? {...task, status: task.status === "pending" ? "done" : "pending"} : task)
    }
    default:
      throw new Error("unknown action: " + action.type)
  }
}


export function actionToggle(id) {
    return { type: "toggle", id}
}

export function actionRemove(id) {
    return {type: "remove", id}
}

export function actionAdd(text) {
    return {type: "add", text}
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}