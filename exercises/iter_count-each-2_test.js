(function () {
    return function (countEach2) {
        test('countEach2()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            deepEqual(countEach2(['hola'], textList), {'hola': 0}, "No está en la lista");
            deepEqual(countEach2(['es'], textList), {'es': 1}, "Uno en la lisa");
            deepEqual(countEach2([2, 9], numberList), {2: 3, 0: 1}, "Varios en la lista");
        });
    };
})();