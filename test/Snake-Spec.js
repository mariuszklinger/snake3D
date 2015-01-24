'use strict';

define(['core/Snake', 'core/Engine'], function(Snake, Engine) {

    var snake, engine;

    beforeEach(function() {
        snake = new Snake();

        engine = new Engine();
        engine.addSnake(snake);
    });

    describe('Snake...', function(){

        describe('should allow move Snake in all directions', function(){
            
            it('move Snake LEFT (A) - [-1,0,0]', function(){
                expect(snake.move('A')).toEqual([-1, 0, 0]);
            });

            it('move Snake RIGHT (D) - [1,0,0]', function(){
                expect(snake.move('D')).toEqual([1, 0, 0]);
            });

            it('move Snake UP (W) - [0,1,0]', function(){
                expect(snake.move('W')).toEqual([0, 1, 0]);
            });

            it('move Snake DOWN (S) - [0,-1,0]', function(){
                expect(snake.move('S')).toEqual([0, -1, 0]);
            });

            it('move Snake BEYOND (E) - [0,-1,0]', function(){
                expect(snake.move('E')).toEqual([0, 0, -1]);
            });

            it('move Snake FORWARD (Q) - [0,0,0]', function(){
                expect(snake.move('Q')).toEqual([0, 0, 1]);
            });
        })

        it('should disallow to move back', function(){
            snake.move('Q')
            expect(snake.move('E')).toBeFalsy(false);

            snake.move('A')
            expect(snake.move('D')).toBeFalsy(false);
        });

        xit('should destroy Snake after collision', function(){
            expect(false).toBeFalsy(false);
        });

    });
});