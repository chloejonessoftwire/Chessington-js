import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());    
    
    it('can move up to 4 squares up', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0, 0), knight);
    
        const moves = knight.getAvailableMoves(board);
        
        moves.should.deep.include(Square.at(4, 0));
    });

    it('can move 4 squares left', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0, 0), knight);
        knight.moveTo(board, Square.at(3,3)); 

        const moves = knight.getAvailableMoves(board);
        
        moves.should.deep.include(Square.at(3, 7));
    });




    

});
