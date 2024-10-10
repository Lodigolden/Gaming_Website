# TicTacToe
The **TicTacToe** component handles the main TicTacToe game.
This component contains other components, including: 
- **GameBoard**
  - **Tile**
- **NewGame**
- **Slash**
#

![Component Diagram](./Assets/Game_Components.png)
#

## Components
### GameBoard
The **GameBoard** component contains all pieces of TicTacToe.
[Game Board](./GameBoard.md)

### NewGame
The **NewGame** component starts a new game.
[NewGame](./NewGame.md)

### Slash
The **Slash** component marks a winner.
[Slash](./Slash.md)

### Title
The **Title** component is the title of the game.
[Title](../SiteOverview/Title.md)

## Members
### m_player
The current player.
> Type: string

### m_state
The state of the game.
> Type: Array of strings

## Methods
### handleNewGameClick
Restarts the game.

### handleTileClick
Updates the state on a tile click.
> Args: number

### setPlayer
Sets the current player.
> Args: string

### setState
Sets the state of the game.
> Args: Array of strings
