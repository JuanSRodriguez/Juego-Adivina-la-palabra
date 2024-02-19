let palabraOculta = 'Paula';
let intentos = 3;

function actualizarInterfaz(intentosRestantes) {
    document.getElementById('intentos-restantes').innerText = `Intentos restantes: ${intentosRestantes}`;
}

function mostrarPista(pista, pistaId) {
    document.getElementById(pistaId).innerText = pista;
}

function mostrarAlerta(mensaje) {
    document.getElementById('alerta-mensaje').innerText = mensaje;
    document.getElementById('alerta-overlay').style.display = 'flex';
}

function cerrarAlerta() {
    document.getElementById('alerta-overlay').style.display = 'none';
}

function jugarAdivinaLaPalabra() {
    let suposicionUsuario = document.getElementById('suposicionUsuario').value;

    if (suposicionUsuario.toLowerCase() === palabraOculta.toLowerCase()) {
        mostrarAlerta("¡Correcto! Has adivinado la palabra.");
        return true;
    } else {
        intentos--;
        actualizarInterfaz(intentos);

        if (intentos === 2) {
            mostrarPista("🔎 Pista 1: estudio Administración de empresas.", 'pista1');
        } else if (intentos === 1) {
            mostrarPista("🔎 Pista 2: Su nombre termina con la letra 'a'.", 'pista2');
        }

        mostrarAlerta(`Utiliza la cabeza, ¡vamos tu puedes!. Te quedan ${intentos} intentos.`);

        if (intentos === 0) {
            mostrarAlerta(`Agotaste tus intentos, parece que HOY apagaste el cerebro. La palabra era "${palabraOculta}".`);
        }
    }
}

function reiniciarJuego() {
    intentos = 3;
    actualizarInterfaz(intentos);
    document.getElementById('pista1').innerText = '';
    document.getElementById('pista2').innerText = '';
    document.getElementById('suposicionUsuario').value = '';
}