'use strict';

const
    fs = require('fs'),

    abXmlParser = require('ab-xml-parser')
;


function addNode(parentLayoutNode, node)
{
    if (node.type === 'text') {
        let lTextsArr = parseContent(node.value);
        // console.log(lTextsArr);
        for (let lText of lTextsArr)
            parentLayoutNode.push(lText);
        return;
    } else if (node.type === 'comment') {
        /* To Do */ 
        return;
    } else if (node.type === 'element') {
        let lNode = [ node.name, node.attribs ];
        parentLayoutNode.push(lNode);

        for (let childNode of node.children)
            addNode(lNode, childNode);
    }
}

function parseContent(content)
{
    let lTextsArr = [];

    let r = /\$[a-zA-Z]+/g;
    let offset = 0;
    while(true) {
        let match = r.exec(content);
        if (match === null)
            break;

        let text = content.substring(offset, match.index);
        if (text !== '')
            lTextsArr.push(text);

        lTextsArr.push(match[0]);
        offset = match.index + match[0].length;
    }

    let text = content.substring(offset);
    if (text !== '')
        lTextsArr.push(text);

    return lTextsArr;
}


let content = fs.readFileSync('../dev/spk/layouts/site.Test.html');
let d = new abXmlParser.Document(content.toString());

let lc = [];
for (let node of d.nodes)
    addNode(lc, node);

console.log(lc);