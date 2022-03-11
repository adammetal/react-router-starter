// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

beforeAll(() => {
  // stub
  global.localStorage = {
    storage: {},
    getItem: function (key) {
      return this.storage[key] ?? null;
    },
    setItem: function (key, value) {
      this.storage[key] = value;
    },
  };
});
