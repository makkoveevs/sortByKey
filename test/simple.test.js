const { sortByKey } = require("..");

describe("Simple testing", () => {
  let arr = [{ k: 2 }, { k: 1 }, { k: 3 }];

  const expectedResult = [{ k: 1 }, { k: 2 }, { k: 3 }];
  const expectedResultReversed = [{ k: 3 }, { k: 2 }, { k: 1 }];

  test("Sort array asc", () => {
    expect(arr.sort(sortByKey("k"))).toStrictEqual(expectedResult);
  });

  test("Sort array desc", () => {
    expect(arr.sort(sortByKey("k", { reverse: true }))).toStrictEqual(
      expectedResultReversed
    );
  });
});
