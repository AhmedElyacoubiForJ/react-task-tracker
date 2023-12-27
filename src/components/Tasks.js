const tasks = [
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
        "id": 2,
        "text": "Food Schopping",
        "day": "Feb 5th at 2:30pm",
        "reminder": false,
    }
]

export default function Tasks() {
  return (
    <>
      {
        tasks.map( (task) => (<h3>{task.text}</h3>) )
      }
    </>
  )
}
