import Piece from './piece';

class King extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'king';
    this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king
  }
  findLegalMoves() {
    const possibleMoves = [];
    this.x - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
    this.y - 1 >= 0 && possibleMoves.push(`${this.x},${this.y - 1}`);
    this.x + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y}`);
    this.y + 1 <= 7 && possibleMoves.push(`${this.x},${this.y + 1}`);
    this.x + 1 <= 7 && this.y + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y + 1}`);
    this.x + 1 <= 7 && this.y - 1 >= 0 && possibleMoves.push(`${this.x + 1},${this.y - 1}`);
    this.x - 1 >= 0 && this.y + 1 <= 7 && possibleMoves.push(`${this.x - 1},${this.y + 1}`);
    this.x - 1 >= 0 && this.y - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y - 1}`);
    
    return this.ownKill(possibleMoves);
    //return possibleMoves;
  }
}

export default King;