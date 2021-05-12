(function main() {
  if (!!module) {
    module.exports = require("./src/sort-by-key");
    module.exports.sortByKey = require("./src/sort-by-key");
    return module;
  } else {
    console.log("---nomodule");
    // return (export { sortByKey, sortByKey as default } from "./src/sort-by-key");
  }
})();
