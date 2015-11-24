import Person from "./lib/person.ts";
import template from "./template.hb";

const person = new Person("Christian");

document.getElementById("root").innerHTML = template({
  greeting: person.greet()
});

console.log("Done!");