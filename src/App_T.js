import { useState, useEffect } from "react";
import Header_T from './components-repetition/Header_T';
import Tasks_T from './components-repetition/Tasks_T';
import AddTask from "./components-repetition/AddTask";

function App_T() {
  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // function delegate to fetch json db & init tasks list i.e. ui
    const getTasks = async () => {
      const tasksFromJsonServer = await fetchTasks();
      setTasks(tasksFromJsonServer);
    };
    // fetch call
    getTasks();
  }, []);

  // fetch json db function definition
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    //console.log(data);
    return data;
  }

  // delete task
  const deleteTask = async (id) => {
    // delete from server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
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
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await response.json();
    setTasks([...tasks, data]);


    // we don't need it cause the server will generate the id for us
    /*  const id = Math.floor(Math.random() * 10000) + 1
     const newTask = { id, ...task }
     setTasks([...tasks, newTask]) */
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
