const shuffle = require("../src/shuffle");

describe("shuffle should return an array", () => {
  test("return an array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(Array.isArray(result)).toBe(true);
  });

  test("shuffle should return an array of the same length with the same items", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);

    expect(result).toHaveLength(inputArray.length);
    inputArray.forEach((item) => {
      expect(result).toContain(item);
    });
  });
});
