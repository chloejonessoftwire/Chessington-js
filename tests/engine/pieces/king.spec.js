import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
describe('King', () => {
    let board;
    beforeEach(() => board = new Board());    
    
    it('can move up to 1 squares up', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 3), king);
    
        const moves = king.getAvailableMoves(board);
        
        moves.should.deep.include(Square.at(1, 3));
    });

    it('can move 1 square left', () => {
        const king = new King(Player.BLACK);
        board.setPiece(Square.at(7, 4), king);
    
        const moves = king.getAvailableMoves(board);
        
        moves.should.deep.include(Square.at(7, 3));
    });

    it('can not move bakcwards', () => {
        const king = new King(Player.BLACK);
        board.setPiece(Square.at(7, 4), king);
    
        const moves = king.getAvailableMoves(board);
        
        moves.should.have.length(5);
        moves.should.deep.not.include(Square.at(8, 4));
    });

});
