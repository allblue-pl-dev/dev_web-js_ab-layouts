'use strict';

export default class Site2 extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Site"],"Buttons:",["br",{}],["button",{"_elem":["addR1"]},"Add R1"],["button",{"_elem":["removeR1"]},"Remove R1"],["br",{}],["button",{"_elem":["addR2"]},"Add R2"],["button",{"_elem":["removeR2"]},"Remove R2"],["br",{}],["button",{"_elem":["showRepeat2"]},"Show R2"],["button",{"_elem":["hideRepeat2"]},"Hide R2"],["br",{}],["h3",{},"Title"],["input",{"_elem":["title"],"type":["text"]}],["h3",{},"Subtitles 1"],["_",{"_repeat":["repeat1:r1"]},["input",{"_elem":["subtitle1"],"type":["text"]}],["br",{}]],["hr",{}],["h3",{},"Subtitles 2"],["_",{"_repeat":["repeat2:r2"]},["input",{"_elem":["subtitle2"],"type":["text"]}],["br",{}]],["hr",{}],["h1",{},"Test: ","$title"],["div",{"_repeat":["repeat1:r1"]},["h3",{},"1. ","$title",": ","$r1.subtitle"],["_",{"_repeat":["repeat2:r2"],"_show":["showRepeat2"]},["h4",{},"2. ","$title",": ","$r2.subtitle"]]],["hr",{}],["div",{"_repeat":["repeat2:r2"]},["h2",{},"R2 Test"]]]);
    }

}
