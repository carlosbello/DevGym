(function () {
    return function (countAll) {
        test('countAll()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            equal(countAll(['hola'], textList), 0, "No está en la lista");
            equal(countAll(['es'], textList), 1, "Uno en la lista");
            equal(countAll([2, 9], numberList), 4, "Varios en la lista");
        });
    };
})();