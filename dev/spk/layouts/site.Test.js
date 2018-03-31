'use strict';

spocky.package('site', ($app, $pkg) => {
    Object.defineProperty($pkg.$layouts, 'Test', {
        value: class TestLayout extends spocky.Layout {

            constructor()
            {
                super([["h1",{},"Hello World!"],"htmlField:",["span",{"_elem":"htmlField"}],["br",{}],"textField: ","$textField"]);
            }

        }, enumerable: true,
    });
});
