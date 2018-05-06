'use strict';

export default class Test extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Hello World!"],"htmlField:",["span",{"_elem":["htmlField"]}],["br",{}],"textField: ","$textField"]);
    }

}
