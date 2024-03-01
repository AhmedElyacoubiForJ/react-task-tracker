export const dealingWithString = () => {
    // Strings concatination
    const name = 'John';
    const age = 30;
    //console.log('My name is ' + name + ' and I am ' + age);
    // Template String using backticks ``
    console.log(`My name is ${name} and I am ${age}`)

    // String properties and methods
    let s = 'Hello World';
    console.log(s.toUpperCase())
    console.log(s.length)
    s = s + '     '
    console.log(s.length)
    console.log(s.trim().length)

    // substring and split method
    const fullName = 'Ahmed El Yacoubi';
    // The substring includes the characters up to,
    // but not including, the character indicated by end.
    console.log(fullName.substring(0, 5))
    
    // split to an array by letters
    const firstName = fullName.substring(0, 5);
    console.log(firstName.split(''))
    
    const itTerminologies = 'technology, computers, it, java, react, Spring Boot';
    console.log(itTerminologies.split(', '))
}