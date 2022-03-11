import ArrayStore from "./array-store";
import Store from "./store";

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

describe("ArrayStore Tests", () => {
  test("push method", () => {
    const arrStore = new ArrayStore('array-store-1');
    arrStore.push({ foo: 'bar' });
    expect(arrStore.load()).toStrictEqual([{ foo: 'bar' }])
  });

  test("load method", () => {
    const arrStore = new ArrayStore('array-store-2');
    expect(arrStore.load()).toStrictEqual([]);
  });
})
