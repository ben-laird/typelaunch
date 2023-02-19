import fc, { assert, property } from "fast-check";
import { it } from "vitest";
import { greet } from "../src";
import { log } from "./test.ctx";

it("Should greet people", () => {
  assert(
    property(fc.string(), (name) => greet(name) === `Hello there, ${name}`)
  );
  log.info("Test finished successfully!");
});
