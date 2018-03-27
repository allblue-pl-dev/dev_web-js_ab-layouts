'use strict';

spocky.package('site', ($app, $pkg) => {
    const abPager = $pkg.import('ab-pager');
    const js0 = $pkg.import('js0');

    Object.defineProperty($pkg, 'layouts', {
        value: {
            Site: class SiteLayout extends spocky.Layout {
                constructor() {
                    super([
                        [ 'h1', 'Hello World!' ],
                    ]);
                }
            },
        }
    });

    $pkg.export(
    class Site extends spocky.Module {

        constructor()
        { super();
            this.l1 = new spocky.Layout([
                [ 'h1', 'Hello World 1' ],
            ]);
            this.l2 = new spocky.Layout([
                [ 'h1', 'Hello World 2' ],
            ]);

            this.a();

            this.$view = null;
        }

        a()
        {
            setTimeout(() => {
                this.$view = this.l1;
                this.b();
            }, 100);
        }

        b()
        {
            setTimeout(() => {
                this.$view = this.l2;
                this.a();
            }, 100);
        }

    });

});