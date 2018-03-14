'use strict';

window.addEventListener('load', () => {
    const spocky = jsLibs.require('spocky');

    
    spocky.config(($cfg) => {
        $cfg
            
        .base('/')

        .page('home', '')
        .page('subpage.a', 'a')
        .page('subpage.b', 'b')

        .container('site', 'site.Site');
    });


    spocky.package('site', ($app, $pkg) => {

        $pkg.export(
        class Site extends spocky.Module {
            
            constructor()
            {
                this.lSite = new $pkg.layout([
                    [ '$', { _holder: 'content' } ],
                ]);

                this.lSite.$holders.content = 'cos';
                this.lSite.$fields.bla = 'cos';
                this.lSite.$repeats.test.$create(($layout, keys) => {
                    $l.$holders.repeatHolder = '';
                });

                this.lSite.$holder('content', (holder) => {
                    holder.content = new spocky.Layout([
                        [ 'h1', 'Test' ],
                    ]);
                });

                $app.onPage((page) => {
                    if (page.name === 'home')
                        this.$view = new $pkg.Home();
                    else if (page.name === 'subpage.a')
                        this.$view = new $pkg.Subpage();
                    else if (page.name = 'subpage.b')
                        this.$view = new $pkg.Subpage();
                    else
                        throw new Error('Page does not exist.');
                });
            }

        });


        $pkg.export( 
        class Home extends spocky.Module {

            constructor()
            {
                this.$view = $pkg.layout('site.Home');
            }

        });


        $pkg.export( 
        class Subpage extends spocky.Module {

            constructor()
            {
                this.$view = new spocky.Layout([
                    [ 'h1', 'subpage' ],
                ]);
            }

        });

    });


    spocky.layout('site.Home', () => [
        [ 'h1', 'Predefined home.' ],
    ]);


    spocky.layout('site.Subpage', () => [
        [ 'h1', 'Predefined subpage.' ],
    ]);

});