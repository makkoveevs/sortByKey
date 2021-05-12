import _defaultOptions from "./default-options.json";

export function sortByKey(keypath = "", options = _defaultOptions) {
  const _options = { ..._defaultOptions, ...options };
  //TODO: validate option keys

  //TODO: keypath as array.  work with keypath formats

  //TODO: use the default value if some key does not exist in the object

  return function (a, b) {
    return a[keypath] > b[keypath]
      ? _options.reverse
        ? -1
        : 1
      : _options.reverse
      ? 1
      : -1;
  };
}
