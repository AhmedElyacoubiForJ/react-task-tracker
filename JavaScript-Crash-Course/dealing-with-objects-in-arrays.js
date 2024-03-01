export const objectInArraySection = () => {
    const todos = [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true
        },
        {
            id: 2,
            text: 'Meeting with boss',
            isCompleted: true
        },
        {
            id: 3,
            text: 'Dentist appointment',
            isCompleted: false
        }
    ];

    console.log(todos);
    // grab Meeting with boss
    console.log(todos[1].text);

    // convert to json
    const todoJSON = JSON.stringify(todos)
    // how to send data to server as json string
    console.log(todoJSON);
}