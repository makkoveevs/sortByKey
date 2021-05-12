const { sortByKey } = require("..");

describe("Test keypath with parent and child key with NULL value", () => {
  let arr = [
    { p: { k: 2 } },
    { p: { k: 1 } },
    { p: { k: null } },
    { p: { k: 3 } },
  ];

  const expectedResult = [
    { p: { k: null } },
    { p: { k: 1 } },
    { p: { k: 2 } },
    { p: { k: 3 } },
  ];
  const expectedResultReversed = [
    { p: { k: 3 } },
    { p: { k: 2 } },
    { p: { k: 1 } },
    { p: { k: null } },
  ];

  test("Sort array asc", () => {
    expect(arr.sort(sortByKey("p.k"))).toStrictEqual(expectedResult);
  });

  test("Sort array desc", () => {
    expect(arr.sort(sortByKey("p.k", { reverse: true }))).toStrictEqual(
      expectedResultReversed
    );
  });
});
