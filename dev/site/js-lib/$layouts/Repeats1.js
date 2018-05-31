'use strict';

const
    spocky = require('spocky')
;

export default class Repeats1 extends spocky.Layout {

    constructor()
    {
        super([["h2",{},"Repeats 1"],"Vars:",["br",{}],"- Var Before: ","$varBefore",["br",{}],"- Var After: ","$varAfter",["br",{}],["br",{}],"Repeat:",["br",{}],["_",{"_repeat":["repeat1:r1"]},["b",{},"New:"],["br",{}]," - Var Before = ","$varBefore",["br",{}]," - Var After = ","$varAfter",["br",{}]," - r1 = ","$r1.test",["br",{}]]]);
    }

}
