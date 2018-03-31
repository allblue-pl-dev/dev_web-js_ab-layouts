'use strict';

spocky.package('lemonBee', ($app, $pkg) => {

const js0 = $pkg.$import('js0');

$pkg.$export(
class Main extends spocky.Module {

    constructor(system)
    { super();
        js0.args(arguments, $pkg.System);

        let layout = new $pkg.$layouts[this.$name]();
        
        layout.$fields.title = system.title;
        layout.$fields.show = true;
        
        layout.$fields.panels = [
            {
                innerTitle: 'Title 1',
            }, {
                innerTitle: 'Title 2',
            }
        ];

        this.$view = layout;
    }

});


$pkg.$export(
class System
{
    
    constructor()
    {
        this.title = 'Lemon Bee';
        this.panels = [];
    }

    getModule_Main()
    {
        return new $pkg.Main(this);
    }

    getModule_Panel(panelName)
    {
        return new $pkg.Panel(this, panelName);
    }

});


$pkg.$export(
class LogIn extends spocky.Module {

    constructor()
    { super();
        this.$view = new spocky.Layout([ 'Log In' ]);
    }

});


$pkg.$export(
class Panel extends spocky.Module {

    constructor(system, panelName)
    { super();
        this.$view = new $pkg.$layouts[this.$name]();
    }

});

});