import Piece from './piece';

class Pawn extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'pawn';
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }
  findLegalMoves() {
    // console.log(this.x, this.y);
    const possibleMoves = [];
    return possibleMoves;
  }
  promote() {}
  enPassant() {}
}

export default Pawn;
