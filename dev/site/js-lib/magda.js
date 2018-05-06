'use strict';

spocky.package('magda', ($app, $pkg) => {
    const js0 = $app.$import('js0');

    let text = 'Hello Spock!';

    $pkg.$export(
    class Site extends spocky.Module {
        
        constructor()
        { super();
            let l = new $pkg.$layouts.Site();

            l.$fields.magdaText = 'Hello Spock!';
            l.$fields.articlesBackground = 'yellow';

            l.$elems.text.addEventListener('input', (evt) => {
                l.$fields.articlesBackground = l.$elems.text.value;
            });

            l.$elems.addArticle.addEventListener('click', (evt) => {
                l.$fields.articles().$push();
            });

            l.$elems.articleTitle((elem, keys) => {
                elem.addEventListener('input', (evt) => {
                    l.$fields.articles(keys[0]).title = elem.value;
                });
            });
            l.$elems.articleStyle((elem, keys) => {
                elem.addEventListener('input', (evt) => {
                    l.$fields.articles(keys[0]).styles = elem.value;
                });
            });

            this.$view = l;
        }

    });
});