import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header_T from './components/Header_T';
import Footer from "./components/Footer";
import Tasks_T from './components/Tasks_T';
import AddTask from "./components/AddTask";
import About from "./components/About";

function App() {
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

  // fetch tasks from json db function definition
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const task = await response.json();
    return task;
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
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    //console.log('Update from UI', updatedTask);
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await response.json();
    //console.log('from json server', data);

    setTasks(
      tasks.map(
        (task) => {
          return task.id === id ? { ...task, remeinder: !data.reminder } : task;
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
    <BrowserRouter>
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
        <Routes>
          <Route path='/about' Component={About} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
