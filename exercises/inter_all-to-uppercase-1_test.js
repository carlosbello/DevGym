(function () {
    return function (uppercase) {
        test('findFirst()', function() {
            var textList = ['Este', 'es', 'un', 'ejemplo'];
            deppEqual(uppercase(['si']), ['SI'], "Lista con un elemento");
            deppEqual(uppercase(textList), ['ESTE', 'ES', 'UN', 'EJEMPLO'], 
                "Lista con varios elementos");
            deppEqual(uppercase([]), [], "Lista vacía");
        });
    };
})();