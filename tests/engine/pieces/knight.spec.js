import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());    
    
    it('can move up to 7 squares left', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0, 0), knight);
        knight.moveTo(board, Square.at(2, 0));

        const moves = pawn.getAvailableMoves(board);
        
        moves.should.have.length(1);
        moves.should.deep.include(Square.at(3, 0));
    });

    it('can move up to 7 squares right', () => {
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(1, 7), pawn);

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(2);
        moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);

    
    it('can move up to 7 squares right', () => {
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(1, 7), pawn);

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(2);
        moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
    

    it('can move up to 7 squares right', () => {
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(1, 7), pawn);

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(2);
        moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);    
    });




    

});
