import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ArrayStore from "../lib/store/array-store";
import CatDisplay from "./CatDisplay";

const testData = [
  {
    breeds: [],
    categories: [
      {
        id: 15,
        name: "clothes",
      },
    ],
    id: "8vg",
    url: "https://cdn2.thecatapi.com/images/8vg.jpg",
    width: 570,
    height: 798,
  },
];

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

beforeEach(() => {
  // mock
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(testData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("CatDisplay save kittens to storage", async () => {
  render(<CatDisplay />);

  const loading = await waitFor(() => screen.findByText("Loading...."));
  expect(loading).not.toBeNull();

  const yesBtn = screen.getByText("Yes");
  fireEvent.click(yesBtn);

  await waitFor(() => screen.findByText("Loading...."));

  const farm = new ArrayStore("farm");
  expect(farm.load()).toStrictEqual([
    { id: "8vg", url: "https://cdn2.thecatapi.com/images/8vg.jpg" },
  ]);
});
