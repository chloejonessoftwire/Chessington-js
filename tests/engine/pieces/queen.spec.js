import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {
    let board;
    beforeEach(() => board = new Board());
     
    it('can move all directions on the board', () =>{

        const queen=new Queen(Player.WHITE);
        board.setPiece(Square.at(0,4), queen);
        
        const moves=queen.getAvailableMoves(board);

        
        moves.should.deep.include(Square.at(7,4))
        moves.should.deep.not.include(Square.at(-1,4))
        moves.should.deep.not.include(Square.at(8, 4))
        moves.should.have.length(21)
        
    })
});