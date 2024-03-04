import Task_T from "./Task_T";

const Tasks_T = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {
                tasks.map(
                    (task, index) => (
                        <Task_T
                            key={index}
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