(function () {
    return function (uppercase) {
        test('findFirst()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            deepEqual(uppercase(['si']), ['SI'], "Lista con un elemento");
            deepEqual(uppercase(textList), ['ESTE', 'ES', 'UN', 'EJEMPLO'], 
                "Lista con varios elementos");
            deepEqual(uppercase([]), [], "Lista vacía");
        });
    };
})();