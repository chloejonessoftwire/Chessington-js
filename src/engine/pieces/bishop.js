import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location=board.findPiece(this);
        let possibleMoves=[]
        for (let i=1; i<8; i++){
            possibleMoves.push(Square.at(location.row+i, location.col+i))
            possibleMoves.push(Square.at(location.row-i, location.col-i))
            possibleMoves.push(Square.at(location.row+i, location.col-i))
            possibleMoves.push(Square.at(location.row-i, location.col+i))
        }
        possibleMoves=possibleMoves.filter(item=> item.row>=0 && item.row <8 && item.col >=0 && item.col<8)
        possibleMoves=possibleMoves.filter(item=> (item.row!= location.row || item.col!=location.col)==true )
        return possibleMoves
    }
}
