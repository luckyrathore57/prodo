import React from "react";
import SideBar from "./components/SideBar";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Make the front end of project with dummy data or function on front-end only",
      date: "15 Dec",
    },
    { id: 2, title: "Ride bike", date: "Yesterday" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Main Content */}
      <SideBar />
      <main className="flex-1 p-6 bg-white overflow-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Today</h1>
          <span className="text-gray-500">2 tasks</span>
        </div>

        {/* Task List */}
        <div>
          <h2 className="text-xl font-semibold text-red-600 mb-3">Overdue</h2>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-4 p-4 border-b border-gray-200 hover:bg-gray-50"
            >
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <p className="text-gray-700 font-medium">{task.title}</p>
                <span className="text-sm text-gray-500">📅 {task.date}</span>
              </div>
              <a href="#" className="text-red-500 text-sm hover:underline">
                Reschedule
              </a>
            </div>
          ))}
        </div>

        {/* Add Task Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">17 Dec • Today • Tuesday</h2>
          <button className="text-red-500 font-bold hover:underline">
            + Add task
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;

