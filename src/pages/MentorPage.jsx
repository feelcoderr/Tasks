import React, { useState, useEffect } from "react";
import axios from "axios";

function MentorPage() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks data", error);
      });
  }, []);

  const createTask = () => {
    axios
      .post("http://localhost:5000/api/tasks", {
        title: taskTitle,
        description: taskDescription,
      })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setTaskTitle("");
        setTaskDescription("");
      })
      .catch((error) => {
        console.error("There was an error creating the task!", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mentor Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Create New Task</h2>
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Task Title"
          value={taskTitle}
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
          className="bg-slate-900 text-white p-2 rounded"
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
