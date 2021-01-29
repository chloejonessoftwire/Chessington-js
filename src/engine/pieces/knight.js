import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let possibleMoves=[]
        
        possibleMoves.push(Square.at(location.row+2, location.col+1))
        possibleMoves.push(Square.at(location.row+2, location.col-1))
        possibleMoves.push(Square.at(location.row-2, location.col+1))
        possibleMoves.push(Square.at(location.row-2, location.col-1))
        possibleMoves.push(Square.at(location.row+1, location.col+2))
        possibleMoves.push(Square.at(location.row+1, location.col-2))
        possibleMoves.push(Square.at(location.row-1, location.col+2))
        possibleMoves.push(Square.at(location.row-1, location.col-2))

        possibleMoves=possibleMoves.filter(item=> item.row>=0 && item.row <8 && item.col >=0 && item.col<8)
        possibleMoves=possibleMoves.filter(item=> (item.row!= location.row || item.col!=location.col)==true )
        
        return possibleMoves
    }
}

