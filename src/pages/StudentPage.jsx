import React, { useState } from "react";

function StudentPage({ tasks, setTasks }) {
  // let {tasks} = this.props.first
  // const [tasks, setTasks] = useState([
  //   {
  //     title: "Task 1",
  //     description: "Complete the assignment.",
  //     status: "Pending",
  //   },
  //   { title: "Task 2", description: "Review the code.", status: "Pending" },
  // ]);

  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: "Completed" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
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
                onClick={() => completeTask(index)}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2"
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
