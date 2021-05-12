const { sortByKey } = require("..");

describe("Sort simple obj with NULL value", () => {
  let arr = [{ k: 2 }, { k: null }, { k: 1 }, { k: 3 }];

  const expectedResult = [{ k: null }, { k: 1 }, { k: 2 }, { k: 3 }];
  const expectedResultReversed = [{ k: 3 }, { k: 2 }, { k: 1 }, { k: null }];

  test("Sort array asc", () => {
    expect(arr.sort(sortByKey("k"))).toStrictEqual(expectedResult);
  });

  test("Sort array desc", () => {
    expect(arr.sort(sortByKey("k", { reverse: true }))).toStrictEqual(
      expectedResultReversed
    );
  });
});
