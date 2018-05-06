'use strict';

export default class Subpage extends spocky.Layout {

    constructor()
    {
        super([["h2",{},"$title"],["input",{"type":["text"]}]]);
    }

}
