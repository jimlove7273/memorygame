import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import GameTiles from "./gameTiles";

describe("gameTiles component test", () => {
  test("gameTiles renders correct", () => {
    let gameSize = 4;
    let tilesgrid = new Array(16).fill(0);
    let clicked = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    render(
      <GameTiles tiles={tilesgrid} gameLength={gameSize} clicked={clicked} />
    );
    let allButtons = screen.getAllByRole("button");
    expect(allButtons).toHaveLength(gameSize * gameSize);
  });

  test("gameTiles NOT disabled", () => {
    let gameSize = 4;
    let tilesgrid = new Array(16).fill(0);
    let clicked = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    render(
      <GameTiles
        tiles={tilesgrid}
        gameLength={gameSize * gameSize}
        tilesFound={gameSize * gameSize - 2}
        clicked={clicked}
      />
    );

    let allButtons = screen.getAllByRole("button");
    allButtons.forEach((x) => expect(x).not.toBeDisabled());
  });

  test("gameTiles ARE disabled", () => {
    let gameSize = 4;
    let tilesgrid = new Array(16).fill(0);
    let clicked = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    render(
      <GameTiles
        tiles={tilesgrid}
        gameLength={gameSize * gameSize}
        tilesFound={gameSize * gameSize}
        clicked={clicked}
      />
    );

    let allButtons = screen.getAllByRole("button");
    allButtons.forEach((x) => expect(x).toBeDisabled());
  });
});
