# React MemoryGame

This was from one of technical interviews where I was asked to render a list of Pokemons.

**Notes:**
This was one of the technical interview challenges where I was asked to create a memory game. The goal is to have the user select a game grid from 4x4 to 10x10, which a given number of hidden "blue" colored tiles. If 4x4, there would be 4 tiles, if 5x5, 5 tiles, etc. If the user selected a correct tile, it would turn blue. If the user selected a wrong tile, all blue tiles would turn back to gray. This goes on til all blue tiles are found.

### General Rules

- The default grid is 4x4, unless the user chooses a different size.
- When a new grid is generated, a set of random (blue) tiles are also generated.
- If the player chooses a tile that's a blue tile, it will stay blue.
- If the player chooses a tile that's NOT a blue tile, and not all blue tiles are found, all tilies would turn back to gray.
- This goes on until ALL blue tiles are found.
- There will be a status below the tile letting the player know how many blue tiles are found and left in the game.
- Clicking the "New Game" icon will generate a new 4x4 board.
- Clicking the "Reset Game" will reset the game and all tiles become gray.

## Checking it out

You are welcome to check it out and give me feedback. I use yarn as its package manager.

    $ yarn
    $ yarn dev
