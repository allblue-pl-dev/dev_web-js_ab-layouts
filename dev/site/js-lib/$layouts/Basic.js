'use strict';

const
    spocky = require('spocky')
;

export default class Basic extends spocky.Layout {

    constructor()
    {
        super([["h2",{},"Basic"],"$var"," = Var 1",["br",{}],"$obj.var1"," = Object Var 1",["br",{}],"$obj.var2"," = Object Var 2",["br",{}],["br",{}],"Repeat:",["br",{}],["_",{"_repeat":["repeat:r"]},"    - r = ","$r",["br",{}]]]);
    }

}
