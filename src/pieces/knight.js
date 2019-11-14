import Piece from './piece';


class Knight extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'knight';
    this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
  }

  findLegalMoves() {

    let possibleMoves = [];
    const moves = [
      [2, -1],
      [2, 1],
      [1, -2],
      [1, 2],
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2]
    ];

    moves.filter(move => (this.x + move[0] >= 0 && this.y + move[1] >= 0 && this.x + move[0] <= 7 && this.y + move[1] <= 7))
      .forEach(move => possibleMoves.push([move[0] + this.x, move[1] + this.y]));

    // (this.x + 2 >= 0 && this.y + 1 >= 0 && this.x + 2 <= 7 && this.y + 1 <= 7 ) && possibleMoves.push(`${this.x + 2},${this.y + 1}`);
    // (this.x + 2 >= 0 && this.y - 1 >= 0 && this.x + 2 <= 7 && this.y - 1 <= 7 ) && possibleMoves.push(`${this.x + 2},${this.y - 1}`);
    // (this.x - 2 >= 0 && this.y + 1 >= 0 && this.x - 2 <= 7 && this.y + 1 <= 7) && possibleMoves.push(`${this.x - 2},${this.y + 1}`);
    // (this.x - 2 >= 0 && this.y - 1 >= 0 && this.x - 2 <= 7 && this.y - 1 <= 7) && possibleMoves.push(`${this.x - 2},${this.y - 1}`);
    // (this.x + 1 >= 0 && this.y + 2 >= 0 && this.x + 1 <= 7 && this.y + 2 <= 7) && possibleMoves.push(`${this.x + 1},${this.y + 2}`);
    // (this.x + 1 >= 0 && this.y - 2 >= 0 && this.x + 1 <= 7 && this.y - 2 <= 7) && possibleMoves.push(`${this.x + 1},${this.y - 2}`);
    // (this.x - 1 >= 0 && this.y + 2 >= 0 && this.x - 1 <= 7 && this.y + 2 <= 7) && possibleMoves.push(`${this.x - 1},${this.y + 2}`);
    // (this.x - 1 >= 0 && this.y - 2 >= 0 && this.x - 1 <= 7 && this.y - 2 <= 7) && possibleMoves.push(`${this.x - 1},${this.y - 2}`);

    //na tych polach stoją figury w tym samym kolorze
    // const sameColor = possibleMoves.map(move => document.getElementById((`${move[0]},${move[1]}`)))
    // .filter(i => i.querySelector(`.${this.side}`))
    // .map(i => i.id)

    // const legalMoves = possibleMoves.filter(move=> sameColor.every(i => i!=move.join(',')))

    // console.log(legalMoves);

    // console.log(sameColor);

    // console.log(possibleMoves);

    return this.ownKill(possibleMoves);

  }
}

export default Knight;