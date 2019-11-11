import Piece from './piece';

class Rook extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'rook';
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }
  findLegalMoves() {
    const possibleMoves = [];
    if (this.side == 'white') {
      for (let i=0; i<8;i++){
          this.x - i >= 0 &&  this.y && possibleMoves.push(`${this.x - i},${this.y}`);
          this.x + i < 8 &&  this.y && possibleMoves.push(`${this.x + i},${this.y}`);
          this.x && this.y - i >= 0 && possibleMoves.push(`${this.x},${this.y-i}`);
          this.x && this.y + i < 8 && possibleMoves.push(`${this.x},${this.y+i}`);
        }
      }
    if (this.side == 'black') {
      for (let i=0; i<8;i++){
          this.x - i >= 0 &&  this.y && possibleMoves.push(`${this.x - i},${this.y}`);
          this.x + i < 8 &&  this.y && possibleMoves.push(`${this.x + i},${this.y}`);
          this.x && this.y - i >= 0 && possibleMoves.push(`${this.x},${this.y-i}`);
          this.x && this.y + i < 8 && possibleMoves.push(`${this.x},${this.y+i}`);
        }
      }	
    return possibleMoves;
  }
}

export default Rook;
