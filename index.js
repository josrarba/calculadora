// Obtiene el elemento con el id 'resultado' del DOM (Document Object Model)
// y lo asigna a la variable 'resultado'. Este elemento es el campo de texto
// donde se mostrarán los números y resultados de la calculadora.
let resultado = document.getElementById('resultado');

// Función que se llama cuando se hace clic en un botón de número
// o de operación. Toma un parámetro 'num', que es el número o símbolo
// que se desea agregar al campo de texto.
function agregarNumero(num) {
    // Agrega el número o símbolo al final del valor actual del campo de texto.
    // 'resultado.value' representa el contenido del campo de texto.
    resultado.value += num;
}

// Función que se llama cuando se hace clic en el botón de limpiar ('C').
// Esta función borra el contenido del campo de texto.
function limpiar() {
    // Establece el valor del campo de texto a una cadena vacía, eliminando
    // cualquier número u operación que se haya ingresado.
    resultado.value = '';
}

// Función que se llama cuando se hace clic en el botón de igual ('=').
// Esta función evalúa la expresión matemática ingresada en el campo de texto.
function calcular() {
    try {
        // Utiliza la función eval() para calcular el resultado de la expresión
        // que está en 'resultado.value'. Evalúa la cadena como una expresión
        // matemática y asigna el resultado al campo de texto.
        resultado.value = eval(resultado.value);
    } catch (error) {
        // Si ocurre un error durante la evaluación (por ejemplo, si la expresión
        // es inválida), se captura el error y se muestra 'Error' en el campo de texto.
        resultado.value = 'Error';
    }
}