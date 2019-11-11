import Piece from './piece';

class Bishop extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'bishop';
    this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
  }
  findLegalMoves() {
    const possibleMoves = [];
	 if (this.side == 'white') {
		for (let i=0; i<8;i++){
				this.x - i >= 0 &&  this.y + i < 8 && possibleMoves.push(`${this.x - i},${this.y+i}`);
				this.x + i < 8 &&  this.y - i >= 0 && possibleMoves.push(`${this.x + i},${this.y-i}`);
				this.x - i >= 0 && this.y - i >= 0 && possibleMoves.push(`${this.x - i},${this.y-i}`);
				this.x + i < 8 && this.y + i < 8 && possibleMoves.push(`${this.x +i},${this.y+i}`);
			}
		}
	if (this.side == 'black') {
		for (let i=0; i<8;i++){
				this.x - i >= 0 &&  this.y + i < 8 && possibleMoves.push(`${this.x - i},${this.y+i}`);
				this.x + i < 8 &&  this.y - i >= 0 && possibleMoves.push(`${this.x + i},${this.y-i}`);
				this.x - i >= 0 && this.y - i >= 0 && possibleMoves.push(`${this.x - i},${this.y-i}`);
				this.x + i < 8 && this.y + i < 8 && possibleMoves.push(`${this.x +i},${this.y+i}`);
			}
		}	
	
    return possibleMoves;
  }

}

export default Bishop;
