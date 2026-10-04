function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-green-100 bg-green-50 p-4 sm:flex-row sm:items-center sm:justify-between">

      {/* Task information */}
      <div className="flex-1">
        <p
          className={`break-words text-lg ${
            task.completed
              ? "text-gray-400 line-through"
              : "text-gray-700"
          }`}
        >
          {task.text}
        </p>

        {/* Task status */}
        <span
          className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-semibold ${
            task.completed
              ? "bg-green-200 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Done" : "Not Done"}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          {task.completed ? "Mark Not Done" : "Mark Done"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TodoItem;