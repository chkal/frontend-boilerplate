import Person from "./lib/person.js";
import template from "./template.hb";
import moment from "moment";

const person = new Person("Christian");

document.getElementById("root").innerHTML = template({
  greeting: person.greet(),
  date: moment().format("YYYY-MM-DD" )
});

console.log("Done!");