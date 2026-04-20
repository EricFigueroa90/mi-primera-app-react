function TaskItem({ task, index, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={() => deleteTask(index)}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;