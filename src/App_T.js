import { useState, useEffect } from "react";
import Header_T from './components-repetition/Header_T.js'
import Tasks_T from './components-repetition/Tasks_T.js';

function App_T() {
  const [tasks, setTasks] = useState([])
  /* const [tasks, setTasks] = useState(
    [
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
      }
    ]
  ) */

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();
      console.log(data);
    }

    fetchTasks();
  })

  // delete task
  const deleteTask = (id) => {
    // console.log('delete', id);
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
    console.log('Reminder', id)
    setTasks(
      tasks.map(
        (task) => {
          return task.id === id ? { ...task, remeinder: !task.reminder } : task;
        }
      )
    )
  }

  return (
    <div className="container">
      {/* <h1>Task Tracker</h1> */}
      {/* <Header_T title='Hello from header' /> */}
      <Header_T />
      {
        tasks.length > 0 ? <Tasks_T onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to schow'
      }

    </div>
  );
}

export default App_T;
