import board from '../board';

class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side; //'black' or 'white'
  }
  move(id) {
    const newX = Number(id[0]);
    const newY = Number(id[2]);

    //clearing previous place
    board[this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = '';

    //setting new
    this.x = newX;
    this.y = newY;
    board[this.x][this.y] = this;
    document.getElementById(id).innerHTML = this.display;
  }

  ownKill(possibleMoves) {
    const sameColor = possibleMoves.map(move => document.getElementById((`${move[0]},${move[move.length - 1]}`)))
      .filter(i => i.querySelector(`.${this.side}`))
      .map(i => i.id)

    const legalMoves = possibleMoves.filter(move => sameColor.every(i => i != `${move[0]},${move[move.length - 1]}`))

    return legalMoves;
  }

  findLegalMoves() {}
}

export default Piece;