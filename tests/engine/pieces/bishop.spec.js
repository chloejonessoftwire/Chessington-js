import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {
    let board;
    beforeEach(() => board = new Board());
     
    it('can move diagonally up, left', () =>{

        const bishop=new Bishop(Player.WHITE);
        board.setPiece(Square.at(0,2), bishop);
        
        const moves=bishop.getAvailableMoves(board);

        
        moves.should.deep.include(Square.at(5,7))
        moves.should.deep.not.include(Square.at(-1,1))
        moves.should.deep.not.include(Square.at(0, 2))
        moves.should.have.length(7)
        
    })
});
