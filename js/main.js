function DevGym() {
    'use strict';
    
    var that = this;
    this.currentView = ko.observable('index');
    this.currentCategory = ko.observable();
    this.exercises = ko.observableArray([]);
    this.currentExcercises = ko.observableArray([]);

    this.setCategory = function(category) {
        that.currentCategory($(that.exercises()).filter(function (index, item) {
            return item.category === category ? item : null;
        })[0]);
        that.currentExcercises.removeAll();
        $.each(that.currentCategory().exercieses.sort(function (e1, e2) { return e1.complexity > e2.complexity }),
            function (index, item) {
                that.currentExcercises.push($.extend(item, { content: ""}));
                $.get('exercises/' + item.id + '.html', function (result) {
                    that.currentExcercises.replace(item, $.extend(item, {content: result}));
                });
            });
    };
    
    this.start = function () {
        $.getJSON('exercises/exercises.json', function (result) {
           that.exercises(result); 
        });
    };
}
