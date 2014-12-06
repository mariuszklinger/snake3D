'use strict';

define(['core/Snake'], function(Snake) {

    var snake;

    beforeEach(function() {
        snake = new Snake();
    });

    describe('Snake...', function(){

        xdescribe('should allow move Snake in all directions', function(){
            
            it('move Snake LEFT - [-1,0,0]', function(){
                expect(snake.moveA()).toBe(false);
            });

            it('move Snake RIGHT - [1,0,0]', function(){
                expect(false).toBe(false);
            });

            it('move Snake UP - [0,1,0]', function(){
                expect(false).toBe(false);
            });

            it('move Snake DOWN -[0,-1,0]', function(){
                expect(false).toBe(false);
            });
        })

        it('should destroy Snake after collision', function(){
            expect(false).toBe(false);
        });

    });
});