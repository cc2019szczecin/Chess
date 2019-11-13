import Pawn from './pieces/pawn';
import Rook from './pieces/rook';
import Knight from './pieces/knight';
import King from './pieces/king';
import Queen from './pieces/queen';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;

// Rookies
let rook = new Rook(7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7, 7, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(0, 0, 'black');
board[rook.x][rook.y] = rook;
rook = new Rook(0, 7, 'black');
board[rook.x][rook.y] = rook;

//Rozstawienie skoczków - Marta
let knight = new Knight(0, 1, 'black');
board[knight.x][knight.y] = knight;
knight = new Knight(0, 6, 'black');
board[knight.x][knight.y] = knight;
knight = new Knight(7, 1, 'white');
board[knight.x][knight.y] = knight;
knight = new Knight(7, 6, 'white');
board[knight.x][knight.y] = knight;

//King
let king = new King(0, 4, 'black');
board[king.x][king.y] = king;
king = new King(7, 4, 'white');
board[king.x][king.y] = king;

let queen = new Queen(0, 3, 'black');
board[queen.x][queen.y] = queen;
queen = new Queen(7, 3, 'white');
board[queen.x][queen.y] = queen;

export default board;