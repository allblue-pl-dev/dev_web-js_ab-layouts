'use strict';

export default class MagdaSite extends spocky.Layout {

    constructor()
    {
        super([["h1",{},"$magdaText"],["input",{"_elem":["text"],"type":["text"]}],["button",{"_elem":["addArticle"]},"Add"],["hr",{}],["h3",{},"Fields"],["_",{"_repeat":["articles:a"]},["input",{"_elem":["articleTitle"],"type":["text"]}],["input",{"_elem":["articleStyle"],"type":["text"]}],["hr",{}]],["h1",{"style":["background-color: ","$articlesBackground"]},"Articles"],["div",{"_repeat":["articles:a"]},["h1",{"style":["background-color: ","$articlesBackground","; ","$a.styles"]},"Title: ","$a.title"]]]);
    }

}
