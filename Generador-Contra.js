function generarContrasena() {
    const longitud = document.getElementById("length").value;
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+<>?";
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }

    document.getElementById("password").value = contrasena;
    evaluarSeguridad(contrasena); // Llamamos a la función para evaluar la seguridad
}

function copiarContrasena() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("¡Contraseña copiada al portapapeles!");
}

function evaluarSeguridad(contrasena) {
    let seguridad = "baja"; // Inicialmente consideramos que es baja
    let tieneMayusculas = /[A-Z]/.test(contrasena);
    let tieneMinusculas = /[a-z]/.test(contrasena);
    let tieneNumeros = /\d/.test(contrasena);
    let tieneSimbolos = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);

    // Verificamos la seguridad de la contraseña
    if (contrasena.length >= 12 && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneSimbolos) {
        seguridad = "alta";
    } else if (contrasena.length >= 8 && (tieneMayusculas || tieneMinusculas) && tieneNumeros) {
        seguridad = "media";
    }

    // Mostramos el nivel de seguridad
    const securityElement = document.getElementById("securityLevel");
    securityElement.textContent = `Nivel de seguridad: ${seguridad}`;
    securityElement.className = seguridad; // Cambiamos el color según el nivel de seguridad
}