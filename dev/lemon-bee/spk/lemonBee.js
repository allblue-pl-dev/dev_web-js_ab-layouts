'use strict';

spocky.package('lemonBee', ($pkg) => {
    
$pkg.export(
class Main extends spocky.Module {

    constructor()
    {
        this.$view =  new spocky.Layout([ 'Main' ]); // new $pkg.$layouts.Main();
    }

});


$pkg.export(
class LogIn extends spocky.Module {

    constructor()
    {
        this.$view =  new spocky.Layout([ 'Log In' ]);
    }

});



});