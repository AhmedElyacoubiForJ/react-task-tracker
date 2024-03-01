export const arraySection = () => {
   /*  const numbers = new Array(1,2,3,4,5,6,7,8,9);
    console.log(numbers); */
    
    const fruits = ['appels', 'oranges', 'pears'];
    console.log(fruits);
   /*  // JS in not staticly typed
    const fruits = ['appels', 'oranges', 'pears', true, 90];
    console.log(fruits);
    */

    /* // we can manipulate the values but not the reference because is a const
    fruits = []; */

    // adding the end
    fruits[3] = 'grapes';
    console.log(fruits);
    fruits.push('mangos');
    console.log(fruits)
    
    // adding at the begining
    fruits.unshift('strawberries')
    console.log(fruits)

    // pop ist remove the last one
    fruits.pop();
    console.log(fruits)

    // if array
    console.log(Array.isArray(fruits)) // true
    console.log(Array.isArray('fruits')) // false

    // index of any element
    console.log(fruits.indexOf('strawberries')) // 0
    console.log(fruits.indexOf('oranges')) // 2
    console.log(fruits.indexOf('xxxx')) // -1
};