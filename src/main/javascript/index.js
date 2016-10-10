import Person from "lib/person.ts";

const person = new Person("Christian");

document.getElementById("root").innerHTML = "Hello: " + person.greet();

console.log("Done!");