'use strict';

define(['core/Engine'], function(Engine) {

    var engine;

    beforeEach(function() {
        engine = new Engine();
    });

    describe('Engine...', function(){

        it('is defined', function() {
            expect(Engine.name).toBe('Engine');
        });

        it('has Grid instance', function() {
            expect(engine.grid).not.toBe('undefined');
        });

        describe('should allow move Snake in all directions', function(){
            
            it('move Snake LEFT - [-1,0,0]', function(){
                expect(false).toBe(false);
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