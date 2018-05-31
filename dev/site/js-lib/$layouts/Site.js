'use strict';

const
    spocky = require('spocky')
;

export default class Site extends spocky.Layout {

    constructor()
    {
        super(["Var Type: ","$varType",["br",{}],"Object Type: ","$objType.var2",["br",{}],"Repeat:",["br",{}],["_",{"_repeat":["test.repeat1:r1"]}," - ","$varType",["br",{}]," - r1: ","$r1.title",["br",{}],["_",{"_repeat":["r1.repeat2:r2"]},"   - ","$varType",["br",{}],"   - r2: ","$r2",["br",{}]]," - ","$r1.r2",["br",{}],"- Here",["br",{}],["_",{"_repeat":["repeat3:r3"]},"   - r3: ","$r3",["br",{}]]],"Test: ","$r1"]);
    }

}
