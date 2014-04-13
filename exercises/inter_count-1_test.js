(function () {
    return function (count) {
        test('count()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            equal(count('hola', textList), 0, "No está en la lista");
            equal(count('es', textList), 1, "Uno en la lista");
            equal(count(2, numberList), 3, "Varios en la lista");
        });
    };
})();