'use strict';

class test_Class
{

    get Layout() {
        return require('./Layout');
    }

    get LayoutParser() {
        return require('./LayoutParser');
    }

}
module.exports = new test_Class();