import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GameHeader from "./gameHeader";

describe("gameHeader component test", () => {
  test("Renders gameHeader.jsx correctly", () => {
    render(<GameHeader />);
    const textNewGame = screen.getByText("New Game");
    const textReset = screen.getByText("Reset");
    const numberOfOptions = screen.getAllByRole("option").length;
    expect(textNewGame).toBeInTheDocument();
    expect(textReset).toBeInTheDocument();
    expect(numberOfOptions).toBe(7);
  });

  test("test 4x4 as default value", () => {
    render(<GameHeader />);
    const combobox = screen.getByRole("combobox");
    expect(combobox).toHaveValue("4x4");
    expect(screen.getAllByRole("option")).toHaveLength(7);
  });

  test("test 7x7 as selected option", () => {
    render(<GameHeader />);
    expect(screen.getAllByRole("option")).toHaveLength(7);
    const combobox = screen.getByRole("combobox");
    fireEvent.change(combobox, {
      target: { value: "7x7" },
    });
    expect(combobox).toHaveValue("7x7");
  });
});
