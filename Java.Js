// Función para autocompletar los campos del formulario
function autocompletar(codigo, nombre) {
    const formularioArticulo = document.getElementById('Articulo');
    const formularioCodArt = document.getElementById('CodArt');

    // Actualiza los campos del formulario con los valores
    formularioArticulo.value = nombre;
    formularioCodArt.value = codigo;
}


// Obtén los elementos del DOM
const contenedor = document.getElementById('contenedor');
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const emailInput = document.getElementById('email');

// Agrega un evento click al contenedor
contenedor.addEventListener('click', () => {
    // Obtén los datos del contenedor
    const nombreContenedor = contenedor.querySelector('p:nth-child(1)').textContent.split(': ')[1];
    const edadContenedor = contenedor.querySelector('p:nth-child(2)').textContent.split(': ')[1];
    const emailContenedor = contenedor.querySelector('p:nth-child(3)').textContent.split(': ')[1];

    // Autocompleta el formulario con los datos del contenedor
    nombreInput.value = nombreContenedor;
    edadInput.value = edadContenedor;
    emailInput.value = emailContenedor;
});




