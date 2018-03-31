'use strict';

spocky.package('site', ($app, $pkg) => {
    // const abPager = $app.import('ab-pager');
    const js0 = $app.$import('js0');
    const lemonBee = $app.$import('lemonBee');

    $pkg.lb = new lemonBee.System();

    $pkg.$export(
    class Site extends spocky.Module {

        constructor()
        { super();
            this._layout = new $pkg.$layouts[this.constructor.name]();
            let f = this._layout.$fields;
            f.title = 'Panel Title';

            f.repeat1().$push();
            console.log(f.repeat1(0));
            // this._layout.$fields.repeat1(0).repeat2().$push();

            // this._layout.$elems.b1.addEventListener('click', (evt) => {
            //     this._layout.$fields.repeat1().$push();
            // });
            // this._layout.$elems.b2.addEventListener('click', (evt) => {
            //     this._layout.$fields.repeat1(0).repeat2().$push();
            // });

            // this._layout.$holders.lb.$view = $pkg.lb.getModule_Main();

            // this._layout.$fields.repeat1 = [
            //     {
            //         title: '1. Title 1',
            //         repeat2: [
            //             {
            //                 itemTitle2: '2. Title 1',
            //             },
            //         ],
            //     }, {
            //         title: '1. Title 2',
            //         repeat2: [
            //             {
            //                 itemTitle2: '2. Title 2',
            //             },
            //         ],
            //     }
            // ];

            this.$view = this._layout;
        }

    });

});