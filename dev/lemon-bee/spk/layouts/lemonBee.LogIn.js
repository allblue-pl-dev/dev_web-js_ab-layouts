'use strict';

spocky.package('lemonBee', ($app, $pkg) => {
    Object.defineProperty($pkg.$layouts, 'LogIn', {
        value: class LogInLayout extends spocky.Layout {

            constructor()
            {
                super([]);
            }

        }, enumerable: true,
    });
});
