import Bishop from './pieces/bishop';
import Pawn from './pieces/pawn';
import Rook from './pieces/rook';
import Knight from './pieces/knight';
import Queen from './pieces/queen';
import King from './pieces/king';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//Pawn
let pawn;
for (let y = 0; y < 8; y++) {
    pawn = new Pawn(1, y, 'black');
    board[pawn.x][pawn.y] = pawn;
}
for (let y = 0; y < 8; y++) {
    pawn = new Pawn(6, y, 'white');
    board[pawn.x][pawn.y] = pawn;
}

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

//Queen
let queen = new Queen(0, 3, 'black');
board[queen.x][queen.y] = queen;
queen = new Queen(7, 3, 'white');
board[queen.x][queen.y] = queen;

//King
let king = new King(0, 4, 'black');
board[king.x][king.y] = king;
king = new King(7, 4, 'white');
board[king.x][king.y] = king;

//////////bishop
let bishop = new Bishop(7, 2, 'white');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(7, 5, 'white');
board[bishop.x][bishop.y] = bishop;

bishop = new Bishop(0, 2, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(0, 5, 'black');
board[bishop.x][bishop.y] = bishop;
//////////bishop koniec

export default board;

