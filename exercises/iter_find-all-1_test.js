(function () {
    return function (findAll) {
        test('findAll()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            deepEqual(findAll('hola', textList), [], "No está en la lista");
            deepEqual(findAll('es', textList), [1], "Uno en la lisa");
            deepEqual(findAll(2, numberList), [0, 3, 5], "Varios en la lista");
        });
    };
})();