describe("Loading module test", () => {
  test("Variable from loaded module must be is not null", () => {
    let sortByKey = null;
    try {
      sortByKey = require("..");
    } catch {
      //PASS
    }
    expect(sortByKey).not.toBeNull();
  });
});
