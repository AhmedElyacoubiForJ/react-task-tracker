let tasks = [
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

export const objectCopyDemo = (id) => {

    tasks.map((task) => {
        console.log(task.id, id)
        console.log({ ...task, text: '', day: null, reminder: false })
        return (task.id === id) ? ({ ...task, text: '' }) : (task);
    });

}