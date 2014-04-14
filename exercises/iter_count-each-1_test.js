(function () {
    return function (countEach1) {
        test('countEach1()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            var numberList = [2, 3, 5, 2, 8, 2, 9];
            deepEqual(countEach1(['hola'], textList), [0], "No está en la lista");
            deepEqual(countEach1(['es'], textList), [1], "Uno en la lisa");
            deepEqual(countEach1([2, 9], numberList), [3, 1], "Varios en la lista");
        });
    };
})();