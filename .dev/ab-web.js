'use strict';

module.exports = {
    'sass': {
        paths: [
            '../dev/node_modules/ab-bootstrap/scss', 

            // '../esite/packages/site/Web/scss/test.scss',
        ],
    },

    'js': {
        paths: [
            '../dev/node_modules/jquery/dist/jquery.js',
            '../dev/node_modules/popper.js/dist/umd/popper.js',
            '../dev/node_modules/bootstrap/dist/js/bootstrap.js',

            // '../js/fields.js',
            // '../js/init.js'
        ],
    },

    'js-libs': {
        path: '../dev/node_modules/js-libs/js/js-libs.js',
        build: {
            dev: '../tmp/js-libs',
            rel: '../tmp/js-libs/js-libs.min.js'
        },
        libs: {
            'ab-fields':    '../dev/node_modules/ab-fields',
            'ab-layouts':   '../dev/node_modules/ab-layouts',
            'ab-nodes':     '../dev/node_modules/ab-nodes',
            'js0':          '../dev/node_modules/js0',
            'spocky':       '../dev/node_modules/spocky',

            'test':         '../dev/test'
        },
    },

    'spocky': {
        path: '../dev/node_modules/spocky',
        packages: [
            '../dev/spk',
            '../dev/lemon-bee/spk',
        ],
    },
};