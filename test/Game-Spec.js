'use strict';

define(['core/Game'], function(Game) {

    describe('Game...', function(){
        
        var game;

        beforeEach(function() {
            game = new Game();            
        });

        it("is defined", function() {
            expect(game).not.toBe('undefined');
        });

        it("should has one player", function() {
            game.addPlayer("John");
            game.addPlayer("Bob");
            expect(game.getPlayers().length).toBe(2);
        });

        it("should propagete WSAD buttons to Engine", function() {
            expect(false).not.toBe(false);
        });
    });
});