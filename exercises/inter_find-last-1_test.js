(function () {
    return function (findLast) {
        test('findLast()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            equal(findLast('hola', textList), -1, "No está en la lista");
            equal(findLast('un', textList), 2, "Uno en la lista");
            equal(findLast(2, numberList), 5, "Varios en la lista");
        });
    };
})();