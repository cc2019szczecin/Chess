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
      for (let i=this.x; i>0;i--) {
          this.x - 1 >= 0 && possibleMoves.push(`${this.x - i},${this.y}`);
      }
      for (let i = 1; i < 8 - this.x; i++) {
        this.x + 1 < 8 && possibleMoves.push(`${this.x + i},${this.y}`);
      }
      for (let i = this.y; i > 0; i--) {
        this.y - 1 >= 0 && possibleMoves.push(`${this.x},${this.y - i}`);
      }
      for (let i = 1; i < 8 - this.y; i++) {
        this.y + 1 <= 7 && possibleMoves.push(`${this.x},${this.y + i}`);
      }
    }
    if (this.side == 'black') {
      for (let i=this.x; i>0;i--) {
        this.x - 1 >= 0 && possibleMoves.push(`${this.x - i},${this.y}`);
      }
      for (let i = 1; i < 8 - this.x; i++) {
        this.x + 1 < 8 && possibleMoves.push(`${this.x + i},${this.y}`);
      }
      for (let i = this.y; i > 0; i--) {
        this.y - 1 >= 0 && possibleMoves.push(`${this.x},${this.y - i}`);
      }
      for (let i = 1; i < 8 - this.y; i++) {
        this.y + 1 <= 7 && possibleMoves.push(`${this.x},${this.y + i}`);
      }
    }	
    return possibleMoves;
  }
}

export default Rook;
