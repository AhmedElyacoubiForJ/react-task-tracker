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
    const todosJSON = JSON.stringify(todos)
    // how to send data to server as json string
    console.log(todosJSON);

    // For loops
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        console.log(`For loop Namber: ${i}` , todo)
        //console.log(`For loop Namber: ${i} ${todo}`);  
    }
    
}