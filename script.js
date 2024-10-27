// Mensaje de bienvenida en la consola
console.log("Bienvenido a a3-code. Este es un proyecto de prueba para explorar HTML, CSS y JavaScript.");

// Ejemplo de interactividad
document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector(".pulse-circle");
    circle.addEventListener("click", () => {
        alert("¡Círculo pulsante clicado!");
    });
});
