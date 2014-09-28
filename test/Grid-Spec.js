'use strict';

define(['core/Grid'], function(Grid) {

    var grid;

    beforeEach(function() {
        grid = new Grid();            
    });

    describe('Grid...', function(){

        it('is defined', function() {
            expect(Grid.name).toBe('Grid');
        });

    });
});