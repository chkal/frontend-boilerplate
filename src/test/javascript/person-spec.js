describe("Unit tests for Person calass", function () {

  it("Test default name", function () {
    const person = new Person();
    expect(person.name).toEqual("NoName");
  });

  it("Test greeting method", function () {
    const person = new Person("Peter");
    expect(person.greet()).toEqual("Hello Peter");
  });

});