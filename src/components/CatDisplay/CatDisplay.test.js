import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
  waitFor
} from "@testing-library/react";
import ArrayStore from "../../lib/store/array-store";
import CatDisplay from "./CatDisplay";
import testData from './mockResponse';

beforeEach(() => {
  cleanup();
  // mock
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(testData),
      status: 200,
      ok: true
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
  cleanup();
});

test("CatDisplay loading by default", async () => {
  render(<CatDisplay />);

  const loading = screen.getByText("Loading....");
  expect(loading).toBeVisible();

  await waitForElementToBeRemoved(loading);
});

test("CatDisplay save kittens to storage", async () => {
  render(<CatDisplay />);

  const yesBtn = await screen.findByText("Yes");
  fireEvent.click(yesBtn);

  await waitFor(() => expect(screen.getByText("Loading the image...")).toBeVisible());

  const farm = new ArrayStore("farm");
  expect(farm.load()).toStrictEqual([
    { id: "8vg", url: "https://cdn2.thecatapi.com/images/8vg.jpg" },
  ]);
});
