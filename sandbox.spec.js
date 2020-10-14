describe("trying out jest", () => {
  it("compares by reference using toBe", () => {
    expect({ a: 1 }).not.toBe({ a: 1 });
    expect([]).not.toBe([]);
  });

  it("should compare content", () => {
    expect({ a: 1 }).toEqual({ a: 1 });
    expect([1, 2]).toStrictEqual([1, 2]);
  });

  describe("skipping tests", () => {
    it("broken test", () => {
      expect({ a: 1 }).not.toBe({ a: 1 });
      expect([]).not.toBe([]);
    });

    it.only("current test", () => {
      expect({ a: 1 }).toEqual({ a: 1 });
      expect([1, 2]).toStrictEqual([1, 2]);
    });
  });
});
