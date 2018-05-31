'use strict';

const
    spocky = require('spocky')
;

export default class Repeats2 extends spocky.Layout {

    constructor()
    {
        super([["h2",{},"Repeats 2"],["br",{}],"Repeat 1:",["br",{}],["_",{"_repeat":["repeat1:r1"]},["b",{},"New:"],["br",{}]," -",["b",{},"Repeat 2:"],["br",{}],["_",{"_repeat":["r1:r2"]},"   - r2 = ","$r2.test",["br",{}]]]]);
    }

}
