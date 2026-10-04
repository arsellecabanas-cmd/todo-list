function TodoInput({ taskInput, setTaskInput, addTask }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a new task..."
        className="flex-1 rounded-xl border border-green-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />

      <button
        onClick={addTask}
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;