let person = {
  name: 'Jesse',
  age: 28,
  greeting: function () {
    // TODO
    // return 'My name is ' + this.name + ' I am ' + this.age + ' years old';
    return `My name is ${this.name}, and I am ${this.age} years old`;
  }
};

// let jessesGreeting = person.greeting();
// console.log(jessesGreeting);

let nameElement = document.getElementById('name');
let buttonElement = document.getElementById('update');

buttonElement.addEventListener('click', handleUpdate);

function handleUpdate() {
  nameElement.innerHTML = person.name;
}

