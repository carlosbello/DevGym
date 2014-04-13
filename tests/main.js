module('main.js', {
    setup: function () {
        
    }
});

test('extractFunction()', function() {
    var correctFunctionCode = 'function prueba(a, b) {}';
    var incorrectFunctionCode = 'func prueba() {}';
    
    equal(typeof extractFunction(correctFunctionCode), 'function', 
        'Nombre y código correctos');
    notEqual(extractFunction(correctFunctionCode).name, 'test', 
        'Nombre incorrecto');
    equal(typeof extractFunction(incorrectFunctionCode), 'undefined',
        'Código incorrecto');
    equal(extractFunction(correctFunctionCode).length, 2,
        'Parámetros')
});