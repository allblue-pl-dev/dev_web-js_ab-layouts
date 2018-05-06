'use strict';

export default class Site extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Site"],["ul",{},["li",{"_repeat":["menuItems:item"]},["a",{"_elem":["menuItem"],"href":["#"]},"$item.title"]]],["hr",{}],["_",{"_holder":["content"]}]]);
    }

}
