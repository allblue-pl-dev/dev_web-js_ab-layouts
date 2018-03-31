'use strict';

spocky.package('lemonBee', ($app, $pkg) => {
    Object.defineProperty($pkg.$layouts, 'Main', {
        value: class MainLayout extends spocky.Layout {

            constructor()
            {
                super([["h1",{},"Main Panel"],["div",{"class":"lb-header"},["h2",{},["img",{"ab-show":"image","alt":"title","src":"{{image}}"}],["i",{"ab-hide":"image","class":"fa {{faIcon}}"}],"${eText('title')}: ","$title",["br",{}],["span",{"_show":"show"},"SHOW"]]],["div",{"class":"lb-menu-main mg-spacer-top-s row"},["div",{"_repeat":"panels:p","class":"col-lg-3 col-sm-6 mg-spacer-bottom-s $class"},["h1",{},"Main title: ","$title",["span",{"_show":"_p.show"},"Show"],["a",{"class":"btn btn-default mg-full","href":"$_p.uri"},["img",{"_show":"_p.image","src":"$_p.image","alt":"$_p.title"}],"$_p.innerTitle"]]]],["div",{"class":"mg-clear"}]]);
            }

        }, enumerable: true,
    });
});
