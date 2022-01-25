import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import YesNoBtn from "./YesNoBtn";

test("YesNoButton Snapshot test", () => {
  const { container } = render(<YesNoBtn onYes={() => {}} onNo={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('YesNoButton #onYes event', () => {
  const onYes = jest.fn();
  const onNo = jest.fn();

  render(<YesNoBtn onYes={onYes} onNo={onNo} />);

  const yesBtn = screen.getByText('Yes');
  fireEvent.click(yesBtn);

  expect(onYes).toBeCalled();
});
