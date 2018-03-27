'use strict';

const
    abFields = require('ab-fields'),
    abLayouts = require('ab-layouts'),
    abNodes = require('ab-nodes')
;

class LayoutParser extends abLayouts.Parser
{

    constructor()
    {
        super();
    }

    getElems()
    {
        return this._elems;
    }

    getFields()
    {
        return this._fieldDefs.createFields().getRoot();
    }

    getHolders()
    {
        return this._holders;
    }


    _createContentElement(nodeInfo, elementsStack)
    {
        let node = this._createTextNode(nodeInfo.content, elementsStack);

        return new abLayouts.Parser.Element(node, node, null);
    }

    _createElement(nodeInfo, elementsStack)
    {
        let element = new abLayouts.Parser.Element(null, null, {});

        this._createElement_AddShow(nodeInfo, elementsStack, element);
        this._createElement_AddRepeat(nodeInfo, elementsStack, element);
        let tElementsStack = elementsStack.concat([ element ]);
        this._createElement_AddSingle(nodeInfo, tElementsStack, element);
        this._createElement_AddHolder(nodeInfo, tElementsStack, element);
        this._createElement_ParseElem(nodeInfo, tElementsStack, element);

        return element;
    }

    _createElement_AddHolder(nodeInfo, elementsStack, element)
    {
        if (!('_holder' in nodeInfo.attribs))
            return;

        let node = new abLayouts.LayoutNode();
        this._createElement_UpdateElement(element, node);
        
        Object.defineProperty(this._holders, nodeInfo.attribs._holder, {
            get: () => {
                return node;
            }
        });
    }

    _createElement_AddRepeat(nodeInfo, elementsStack, element)
    {
        if (!('_repeat' in nodeInfo.attribs))
            return;

        let node = new abNodes.RepeatNode();
        this._createElement_UpdateElement(element, node);
        element.info.repeatNode = node;

        let fd = this._getFieldDefs(elementsStack);
         element.info.fieldDefs = fd.list(nodeInfo.attribs._repeat[0], {
            add: (key, keys) => {
                let nodeInstance = this._getNodeInstance(elementsStack, node, keys);
                nodeInstance.add(key)
            },
            remove: (key, keys) => {
                let nodeInstance = this._getNodeInstance(elementsStack, node, keys);
                nodeInstance.remove(key);
            },
        });

        // if ('_id' in nodeInfo.attribs)
        //     this._nodes.set(`${nodeInfo.attribs._id}.single`, node);
    }

    _createElement_AddShow(nodeInfo, elementsStack, element)
    {
        return;
    }

    _createElement_AddSingle(nodeInfo, elementsStack, element)
    {
        if (nodeInfo.type === '$')
            return;

        let node = new abNodes.SingleNode(nodeInfo.type);
        this._createElement_UpdateElement(element, node);

        // if ('_id' in nodeInfo.attribs)
        //     this._nodes.set(`${nodeInfo.attribs._id}.single`, node);
    }

    _createElement_ParseElem(nodeInfo, elementsStack, element)
    {
        if (!('_elem' in nodeInfo.attribs))
            return;

        let node = element.bottomNode;

        if (this._isVirtual(elementsStack)) {
            element.info.onCreateFn = null;
            
            node.pCopyable.onCreate((node) => {
                if (element.info.onCreateFn !== null)
                    element.info.onCreateFn(node.htmlElement, node.pCopyable.getInstanceKeys());
            });

            Object.defineProperty(this._elems, nodeInfo.attribs._elem, {
                get: () => {
                    return (onCreateFn) => {
                        element.info.onCreateFn = onCreateFn;
                    };
                }
            });
        } else {
            Object.defineProperty(this._elems, nodeInfo.attribs._elem, {
                get: () => {
                    return node.htmlElement;
                }
            });
        }
    }

    _createElement_UpdateElement(element, new_bottom_node)
    {
        if (element.topNode === null)
            element.topNode = new_bottom_node;
        if (element.bottomNode !== null)
            element.bottomNode.pChildren.add(new_bottom_node);
        element.bottomNode = new_bottom_node;
    }

    _createTextNode(nodeContent, elementsStack)
    {
        let node = null;

        if (nodeContent[0] === '$') {
            node = new abNodes.TextNode('');

            let fd = this._getFieldDefs(elementsStack);
            fd.var(nodeContent.substring(1), {
                set: (value, keys) => {
                    let nodeInstance = this._getNodeInstance(elementsStack, node, keys);
                    nodeInstance.text = value;
                },
            });
        } else
            node = new abNodes.TextNode(nodeContent);

        return node;
    }

    _getFieldDefs(elementsStack)
    {
        let fd = this._fieldDefs;
        for (let i = 0; i < elementsStack.length; i++) {
            let element = elementsStack[i];

            if ('fieldDefs' in element.info)
                fd = element.info.fieldDefs;
        }

        return fd;
    }

    _getNodeInstance(elementsStack, node, keys)
    {
        if (keys.length === 0)
            return node;

        return node.pCopyable.getNodeCopies(keys)[0];

        // let repeatNode = null;
        // let keysIndex = 0;
        // for (let i = 0; i < elementsStack.length; i++) {
        //     let element = elementsStack[i];
        //     if ('repeatNode' in element.info) {
        //         if (repeatNode === null)
        //             repeatNode = element.info.repeatNode;
        //         else {
        //             repeatNode = repeatNode.getInstanceNodeCopies(
        //                     element.info.repeatNode, keys[i])[0];
        //             keysIndex++;
        //         }

        //         if (keysIndex === keys.length - 1) {
        //             console.log('hm', repeatNode, node);
        //             console.log('jej', repeatNode.getInstanceNodeCopies(node, 
        //                     keys[keysIndex]).length);
        //             return repeatNode.getInstanceNodeCopies(node, keys[keysIndex])[0];
        //         }
        //     }
        // }

        // return null;
    }

    _isVirtual(elementsStack)
    {
        for (let i = 0; i < elementsStack.length; i++) {
            if ('repeatNode' in elementsStack[i].info)
                return true;
        }

        return false;
    }


    /* abLayouts.Parser Overrides */
    __createElement(nodeInfo, elementsStack)
    {
        if (nodeInfo.type === '_content')
            return this._createContentElement(nodeInfo, elementsStack);
        else
            return this._createElement(nodeInfo, elementsStack);
    }

    __onParse()
    {
        this._fieldDefs = new abFields.FieldDefinitions();
        this._hideDefs = new abFields.FieldDefinitions();
        this._showDefs = new abFields.FieldDefinitions();

        this._elems = {};

        this._holders = new abFields.FieldDefinitions();
    }
    /* abLayouts.Parser Overrides */

}
module.exports = LayoutParser;