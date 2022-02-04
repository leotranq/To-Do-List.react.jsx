import React, { useState } from "react";
import "../component/ToDoList.css";
const AddToList = () => {
	const [inputAdd, setInputAdd] = useState("");

	const submit = (event) => {
		// meter la tarea en una lista
		prop.newTask(inputText);
	};

	return (
		<div>
			<h1>
				<strong>To Do List</strong>
			</h1>
			<form className="taskForm" onSubmit={submit}>
				<input
					type="text"
					value={inputAdd}
					onChange={(ev) => setInputAdd(ev.target.value)}
				/>
				<button type="submit">Add to List</button>
			</form>
			<h3>
				<strong>Tareas</strong>
			</h3>
		</div>
	);
};

export default AddToList;
