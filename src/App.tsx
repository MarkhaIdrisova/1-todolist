import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from "uuid";


//CREATE
//READ
//UPDATE
//DELETE
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    //BLL: business logic
    const todolistTitle = "What to learn"
    //global state ключевые данные
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "JS & TS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])

    //DELETE
    const removeTask = (taskId: string) => {
        const newState = tasks.filter(t => t.id !== taskId)
        setTasks(newState)
    }
    // add task
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        };
        const newState = [newTask, ...tasks];
        setTasks(newState)
    }



    return (
        <div className="App">
            <TodoList
                title={todolistTitle}
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
