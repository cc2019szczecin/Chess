import Piece from './piece';

class Knight extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'knight';
    this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
  }
  findLegalMoves() {

    const possibleMoves = [];
    
      (this.x + 2 >= 0 && this.y + 1 >= 0 && this.x + 2 <= 7 && this.y + 1 <= 7 ) && possibleMoves.push(`${this.x + 2},${this.y + 1}`);
      (this.x + 2 >= 0 && this.y - 1 >= 0 && this.x + 2 <= 7 && this.y - 1 <= 7 ) && possibleMoves.push(`${this.x + 2},${this.y - 1}`);
      (this.x - 2 >= 0 && this.y + 1 >= 0 && this.x - 2 <= 7 && this.y + 1 <= 7) && possibleMoves.push(`${this.x - 2},${this.y + 1}`);
      (this.x - 2 >= 0 && this.y - 1 >= 0 && this.x - 2 <= 7 && this.y - 1 <= 7) && possibleMoves.push(`${this.x - 2},${this.y - 1}`);
      (this.x + 1 >= 0 && this.y + 2 >= 0 && this.x + 1 <= 7 && this.y + 2 <= 7) && possibleMoves.push(`${this.x + 1},${this.y + 2}`);
      (this.x + 1 >= 0 && this.y - 2 >= 0 && this.x + 1 <= 7 && this.y - 2 <= 7) && possibleMoves.push(`${this.x + 1},${this.y - 2}`);
      (this.x - 1 >= 0 && this.y + 2 >= 0 && this.x - 1 <= 7 && this.y + 2 <= 7) && possibleMoves.push(`${this.x - 1},${this.y + 2}`);
      (this.x - 1 >= 0 && this.y - 2 >= 0 && this.x - 1 <= 7 && this.y - 2 <= 7) && possibleMoves.push(`${this.x - 1},${this.y - 2}`);
    
    return possibleMoves;
  }
}

export default Knight;
