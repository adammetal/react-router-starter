import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ArrayStore from "../../lib/store/array-store";
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

beforeEach(() => {
  // mock
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(testData),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("CatDisplay loading by default", async () => {
  render(<CatDisplay />);

  const loading = screen.getByText("Loading....");
  expect(loading).toBeVisible();

  await waitForElementToBeRemoved(loading);
});

test("CatDisplay save kittens to storage", async () => {
  render(<CatDisplay />);

  const loading = screen.getByText("Loading....");
  expect(loading).toBeVisible();

  const yesBtn = await screen.findByText("Yes");
  fireEvent.click(yesBtn);

  await screen.findByText("Loading....");

  const farm = new ArrayStore("farm");
  expect(farm.load()).toStrictEqual([
    { id: "8vg", url: "https://cdn2.thecatapi.com/images/8vg.jpg" },
  ]);
});
