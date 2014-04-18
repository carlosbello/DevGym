define(['qunit', 'app/main'], function (q, main) {
    function run() {
        module('main.js');
        test('extractFunction()', function() {
            var extractFunction = main.extractFunction;
            var correctFunctionCode = 'function test(a, b) {}';
            var incorrectFunctionCode = 'func test() {}';
            var externalSupportFunction = 
                    'function test(a) { return support(a); }\n' +
                    'function support(b) { return b + 1 }';
            var innerSupportFunction = 
                    'function test(a) { \n' +
                    '    function support(b) { return b + 1; } \n' +
                    '    return support(a); \n' + 
                    '}';
            var nonStrictCode = 'function () { a = 1; return a; }';

            equal(typeof extractFunction(correctFunctionCode), 'function',
                'Nombre y código correctos');
            notEqual(extractFunction(correctFunctionCode).name, 'prueba',
                'Nombre incorrecto');
            equal(typeof extractFunction(incorrectFunctionCode), 'undefined',
                'Código incorrecto');
            equal(extractFunction(correctFunctionCode).length, 2,
                'Parámetros');
            equal(extractFunction(externalSupportFunction).name, 'test',
                'Dos funciones secuenciales: función esperada y una de soporte');
            equal(extractFunction(externalSupportFunction)(2), 3,
                'Llamada a función de soporte externa');
            equal(extractFunction(innerSupportFunction)(2), 3,
                'Llamada a función de soporte interna');
            equal(typeof extractFunction(nonStrictCode), 'function',
                'Permitir uso de variables no declaradas');    
        });
    }
    
    return {
        run: run
    };
});