const shuffle = require("../src/shuffle");



describe("shuffle should return an array", () => {
  test("return an array", () => {
    const array = shuffle ();
    expect(Array.toHaveLength(1);
    expect(typeof array).toBe("object");
  });

  test("shuffle should return an array of the same length with the same items", () => {
    const array = shuffle([1, 2, 3, 4, 5]);
    const result = shuffle(inputArray);

    expect(result).toHaveLength(inputArray.length);
    expect(array).toHaveLength(5);
    expect(typeof array).toBe("object");
  });
});
