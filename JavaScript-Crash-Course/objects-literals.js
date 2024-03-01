// is key value pairs
export const objectLeteralSecition = () => {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main st.',
            city: 'Boston',
            state: 'MA'
        }
    }
    console.log(person)
    console.log(person.firstName, person.lastName);
    console.log(person.hobbies[2]);
    console.log(person.address.city);

    // deconstructuring is part of ES6
    const { firstName, lastName, address: { city } } = person;
    console.log(firstName, lastName, city);

    // we can add property to object
    person.email = 'john@gmail.com';
    console.log(person);
}