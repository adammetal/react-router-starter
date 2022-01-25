import Store from "./store";

beforeAll(() => {
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

describe("Store Tests", () => {
  test("#save", () => {
    const farm = new Store("farm");
    
    farm.save([
      { key: 1, name: "foo" },
      { key: 2, name: "bar" },
    ]);

    const data = farm.load();

    expect(data).toStrictEqual([
      { key: 1, name: "foo" },
      { key: 2, name: "bar" },
    ]);
  });

  test("#load with non eixistent key", () => {
    const farm = new Store('farm2');
    expect(farm.load([])).toStrictEqual([]);
  });
});
