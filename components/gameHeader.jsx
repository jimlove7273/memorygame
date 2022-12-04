import React from "react";

const GameHeader = ({ gameGridChange, newGame, resetGame }) => {
  return (
    <div className="game-header">
      <button onClick={() => newGame()}>New Game</button>
      <div>
        <select
          id="game-size"
          name="game-size"
          onChange={gameGridChange}
          defaultValue="4x4"
        >
          <option>4x4</option>
          <option>5x5</option>
          <option>6x6</option>
          <option>7x7</option>
          <option>8x8</option>
          <option>9x9</option>
          <option>10x10</option>
        </select>
      </div>
      <button onClick={() => resetGame()}>Reset</button>
    </div>
  );
};

export default GameHeader;
