import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <p>Total tareas: {tasks.length}</p>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Agregar</button>

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;