import { Address } from "./address";
import { Order } from "./order";

describe("Customer unit tests", () => {
  it("should throw when id is empty ", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw when customerId is empty ", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw when Items is empty ", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required from order");
  });
});
