function Excercise() {
    this.content = ko.observable();
    this.isTestable = ko.observable(false);
    this.showValidate = ko.observable(false);
    this.validateFunction = null;
    this.source = ko.observable();
}

function extractFunction(functionCode) {
    var fn;
    try {
      fn = eval("(function () { var fn = " + functionCode + "; return fn; })()");  
    } catch (e) {
      fn = undefined;  
    }
    return fn;
}

function testExtractedFunction(name, fn) {
    test('Código fuente', function () {
        equal(typeof fn, 'function', 'Definición de la función');
        equal(fn && fn.name || null, name, 'Nombre de la función');
    });
    return typeof fn === 'function' && fn.name === name;
}

function DevGym() {
    'use strict';
    
    var that = this;
    this.currentView = ko.observable('index');
    this.currentCategory = ko.observable();
    this.exercises = ko.observableArray([]);
    this.currentExcercises = ko.observableArray([]);
    this.currentExercise = ko.observable(null);

    this.setCategory = function(category) {
        that.currentCategory($(that.exercises()).filter(function (index, item) {
            return item.category === category ? item : null;
        })[0]);
        that.currentExcercises.removeAll();
        $.each(that.currentCategory().exercieses.sort(function (e1, e2) { return e1.complexity > e2.complexity }),
            function (index, item) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                that.currentExcercises.push($.extend(item, new Excercise()));
                $.get('exercises/' + item.id + '.html', function (result) {
                    that.currentExcercises()[index].content(result);
                });
                $.get('exercises/' + item.id + '_test.js', function (result) {
                    that.currentExcercises()[index].isTestable(true);
                    that.currentExcercises()[index].validateFunction = eval(result);
                });
            });
    };
    
    this.showValidate_click = function(exercise) {
        that.currentExercise(exercise);
        that.currentView('validate');
        //this.showValidate(!this.showValidate());
    };

    this.validate_click = function() {
        QUnit.init();
        QUnit.start();
        var fn = extractFunction(this.source());
        testExtractedFunction(this.functionName, fn);
        if (fn && fn.name === this.functionName)
            this.validateFunction(fn);
    };
    
    this.start = function () {
        QUnit.config.autostart = false;
        $.getJSON('exercises/exercises.json', function (result) {
           that.exercises(result); 
        });
    };
}
