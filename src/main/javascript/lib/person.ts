export default class Person {

  name:string;

  constructor(name:string = "Anonymous") {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }

}
