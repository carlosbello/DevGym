requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-1.11.0',
        bootstrap: 'bootstrap-3.1.1',
        knockout: 'knockout-3.1.0',
        ace: '//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace',
        qunit: '//code.jquery.com/qunit/qunit-1.14.0'
    },
    shim: {
        bootstrap: ['jquery'],
        knockout: ['jquery'],
        ace: ['jquery'],
        qunit: ['jquery']
    }
});

require(['app/main', 'knockout', 'bootstrap'], function (main, ko, bs) {
    'use strict';
    
    // Iniciarlizar Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-33534999-2', 'carlosbello.org');
    ga('send', 'pageview');
    
    // Inicializar app
    var vm = new main.DevGym();
    vm.start();
    ko.applyBindings(vm);
    window.vm = vm;
});