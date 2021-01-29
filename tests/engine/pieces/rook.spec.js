import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Rook', () => {

    let board;
    beforeEach(() => board = new Board());    
    
    it('can move up to 4 squares up', () => {
        const rook = new Rook(Player.WHITE);
        board.setPiece(Square.at(0, 0), rook);
    
        const moves = rook.getAvailableMoves(board);
        moves.should.have.length(14)
        moves.should.deep.include(Square.at(4, 0));
    });

    it('can move 4 squares left', () => {
        const rook = new Rook(Player.WHITE);
        board.setPiece(Square.at(0, 0), rook);
        rook.moveTo(board, Square.at(3,3)); 

        const moves = rook.getAvailableMoves(board);
        
        moves.should.deep.include(Square.at(3, 7));
    });




    

});
