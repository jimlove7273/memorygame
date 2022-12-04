import React from "react";

const GameTiles = ({ tiles, gameLength, clicked, tilesFound, checkTile }) => {
  return (
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
  );
};

export default GameTiles;
