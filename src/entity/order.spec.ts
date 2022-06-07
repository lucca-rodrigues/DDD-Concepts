import { Address } from "./address";
import { Order } from "./order";

describe("Customer unit tests", () => {
  it("should throw when id is empty ", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });
});
