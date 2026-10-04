import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask }) {
  // Show this message when there are no tasks
  if (tasks.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-400">
          No tasks yet. Add something you need to do!
        </p>
      </div>
    );
  }

  // Display every task
  return (
    <div className="mt-6 space-y-3">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;