'use strict';

define(['client/Game', 'core/SETTINGS'], function(Game, SETTINGS) {

    describe('Game...', function(){
        
        var game;

        beforeEach(function() {
            game = new Game();
        });

        it('is defined', function() {
            expect(Game.name).toBe('Game');
        });

        xit('should has one player', function() {
            game.addSnake('John');
            game.addSnake('Bob');
            expect(game.getSnakes().length).toBe(2);
        });

        xit('should propagete WSAD buttons to Engine', function() {
            game.moveLeft();
            expect(false).not.toBe(false);
        });
    });
});