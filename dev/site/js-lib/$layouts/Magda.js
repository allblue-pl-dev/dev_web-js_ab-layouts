'use strict';

const
    spocky = require('spocky')
;

export default class Magda extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Magda ","$nr"],["_",{"_holder":["spock"]}],["_",{"_holder":["magda"]}]]);
    }

}
