import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Knight', () => {
    let board;
    beforeEach(()=> board = new Board());

    it ('can move 2 up 1 across/ 1 up 2 across', ()=>{

        const knight= new Knight(Player.WHITE);
        board.setPiece(Square.at(0,1),knight)

        const moves=knight.getAvailableMoves(board);

        moves.should.deep.include(Square.at(2,0))
        moves.should.deep.include(Square.at(2,2))
        moves.should.deep.include(Square.at(1,3))
        moves.should.have.length(3)

    })
   




    

});
