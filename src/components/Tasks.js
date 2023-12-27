import Task from "./Task"

export default function Tasks({tasks}) {
  return (
    <>
      {
        tasks.map( (task) => (
            <Task key={task.id} task={task} />
        ) )
      }
    </>
  )
}
