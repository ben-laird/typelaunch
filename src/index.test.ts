import test from "ava";
import { greet } from ".";

/**
 * A test macro to demonstrate the concept of macro testing,
 * used to test repetitive things with one implementation.
 */
const greetMacro = test.macro((t, name: string) => {
  const expectedMessage = `Hello there, ${name}`;
  const returnedMessage = greet(name);
  t.assert(
    expectedMessage === returnedMessage,
    "Expected message is not equal to returned message"
  );
});

test("Greet Janet", greetMacro, "Janet");

test("Greet Marcos", greetMacro, "Marcos");
