'use strict';

module.exports = {
    'sass': {
        paths: [
            '../dev/git/css_magda-styles/scss',
            '../dev/node_modules/ab-bootstrap/scss', 
            '../dev/node_modules/spk-lemon-bee/sass'

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
            'ab-fields':        '../dev/node_modules/ab-fields/js-lib',
            'ab-layouts':       '../dev/node_modules/ab-layouts/js-lib',
            'ab-nodes':         '../dev/node_modules/ab-nodes/js-lib',
            'ab-pager':         '../dev/node_modules/ab-pager/js-lib',
            'js0':              '../dev/node_modules/js0/js-lib',
            'spocky':           '../dev/node_modules/spocky/js-lib',

            // 'test':         '../dev/test'
        },
    },

    'spocky': {
        path: '../dev/node_modules/spocky',
        packages: [
            '../dev/site',
            // '../dev/node_modules/spk-lemon-bee'
        ],
    },
};