(function () {
    return function (findFirst) {
        test('findFirst()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            equal(findFirst('hola', textList), -1, "No está en la lista");
            equal(findFirst('un', textList), 2, "Uno en la lista");
            equal(findFirst(3, numberList), 1, "Varias apariciones en la lista");
        });
    };
})();