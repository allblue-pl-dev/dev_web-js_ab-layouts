'use strict';

const
    spocky = require('spocky')
;

export default class Tests extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Tests:"],["_",{"_holder":["basic"]}],["hr",{}],["_",{"_holder":["repeats1"]}],["hr",{}],["_",{"_holder":["repeats2"]}],["hr",{}],["_",{"_holder":["eval"]}],["hr",{}],["_",{"_holder":["holders"]}],["hr",{}]]);
    }

}
