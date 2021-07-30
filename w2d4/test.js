describe("filter", () => {
  it("should remove banned words from a string",
      () => {
        assert.equal("I don't like to study not here".filter("don't", "not"), "I  like to study  here");
      });
});

describe("bubbleSort", () => {
  it("should sort an array using bubblesort",
      () => {
          assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(), [-2, 0, 1, 3, 4, 6].toString());
      });
});
