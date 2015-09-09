class Person {

  constructor(name = "NoName") {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }

}

const person = new Person("Christian");

const root = document.getElementById("root");
root.textContent = person.greet();

console.log("Done!");