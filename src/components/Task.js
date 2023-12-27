export default function Task({task}) {
  return (
    <div className='task'>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
    </div>
  )
}
