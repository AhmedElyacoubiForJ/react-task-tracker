import { useState, useEffect } from "react";
import Header_T from './components-repetition/Header_T';
import Tasks_T from './components-repetition/Tasks_T';
import AddTask from "./components-repetition/AddTask";

function App_T() {
  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  useEffect(
    () => {
      const getTasks = async () => {
        const tasksFromJsonServer = await fetchTasks();
        setTasks(tasksFromJsonServer);
      };
      // the call
      getTasks();
    },
    []
  );

  // Fetch Tasks func.
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
    //console.log(data);
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => {
          return task.id !== id;
        }
      )
    )
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => {
          return task.id === id ? { ...task, remeinder: !task.reminder } : task;
        }
      )
    )
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header_T
        onAdd={() => { SetShowAddTask(!showAddTask) }}
        showAdd={showAddTask}
      />
      {
        showAddTask && <AddTask onAdd={addTask} />
      }
      {
        tasks.length > 0 ?
          <Tasks_T
            onToggle={toggleReminder}
            tasks={tasks}
            onDelete={deleteTask} /> :
          'No Tasks to schow'
      }

    </div>
  );
}

export default App_T;
