/**
 * A simple function meant to demonstrate all the features of TypeLaunch, from testing to docs to more!
 * This simply greets the user in the console and returns what it sent to the console.
 * @param name - The name of the person you'd like to greet
 * @returns A string of the greeting with the name inserted
 */
export const greet = (name: string, debug = false) => {
  const message = `Hello there, ${name}`;
  if (debug) console.log(message); // TODO take a look at Todo Tree!
  return message;
};

if (import.meta.vitest) {
  const { log } = await import("../test/test.ctx");
  const { it, expect } = import.meta.vitest;

  const greetTest = (name: string) => {
    it(`Greets ${name}`, () => {
      const greeting = greet(name);
      log.debug(greeting);
      expect(greeting).toBe(`Hello there, ${name}`);
    });
  };

  greetTest("Angie");
  greetTest("Janet");
  greetTest("Marcos");
}
