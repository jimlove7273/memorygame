import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import GameScore from "./gameScore";

test("render gameScore component correct", () => {
  render(<GameScore tilesFound={5} gameLength={16} />);
  const scoreText1 = screen.getByText("Found: 5 Left: 11");
  expect(scoreText1).toBeInTheDocument();

  render(<GameScore tilesFound={3} gameLength={16} />);
  const scoreText2 = screen.getByText("Found: 3 Left: 13");
  expect(scoreText2).toBeInTheDocument();
});
