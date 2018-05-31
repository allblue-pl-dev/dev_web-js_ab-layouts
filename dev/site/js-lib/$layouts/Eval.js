'use strict';

const
    spocky = require('spocky')
;

export default class Eval extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"Eval"],"Regular: ","$var",["br",{}],"Text: ","$test('My Name')",".",["br",{}]]);
    }

}
