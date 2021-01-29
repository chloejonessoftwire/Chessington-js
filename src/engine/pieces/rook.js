import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location= board.findPiece(this);
        let possibleMoves=[]
        for (let i=0; i<8; i++) {
            possibleMoves.push(Square.at(location.row, i))
            possibleMoves.push(Square.at(i, location.col))
        }
        return possibleMoves
    
    }
}