import { useState } from "react";
import "./App.css";

import GameHeader from "../components/gameHeader";
import GameScore from "../components/gameScore";
import GameTiles from "../components/gameTiles";

export default function App() {
  const [gameLength, setGameLength] = useState(4);
  let totalTiles = gameLength * gameLength;
  let tilesgrid = new Array(totalTiles).fill(0);
  let tileclicked = new Array(totalTiles).fill(0);
  const [tiles, setTiles] = useState(tilesgrid);
  const [clicked, setClicked] = useState(tileclicked);
  const [tilesFound, setTilesFound] = useState(0);

  /**
   * * Function: setupTiles
   * * This function takes the new or generated tiles (grid) and add tiles to be guessed (blue tiles) based on the grid size
   */
  const setupTiles = () => {
    while (tiles.filter((tile) => tile === 1).length < gameLength) {
      let nextFilled = Math.floor(Math.random() * totalTiles);
      if (tiles[nextFilled] === 0) {
        tiles[nextFilled] = 1;
      }
    }
  };
  setupTiles();

  /**
   * * Function: gameGridChange
   * * This function runs when the user selects a new grid size
   */
  const gameGridChange = (e) => {
    let value = e.target.value.split("x");
    let totalTiles = value[0] * value[0];
    let tilesgrid = new Array(totalTiles).fill(0);
    let tileclicked = new Array(totalTiles).fill(0);
    setTiles([...tilesgrid]);
    setClicked([...tileclicked]);
    setGameLength(value[0]);
    setTilesFound(0);
  };

  /**
   * * Function checkTile
   * * This function runs when the player clicks any of the tiles, it checks if it's a pre-selected/blue tile, if so,
   * * it's turned to blue.  Otherwise, it resets everything back to gray tiles.
   */
  const checkTile = (i) => {
    if (tiles[i] === 1 && clicked[i] === 0) {
      setTilesFound((prev) => prev + 1);
      clicked[i] = 1;
      setClicked([...clicked]);
    } else {
      resetGame();
    }
  };

  /**
   * * Function: resetGame
   * * When you click an incorrect tile (not a blue tile), this resets everything back to gray tiles and start over
   */
  const resetGame = () => {
    let tileclicked = new Array(totalTiles).fill(0);
    setClicked([...tileclicked]);
    setTilesFound(0);
  };

  /**
   * * Function: newGame
   * * This function creates a new game and resets everything including the scoring and tiles selected
   */
  const newGame = () => {
    let tilesgrid = new Array(totalTiles).fill(0);
    let tileclicked = new Array(totalTiles).fill(0);
    setTiles([...tilesgrid]);
    setClicked([...tileclicked]);
    setTilesFound(0);
    setupTiles();
  };

  return (
    <div className="memory-game">
      <div>
        <GameHeader
          gameGridChange={gameGridChange}
          newGame={newGame}
          resetGame={resetGame}
        />

        <GameScore tilesFound={tilesFound} gameLength={gameLength} />

        <GameTiles
          tiles={tiles}
          gameLength={gameLength}
          clicked={clicked}
          tilesFound={tilesFound}
          checkTile={checkTile}
        />
      </div>
    </div>
  );
}
