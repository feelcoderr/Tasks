import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

//Pages
import MentorPage from "./pages/MentorPage";
import StudentPage from "./pages/StudentPage";

function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     title: "Task 1",
  //     description: "Complete the assignment.",
  //     status: "Pending",
  //   },
  //   { title: "Task 2", description: "Review the code.", status: "Pending" },
  // ]);
  return (
    <>
      <Navbar />
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<MentorPage />} />
            <Route path="/student" element={<StudentPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
