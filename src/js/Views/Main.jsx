import React, {useState} from "react";
import AddToList from "../component/ToDoList";

const home = () => {
    const [taskList, setTaskList] = useState([]);
        const newTask = (task) => {
            setTaskList([task, ...taskList]);
        };
        
    return (
        <>
        <AddToList newTask={newTask}/>
        </>
    );
};
export default home;