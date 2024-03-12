import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
  /* const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true,
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true,
    },
    {
      "id": 3,
      "text": "Food Schopping",
      "day": "Feb 5th at 2:30pm",
      "reminder": false,
    }]) */

  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromJsonServer = await fetchTasks();
      setTasks(tasksFromJsonServer);
    };
    // fetch call
    getTasks();
  }, []);

  // fetch tasks from json db
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const task = await response.json();
    return task;
  };

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await response.json();

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, remeinder: !data.reminder } : task;
      })
    );
  };

  // Add Task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();
    setTasks([...tasks, data]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => {
          SetShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          }
        />
        <Route path="/about" Component={About} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
