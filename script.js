let contador = 0;

// Elementos del DOM
const contadorDisplay = document.getElementById('contador');
const btnClick = document.getElementById('btn-click');
const btnReset = document.getElementById('btn-reset');
const fechaElement = document.getElementById('fecha');

// Función para actualizar contador
function actualizarContador() {
    contador++;
    contadorDisplay.textContent = contador;

    // Animación simple
    contadorDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        contadorDisplay.style.transform = 'scale(1)';
    }, 200);
}

// Función para resetear contador
function resetearContador() {
    contador = 0;
    contadorDisplay.textContent = contador;
}

// Event Listeners
btnClick.addEventListener('click', actualizarContador);
btnReset.addEventListener('click', resetearContador);

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    const ahora = new Date();
    fechaElement.textContent = ahora.toLocaleString('es-CO');
});

// Función para simular cambio de entorno
function cambiarEntorno(nuevoEntorno) {
    document.getElementById('entorno').textContent = nuevoEntorno;

    // Cambiar color según entorno
    const statusCard = document.querySelector('.status-card');
    switch (nuevoEntorno) {
        case 'Desarrollo':
            statusCard.style.borderLeftColor = '#4EDC4C';
            break;
        case 'Pruebas':
            statusCard.style.borderLeftColor = '#FFD93D';
            break;
        case 'Producción':
            statusCard.style.borderLeftColor = '#6BCF7F';
            break;
    }
}