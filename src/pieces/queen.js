import Piece from './piece';

class Queen extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'queen';
    this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
  }
  findLegalMoves() {
    const possibleMoves = [];
    for (let i = 1; i <= 7; i += 1) {
      // diagonally to the right down
      (this.x + i >= 0
        && this.y + i >= 0
        && this.x + i <= 7
        && this.y + i <= 7) && possibleMoves.push(`${this.x + i},${this.y + i}`);

      // diagonally to the left down
      (this.x + i >= 0
        && this.y - i >= 0
        && this.x + i <= 7
        && this.y - i <= 7) && possibleMoves.push(`${this.x + i},${this.y - i}`);

      // diagonally to the right up
      (this.x - i >= 0
      && this.y + i >= 0
      && this.x - i <= 7
      && this.y + i <= 7) && possibleMoves.push(`${this.x - i},${this.y + i}`);

      // diagonally to the left up
      (this.x - i >= 0
        && this.y - i >= 0
        && this.x - i <= 7
        && this.y - i <= 7) && possibleMoves.push(`${this.x - i},${this.y - i}`);

      // vertically down
      (this.x + i >= 0 && this.x + i <= 7) && possibleMoves.push(`${this.x + i},${this.y}`);

      // vertically up
      (this.x - i >= 0 && this.x - i <= 7) && possibleMoves.push(`${this.x - i},${this.y}`);

      // horizontally right
      (this.y + i >= 0 && this.y + i <= 7) && possibleMoves.push(`${this.x},${this.y + i}`);

      // horizontally left
      (this.y - i >= 0 && this.y - i <= 7) && possibleMoves.push(`${this.x},${this.y - i}`);
    }
    return possibleMoves;
  }
}

export default Queen;
