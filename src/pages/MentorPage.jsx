import React, { useState } from "react";

function MentorPage({ tasks, setTasks }) {
  // const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const createTask = () => {
    setTasks([
      ...tasks,
      { title: taskTitle, description: taskDescription, status: "Pending" },
    ]);
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Create New Task</h2>
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Task Title"
          value={taskTitle}
          required
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          className="border p-2 mb-2 w-full"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button
          onClick={createTask}
          className="bg-emerald-500 text-white p-2  hover:bg-emerald-600"
        >
          Create Task
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">All Tasks</h2>
        {tasks.map((task, index) => (
          <div key={index} className="bg-white p-4 mb-2 rounded shadow">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p
              className={`font-semibold ${
                task.status === "Completed" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {task.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorPage;
