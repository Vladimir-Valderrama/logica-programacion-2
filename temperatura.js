const prompt = require('prompt-sync')({sigint: true});  // REQUIERE INSTALAR PROMPT SYNC -> npm install prompt-sync EN TERMINAL

function convertirTemperatura() {
    let celsius = prompt("Ingrese la temperatura en grados Celsius: ");

    // Verificar si es un número
    if (isNaN(celsius) || celsius.trim() === '') {
        console.log("Por favor ingrese un valor numérico válido.");
        return convertirTemperatura();  // Volver a solicitar si no es un número válido
    }

    // Convertir a número
    celsius = parseFloat(celsius);

    // Convertir Celsius a Fahrenheit y Kelvin
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    // Mostrar resultados en consola
    console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`);
    console.log(`Temperatura en Kelvin: ${kelvin.toFixed(2)} K`);
}

convertirTemperatura();
