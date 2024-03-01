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

    /*  console.log(todos);
     // grab Meeting with boss
     console.log(todos[1].text); */

    // convert to json
    /*  const todosJSON = JSON.stringify(todos)
     // how to send data to server as json string
     console.log(todosJSON); */

    // Loops
    /* // For
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        console.log(`For loop Namber: ${i}` , todo)
        //console.log(`For loop Namber: ${i} ${todo}`);  
    } */
    /*  
     // for but more readable
     for (let todo of todos) {
         console.log(todo)
     } */

    /* // While
    let i = 0;
    while(i < todos.length) {
        const todo = todos[i];
        console.log(`For loop Number: ${i}` , todo);
        i++;
    } */

    // forEach, map, filter
    /* // forEach can take a function
    todos.forEach(function(todo) {
        console.log(todo.text);
    })
    // arrow function
    todos.forEach((todo) => {
        console.log(todo.id);
    }) */

    // map
    /* const addDescriptionToEachTodo = todos.map((todo) => {
        todo.description = todo.text + ': update me';
        //console.log(todo);
        return todo.description;
    });
    console.log(addDescriptionToEachTodo); */
    /* 
        const todoText = todos.map((todo) => {
            return todo.text;
        });
        console.log(todoText); */

    // Filter
    const todosCompleted = todos.filter((todo) => {
        return todo.isCompleted === true;
    });
    console.log(todosCompleted);

    const todosCompletedTxt = todosCompleted.map((todo) => {
        return todo.text
    })
    console.log(todosCompletedTxt);

    // OR filterd and mapped in chain
    const todosCompletedAndMapped = todos.filter((todo) => {
        return todo.isCompleted === true;
    }).map((todo) => {
        return todo.text
    });
    console.log(todosCompletedAndMapped);
}