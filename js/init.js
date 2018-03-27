'use strict';

window.addEventListener('load', () => {
    const abNodes = jsLibs.require('ab-nodes');
    const test = jsLibs.require('test');

    let parser = new test.LayoutParser();
    let layoutNode = parser.parse([
        [ 'h3', 'Basic Fields:' ],
        'htmlField: ', [ 'b', { _field: 'htmlElementField' } ], [ 'br' ],
        'textField: ', '$textField', [ 'br' ],
        // 'virtualFields: ', [ '$', { _field: 'virtualField' }, '' ],
        // 'attrField: ', [ 'span', { style: [ '$attr' ], }, 'attrField' ], [ 'br' ],
        // [ 'br' ], [ 'br' ],

        [ 'button', { _elem: 'button1' }, 'Outer' ], [ 'br' ],
        [ 'h3', 'Basic Repeat:' ],
        [ 'div', { _repeat: 'htmlRepeat' },    
            // 'text', [ 'br' ],
            'repeatField: ', '$repeatField', [ 'br' ],
            [ 'button', { _elem: 'button2' }, 'Inner' ], [ 'br' ],
            [ 'h4', 'Inner Repeat' ],
            [ 'span', { _repeat: 'innerRepeat' },
                // 'Hello!', [ 'br' ],
                'innerRepeatField: ', '$innerRepeatField', [ 'br' ],
            ],
            '#', [ 'br' ],    
        ],

        [ 'h3', 'Holders' ],

        [ 'div', { _holder: 'testHolder' } ],


        // 'htmlElementHolder: ', [ 'span', { _holder: 'htmlElementHolder', style: 'background-color: red' }, ], [ 'br' ],
        // // 'virtualHolder: ', [ '$', { _holder: 'htmlElementHolder' }, ], [ 'br' ],

        // [ 'ul', 
        //     [ 'li', 'First item.' ],
        //     [ 'li', { _repeat: 'repeat1' } ,
        //         'Repeat A: ', '$repeatField.a', [ 'br' ],
        //         [ 'button', { _elem: 'button2' }, 'Add inner repeat' ], [ 'br' ],
        //         // 'Inner repeat: ', [ '$', { _repeat: 'repeat2' }, '$innerRepeatField.b' ],
        //     ],
        //     [ 'li', 'Last item.' ],
        // ],
    ]);
    let e = parser.getElems();
    let f = parser.getFields();
    let h = parser.getHolders();

    /* Child */
    let childLayoutNode = parser.parse([
        'Hello Parent!', [ 'br' ],
        `It's me!`,
    ]);

    // let nodes = p.getNodes();
    let rootNode = new abNodes.RootNode(document.getElementById('site'));    
    rootNode.pChildren.add(layoutNode);
    rootNode.activate();

    /* Tests */
    /* Elems */
    e.button1.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('Click');
    });

    e.button2((elem, keys) => {
        elem.addEventListener('click', (evt) => {
            evt.preventDefault();
            console.log(keys);
        });
    });

    /* Fields */
    f.htmlField = 'htmlField';
    f.textField = 'textField';
    f.attrField = 'background-color: green;';

    f.htmlRepeat().$add(0);
    f.htmlRepeat().$add(1);
    f.htmlRepeat().$add(2);
    f.htmlRepeat(0).repeatField = 'This';
    f.htmlRepeat(1).repeatField = 'is';
    f.htmlRepeat(2).repeatField = 'the Spock!';

    f.htmlRepeat(0).innerRepeat().$add(0);
    f.htmlRepeat(0).innerRepeat().$add(1);
    f.htmlRepeat(0).innerRepeat().$add(2);
    f.htmlRepeat(0).innerRepeat(0).innerRepeatField = 'Magda';
    f.htmlRepeat(0).innerRepeat(1).innerRepeatField = 'ma';
    f.htmlRepeat(0).innerRepeat(2).innerRepeatField = 'psa';

    f.htmlRepeat(1).innerRepeat().$add(0);
    f.htmlRepeat(1).innerRepeat(0).innerRepeatField = 'Rupert';

    /* Holders */
    h.testHolder.pChildren.add(childLayoutNode);
    childLayoutNode.activate();

    r.htmlRepeat().add(0);
    r.htmlRepeat(0).innerRepeat.add(0);
    f.htmlRepeat(0).innerRepeat.push();
    h.htmlRepeat(0).testHolder = ;
    h.testHolder((holder, keys) => {
        holder.add();
    });
    // const spocky = jsLibs.require('spocky');

    
    // spocky.config(($cfg) => {
    //     $cfg
            
    //     .base('/')

    //     .page('home', '')
    //     .page('subpage.a', 'a')
    //     .page('subpage.b', 'b')

    //     .container('site', 'site.Site');
    // });


    // spocky.package('site', ($app, $pkg) => {

    //     $pkg.export(
    //     class Site extends spocky.Module {
            
    //         constructor()
    //         {
    //             this.lTest = $pkg.layout('site.Test');

    //             this.lTest.$fields.repeat1 = new Map([
    //                 [ 0, {
    //                     repeatField: {
    //                         a: 'A 0',
    //                     },
    //                     repeat2: [
    //                         {
    //                             innerRepeatField: {
    //                                 b: 'inner B 0',
    //                             },
    //                         }, {
    //                             innerRepeatField: {
    //                                 b: 'inner B 1',
    //                             },
    //                         }
    //                     ],
    //                 }],
    //             ]);

    //             this.lTest.button1.addEventListener('click', (evt) => {
    //                 evt.preventDefault();
    //                 this.lTest.repeat1().push({
    //                     repeatField: {
    //                         a: 'A ' + this.lTest.repeat1().$length,
    //                     },
    //                     repeat2: [],
    //                 });
    //             });
    //             this.lTest.button2(elem, (keys) => {
    //                 elem.addEventListener('click', (evt) => {
    //                     evt.preventDefault();

    //                     let r = this.lTest.repeat1(keys[0]).repeat2();
    //                     r.$push({
    //                         innerRepeatField: {
    //                             b: 'inner B ' + r.$length,
    //                         },
    //                     });
    //                 });
    //             });

    //             // this.lSite = new $pkg.layout([
    //             //     [ '$', { _holder: 'content' } ],
    //             // ]);

    //             // this.lSite.$holder.content()

    //             // this.lSite.$holder('content', (holder) => {
    //             //     holder.content = new spocky.Layout([
    //             //         [ 'h1', 'Test' ],
    //             //     ]);
    //             // });

    //             // $app.onPage((page) => {
    //             //     if (page.name === 'home')
    //             //         this.$view = new $pkg.Home();
    //             //     else if (page.name === 'subpage.a')
    //             //         this.$view = new $pkg.Subpage();
    //             //     else if (page.name = 'subpage.b')
    //             //         this.$view = new $pkg.Subpage();
    //             //     else
    //             //         throw new Error('Page does not exist.');
    //             // });
    //         }

    //     });


    //     $pkg.export( 
    //     class Home extends spocky.Module {

    //         constructor()
    //         {
    //             this.$view = $pkg.layout('site.Home');
    //         }

    //     });


    //     $pkg.export( 
    //     class Subpage extends spocky.Module {

    //         constructor()
    //         {
    //             this.$view = new spocky.Layout([
    //                 [ 'h1', 'subpage' ],
    //             ]);
    //         }

    //     });

    // });


    // spocky.layout('site.Home', () => [
    //     [ 'h1', 'Predefined home.' ],
    // ]);


    // spocky.layout('site.Subpage', () => [
    //     [ 'h1', 'Predefined subpage.' ],
    // ]);

});