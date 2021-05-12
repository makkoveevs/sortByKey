(function () {
  if (!!module) {
    const _defaultOptions = require("./default-options");

    return (module.exports = function sortByKey(
      keyPathString = "",
      options = _defaultOptions
    ) {
      const _options = { ..._defaultOptions, ...options };
      //TODO: validate option keys

      //TODO: keyPathString as array.  work with keyPathString formats

      //TODO: use the default value if some key does not exist in the object

      return function (currEl, nextEl) {
        return keyPathString
          .split(".")
          .reduce((obj, currentKey) => obj[currentKey], currEl) >
          keyPathString
            .split(".")
            .reduce((obj, currentKey) => obj[currentKey], nextEl)
          ? _options.reverse
            ? -1
            : 1
          : _options.reverse
          ? 1
          : -1;
      };
    });
  } else {
    console.log("---load from No module");
    // import _defaultOptions from "./default-options";
  }
})();
