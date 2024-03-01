export const classDemo = () => {
    // Instantiate object
    const person1 = new Person('John', 'Doe', '4-3-1980'); // MM-DD-YYYY
    const person2 = new Person('Mary', 'Smith', '2-28-1987');
    //console.log(person1)
    //person1.birthday = '';
    //console.log(person1);

    //console.log(person2.birthday);
    //console.log(person2.birthday.getFullYear());
    console.log(person1.getBirthYear()); // as a class method
    console.log(person1.getFullName());
    console.log(person2.getFullName());
    console.log(person1) // methods appear only in prototype output section
}

// Constructor function
/* function Person(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);

    // methods, but is not the best way
    // this.getBirthYear = () => this.birthday.getFullYear();
    //this.getFullName = () => `${this.firstName} ${this.lastName}`;// this.firstName + ', ' + this.lastName;
}

Person.prototype.getBirthYear = function () { // dont work w. arrow func
    return this.birthday.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
} */

// Class do the same thing like Person func class, but this is pretty
class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
    }

    getBirthYear() {
        return this.birthday.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}