import Task_T from "./Task_T";

const Tasks_T = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {
                tasks.map(
                    (task) => (
                        <Task_T
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </>
    )
}
export default Tasks_T;