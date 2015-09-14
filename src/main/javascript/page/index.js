import Person from "../lib/person.js";

const person = new Person("Christian");

const root = document.getElementById("root");
root.textContent = person.greet();

console.log("Done!");