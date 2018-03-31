'use strict';

spocky.package('site', ($app, $pkg) => {
    Object.defineProperty($pkg.$layouts, 'Test2', {
        value: class Test2Layout extends spocky.Layout {

            constructor()
            {
                super([]);
            }

        }, enumerable: true,
    });
});
