import Person from "../../main/javascript/lib/person.ts";

describe("Unit tests for Person class", () => {

  it("Test default name", () => {
    const person = new Person();
    expect(person.name).toEqual("Anonymous");
  });

  it("Test greeting method", () => {
    const person = new Person("Peter");
    expect(person.greet()).toEqual("Hello Peter");
  });

});