'use strict';

const
    site = require('.')
;


site.spk.config(($cfg) => {
    $cfg
        .container('site', site.Site);
});