import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks data", error);
      });
  }, []);

  const completeTask = (id) => {
    axios
      .put(`http://localhost:5000/api/tasks/${id}`)
      .then((response) => {
        const updatedTasks = tasks.map((task) =>
          task._id === id ? { ...task, status: "Completed" } : task
        );
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.error("There was an error updating the task!", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">My Tasks</h2>
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
            {task.status === "Pending" && (
              <button
                onClick={() => completeTask(task._id)}
                className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 mt-2"
              >
                Mark as Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentPage;
