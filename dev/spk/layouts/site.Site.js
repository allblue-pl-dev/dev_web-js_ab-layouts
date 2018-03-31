'use strict';

spocky.package('site', ($app, $pkg) => {
    Object.defineProperty($pkg.$layouts, 'Site', {
        value: class SiteLayout extends spocky.Layout {

            constructor()
            {
                super([["h1",{},"Site"],"Buttons:",["br",{}],["button",{"_elem":"b1"},"Button 1"],["button",{"_elem":"b2"},"Button 2"],["br",{}],["h1",{},"Test: ","$title"],["div",{"_repeat":"repeat1:r1"},["h1",{},"1. ","$title"],["div",{"_repeat":"repeat2:r2"},["h2",{},"2.1. ","$title"]]]]);
            }

        }, enumerable: true,
    });
});
