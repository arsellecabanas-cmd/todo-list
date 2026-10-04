import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import UserGuide from "./Components/UserGuide";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Add a new task
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Change Done / Not Done
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-800">
            My To-Do List
          </h1>

          <p className="mt-2 text-green-600">
            Stay organized and get things done!
          </p>
        </div>

        {/* To-Do List */}
        <div className="rounded-3xl bg-white p-6 shadow-lg">

          <TodoInput
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            addTask={addTask}
          />

          <TodoList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />

          {tasks.length > 0 && (
            <button
              onClick={clearTasks}
              className="mt-6 w-full rounded-xl bg-red-100 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-200"
            >
              Clear All Tasks
            </button>
          )}

        </div>

        {/* User Guide */}
        <UserGuide />

      </div>
    </div>
  );
}

export default App;