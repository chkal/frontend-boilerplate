export default class Person {

  constructor(name = "NoName") {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }

}
