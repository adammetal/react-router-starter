import { render, screen } from "@testing-library/react";
import ArrayStore from "../../lib/store/array-store";
import CatGrid from "./CatGrid";

beforeAll(() => {
  const farm = new ArrayStore("farm-test");
  farm.push({ id: "1", url: "test" });
  farm.push({ id: "2", url: "test" });
});

test('CatGrid display cats from store', () => {
  render(<CatGrid storeKey="farm-test" />)

  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(2);
});
