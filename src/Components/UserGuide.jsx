function UserGuide() {
  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold text-green-800">
        User Guide
      </h2>

      <div className="space-y-5">

        {/* Add Task */}
        <div>
          <h3 className="font-semibold text-green-700">
            1. Add a Task
          </h3>

          <p className="mt-1 text-gray-600">
            Type your task in the input box and click the Add Task
            button. You can also press Enter to add the task.
          </p>
        </div>

        {/* Mark Done */}
        <div>
          <h3 className="font-semibold text-green-700">
            2. Mark a Task as Done
          </h3>

          <p className="mt-1 text-gray-600">
            Click the Mark Done button beside a task. The task status
            will change from Not Done to Done.
          </p>
        </div>

        {/* Mark Not Done */}
        <div>
          <h3 className="font-semibold text-green-700">
            3. Mark a Task as Not Done
          </h3>

          <p className="mt-1 text-gray-600">
            Click the Mark Not Done button to change a completed task
            back to Not Done.
          </p>
        </div>

        {/* Delete */}
        <div>
          <h3 className="font-semibold text-green-700">
            4. Delete a Task
          </h3>

          <p className="mt-1 text-gray-600">
            Click the Delete button beside a task to remove it from
            the list.
          </p>
        </div>

        {/* Clear All */}
        <div>
          <h3 className="font-semibold text-green-700">
            5. Clear All Tasks
          </h3>

          <p className="mt-1 text-gray-600">
            Click the Clear All Tasks button to remove all tasks from
            the list.
          </p>
        </div>

      </div>
    </div>
  );
}

export default UserGuide;