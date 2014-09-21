'use strict';

define(['core/Engine'], function(Engine) {

    describe('Engine...', function(){

        it("is defined", function() {
            expect(new Engine().x).toBe(666);
        });

    });
});