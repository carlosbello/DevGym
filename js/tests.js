requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        tests: "../tests",
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


require(['tests/test-main'], function (testMain) {
    'use strict';
    
    QUnit.init();
    QUnit.start();
    
    testMain.run();
});