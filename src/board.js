import Pawn from './pieces/pawn';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn;
for (let y = 0; y < 8; y++) {
    pawn = new Pawn(1, y, 'black');
    board[pawn.x][pawn.y] = pawn;
}
for (let y = 0; y < 8; y++) {
    pawn = new Pawn(6, y, 'white');
    board[pawn.x][pawn.y] = pawn;
}
export default board;
