'use strict';

const 
    FieldDefinitions = require('test').FieldDefinitions
;

let fd = new FieldDefinitions();

fd.var('a', {
    set: (value, keys) => {
        console.log('a', value, keys);
    },
});

fd.var('b.c', {
    set: (value) => {
        console.log('b.c', value);
    },
});

let fdList = fd.list('d', {
    add: (key, keys) => {
        console.log('d', key, keys);
    },
    remove: (key, keys) => {
        console.log('d', key, keys);
    },
});
fdList.var('e', {
    set: (value, keys) => {
        console.log('e', value, keys);
    },
});



let f = fd.createFields().getRoot();

f.a = "Hello";
f.b.c = 'Ups?';
// f.b = {
//     c: "World",
// };

f.d().$add(0);
f.d().$add(1);

f.d(0).e = "Other World!";
f.d(1).e = "Other World!";