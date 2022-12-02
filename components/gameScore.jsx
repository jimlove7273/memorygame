import React from "react";

const GameScore = ({ tilesFound, gameLength }) => {
  return (
    <div className="tile-count">
      {gameLength - tilesFound <= 0 && <>Game Over!</>}
      {gameLength - tilesFound > 0 && (
        <>
          Found: {tilesFound} Left: {gameLength - tilesFound}
        </>
      )}
    </div>
  );
};

export default GameScore;
