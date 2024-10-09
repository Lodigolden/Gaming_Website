# Tile
The **Tile** component represents a tile.

[Tic Tac Toe](./TicTacToe.md)

## Props
### border
Which style of border the tile has.
> Type: string

### setPlayer1
Sets the current player.
> Type: function

### player
The current player (true if 1, false if 2).
> Type: bool

## Members
### m_value
The value of the tile.
> Type: string

### m_is_set
If someone already set the tile or not.
> Type: bool

## Methods
### setTile()
Sets the value of the tile.
> Args: string

### set()
Sets if the tile is played already or not.
> Args: bool

### handleTileClick()
Determines if the tile can be set or not.