import { useState, useEffect } from "react";
import "./App.css";

import GameHeader from "../components/gameHeader";
import GameScore from "../components/gameScore";

export default function App() {
  const [gameLength, setGameLength] = useState(4);
  let totalTiles = gameLength * gameLength;
  let tilesgrid = new Array(totalTiles).fill(0);
  let tileclicked = new Array(totalTiles).fill(0);
  const [tiles, setTiles] = useState(tilesgrid);
  const [clicked, setClicked] = useState(tileclicked);
  const [tilesFound, setTilesFound] = useState(0);

  const setupTiles = () => {
    while (tiles.filter((tile) => tile === 1).length < gameLength) {
      let nextFilled = Math.floor(Math.random() * totalTiles);
      if (tiles[nextFilled] === 0) {
        tiles[nextFilled] = 1;
      }
    }
    setTiles([...tiles]);
  };

  useEffect(() => {
    setupTiles();
  }, [gameLength, tiles]);

  const gameGridChange = (e) => {
    let value = e.target.value.split("x");
    let totalTiles = value[0] * value[0];
    let tilesgrid = new Array(totalTiles).fill(0);
    let tileclicked = new Array(totalTiles).fill(0);
    setTiles([...tilesgrid]);
    setClicked([...tileclicked]);
    setGameLength(value[0]);
  };

  const checkTile = (i) => {
    if (tiles[i] === 1 && clicked[i] === 0) {
      setTilesFound((prev) => prev + 1);
      clicked[i] = 1;
      setClicked([...clicked]);
    } else {
      resetGame();
    }
  };

  const resetGame = () => {
    let tileclicked = new Array(totalTiles).fill(0);
    setClicked([...tileclicked]);
    setTilesFound(0);
  };

  const newGame = () => {
    setGameLength(4);
    let totalTiles = 16;
    let tilesgrid = new Array(totalTiles).fill(0);
    let tileclicked = new Array(totalTiles).fill(0);
    setTiles([...tilesgrid]);
    setClicked([...tileclicked]);
    setTilesFound(0);
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

        <div className="game">
          <div className={`game-grid g${gameLength}`}>
            {tiles.map((tile, i) => (
              <button
                key={i}
                className={`game-tile ${clicked[i] === 1 ? "blue" : ""}`}
                onClick={() => checkTile(i)}
                disabled={gameLength - tilesFound <= 0}
              >
                {" "}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
