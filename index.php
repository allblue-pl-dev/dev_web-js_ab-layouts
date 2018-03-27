<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <link href="<?php echo $_images['favicon']; ?>" rel="shortcut icon" type="image/vnd.microsoft.icon" />
    <link rel="apple-touch-icon" href="<?php echo $_images['appleTouchIcon']; ?>" /> -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php require(__DIR__ . '/cache/abWeb/header.html'); ?>

    <script type="text/javascript">
        window.addEventListener('load', () => { spocky.init(true) });

        // const 
        //     abLayouts = jsLibs.require('ab-layouts')
        //     abNodes = jsLibs.require('ab-nodes');

        //     site = jsLibs.require('site');
        // ;

            
        // let parser = new abLayouts.Parser();
        // let layoutNode = parser.parse([
        //     [ 'h1', 'Hello World', ],
        //     [ 'button', { _elem: 'button1', }, 'Button 1'],
        //     [ 'h2', { _show: 'showTest' }, `I'm here!` ],
        //     [ 'button', { _elem: 'button2' }, 'Button 2'],
        //     [ 'br' ],
        //     'Hello World:',
        //     [ 'ul:', [
        //         [ '_repeat', { _repeat: 'repeat1' }, [
        //             [ 'button', { _elem: 'button3' } ],
        //             [ 'li', { _show: 'repeatShow' } ],
        //             [ 'li', '$field1' ],
        //             [ 'li', '$field2a', ' [and] ', '$field2b' } ],
        //         ],
        //     ]],
        // ]);

        // layout.$repeat('repeat1').size = 2;
        // layout.$fields('field1').set('Hello World');   
        // layout.$fields = {
        //     0: {
        //         field1: 'Hello World!',
        //     }, 
        //     1: {
        //         field1: 'Goodbye World',
        //     },
        // };

        // layout.$elem('button1', (elem, keys) => {
        //     elem.addEventListener('click', (evt) => {
        //         evt.preventDefault();
        //         layout.$show('showTest').set(!layout.$show('showTest').get());
        //     });
        // });

        // layout.$elem('button2', (elem, keys) => {
        //     elem.addEventListener('click', (evt) => {
        //         evt.preventDefault();
        //         console.log('Button 1: ', keys);
        //     });
        // });

        // layout.$elem('button3', (elem, keys) => {
        //     let show = layout.$show('repeatShow', keys);
        //     show.set(!show.get());
        // });

        // window.addEventListener('load', () => {
        //     rootNode.activate();
        // });
    </script>
</head>
<body id="site">
    <h1>Alternative Header</h1>
    <p>Some awesome alternative text.</p>
</body>
</html>
