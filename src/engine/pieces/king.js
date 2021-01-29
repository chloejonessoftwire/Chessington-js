import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location=board.findPiece(this);
        let possibleMoves=[]
        possibleMoves.push(Square.at(location.row+1, location.col))
        possibleMoves.push(Square.at(location.row-1, location.col))
        possibleMoves.push(Square.at(location.row, location.col+1))
        possibleMoves.push(Square.at(location.row, location.col-1))
        possibleMoves.push(Square.at(location.row+1, location.col+1))
        possibleMoves.push(Square.at(location.row-1, location.col+1))
        possibleMoves.push(Square.at(location.row+1, location.col-1))
        possibleMoves.push(Square.at(location.row-1, location.col-1))
        
        possibleMoves=possibleMoves.filter(item=> item.row>=0 && item.row <8 && item.col >=0 && item.col<8)
        
    
        return possibleMoves
        
       
        //.filter provides a function and if passed can stay in array 
        
    }
        // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        // const result = words.filter(word => word.length > 6);
        
        // console.log(result);
}
