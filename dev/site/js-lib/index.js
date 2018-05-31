'use strict';

const 
    abPager = require('ab-pager'),
    js0 = require('js0'),
    // spkLemonBee = require('spkLemonBee'),
    spocky = require('spocky'),

    $layouts = require('./$layouts')
;


spocky.setDebug(true);


export const spk = new spocky.Site();
spk.config(($app, $cfg) => {
    $cfg
        .container('site', Site);
});


export class Tests_Basic extends spocky.Module {

    constructor() {
        super();

        let l = new layouts.Basic();

        l.$fields.var = 'Var 1';
        l.$fields.obj = { var1: 'Object Var 1' };
        l.$fields.obj.var2 = 'Object Var 2';

        /* List */
        /* Add */
        l.$fields.repeat = [
            'Repeat 1 (before)',
            'Repeat 2 (before)',
            'Repeat 3 (deleted)',
        ];
        l.$fields.repeat().$push('Repeat 3 (before)');
        l.$fields.repeat().$add('key', 'Repeat 4 (before)');
        /* Set */
        l.$fields.repeat(1, 'Repeat 2 (after)');
        l.$fields.repeat('key', 'Repeat 4 (after)');        
        /* Remove */
        l.$fields.repeat().$delete(2);        

        this.$view = l;
    }

}

export class Tests_Eval extends spocky.Module {

    constructor() {
        super();

        // let l = new $layouts.Eval();
        let l = new spocky.Layout([
            [ 'h1', 'There:', '$var' ],
            [ 'h1', 'Here:', '$test("My Name")' ],
        ]);

        console.log(l.$fields);

        l.$fields.test = () => {
            return "Hello World From Function";
        }

        this.$view = l;
    }

}

export class Tests_Holders extends spocky.Module {

    constructor() {
        super();

        // let m1 = new spocky.Module();

        let l1 = new spocky.Layout([
            [ 'h3', '1 => '],
            [ '$', { _holder: 'test1' }, '$test1' ],
        ]);
        let l2 = new spocky.Layout([
            [ 'h3', '2 => ' ],
            // [ '$', { _holder: 'test2' } ],
        ]);
        // l1.$view = l1;

        l1.$holders.test1.$view = l2;

        this.$view = l1;
    }

}

export class Tests_Magda extends spocky.Module {

    constructor(nr) {
        super();

        let l = new layouts.Magda();

        l.$fields.nr = nr;
        l.$holders.spock.$view = new Tests_Spock();
        if (nr > 0)
            l.$holders.magda.$view = new Tests_Magda(nr - 1);

        this.$view = l;
    }

}

export class Tests_Spock extends spocky.Module {

    constructor() {
        super();

        let l = new spocky.Layout([
            [ 'h1', 'Spock' ],
        ]);

        this.$view = l;
    }

}

export class Tests_Repeats1 extends spocky.Module {

    constructor() {
        super();

        let l = new $layouts.Repeats1();

        l.$fields.varBefore = 'Var Before';
        l.$fields.repeat1 = [
            {
                test: 'a',
            }, {
                test: 'b',
            }, {
                test: 'c',
            },
        ];
        l.$fields.varAfter = 'Var After';

        this.$view = l;
    }
}

export class Tests_Repeats2 extends spocky.Module {

    constructor() {
        super();

        let l = new $layouts.Repeats2();

        // l.$fields.repeat3 = [
        //     { test: 'before' },
        // ];

        // l.$fields.varBefore = 'Var Before';
        console.log(l.$fields);
        l.$fields.repeat1 = [
            [],
        ],
        l.$fields.repeat1 = [
            [
                { test: 'brefore a1' },
            ], [
                { test: 'before a2' }, { test: 'before a3' },
            ],
        ];
        // console.log(l.$fields.repeat1(0)().$size, l.$fields.repeat1(1)().$size);
        l.$fields.repeat1(0)().$push({ test: 'after d' });
        // l.$fields.varAfter = 'Var After';

        // l.$fields.repeat3().$push({ test: 'after' });

        this.$view = l;
    }

}

export class Site extends spocky.Module {

    constructor() {
        super();

        let l = new $layouts.Tests();

        // l.$holders.basic.$view = new Tests_Basic();
        // l.$holders.repeats1.$view = new Tests_Repeats1();
        // l.$holders.repeats2.$view = new Tests_Repeats2();
        // l.$holders.eval.$view = new Tests_Eval();

        l.$holders.holders.$view = new Tests_Holders();

        this.$view = l;

        // this.$view = new Tests_Magda(5);
    }

}