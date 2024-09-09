let aleatorio = 0;
let intentos = 0;

const intText = document.getElementById('intento');
const divMensaje  = document.getElementById('mensaje');

function reiniciar() {
    intentos = 0;
    aleatorio = numeroAleatorio(1,1000);
    console.log(aleatorio);
    divMensaje.classList.add('escondido');
    intText.innerText = "Intentos " + intentos;
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

reiniciar();

function adivinar() {
    const input = document.getElementById('input');
    const n = input.value;

    intentos++;
    intText.innerText = "Intentos " + intentos;
    
    divMensaje.classList.remove('escondido');
    divMensaje.style.backgroundColor = 'chocolate';

    if (n > aleatorio) {
        if (n - 10 > aleatorio)
            divMensaje.innerText = 'Muy Alto';
        else
            divMensaje.innerText = 'Un poco más abajo';
    } else if (n < aleatorio) {
        if (aleatorio - n > 10)  // Comparación corregida
            divMensaje.innerText = 'Muy Bajo';
        else
            divMensaje.innerText = 'Un poco más alto';
    } else {
        divMensaje.innerText = '¡Ganaste!';
        divMensaje.style.backgroundColor = 'rgb(84, 241, 36)';
    }
}


