/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting = "Hello, everybody!";
var greetspecialGuest = "Neil deGrasse Tyson!";
var conversation = "Let's talk about space."



it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
