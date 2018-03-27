'use strict';

spocky.layout('lemonBee.Main', () => [["div",{"class":"lb-header"}],["div",{"class":"lb-menu-main mg-spacer-top-s row"},["_",{"_repeat":"panels"},["div",{"class":"col-lg-3 col-sm-6 mg-spacer-bottom-s $class"},["h1",{},["a",{"class":"btn btn-default mg-full","href":"$uri"},["img",{"_show":"image","src":"$image","alt":"$title"}],"$title"]]]]],["div",{"class":"mg-clear"}]]);
