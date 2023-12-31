import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([{
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
  }])

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => (task.id != id))
    )
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : 
        ('No Tasks to show')
      }
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
