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




<script>
    const cartItems = document.getElementById('cart-items');
    const addToCartButton = document.querySelector('.submit-button');

    addToCartButton.disabled = true; // El botón estará deshabilitado hasta que se completen todos los campos.

    function addToCart() {
    const lista = document.getElementById('ListaForm').value;
    const codArt = document.getElementById('CodArtForm').value;
    const articulo = document.getElementById('ArticuloForm').value;
    const precio = document.getElementById('PrecioForm').value;
    const local = document.getElementById('LocalForm').value;

    if (lista && codArt && articulo && precio && local) {
        const listItem = document.createElement('li');
    listItem.innerHTML = `Lista: ${lista}, Cod Art: ${codArt}, Articulo: ${articulo}, <span class="price">Precio: ${precio}</span>, Local: ${local}`;
    cartItems.appendChild(listItem);

    // Limpia los campos del formulario después de agregar al carrito
    document.getElementById('ListaForm').value = '';
    document.getElementById('CodArtForm').value = '';
    document.getElementById('ArticuloForm').value = '';
    document.getElementById('PrecioForm').value = '';
    document.getElementById('LocalForm').value = '';

    addToCartButton.disabled = true; // Deshabilita el botón después de agregar al carrito
    } else {
        alert('Por favor, complete todos los campos antes de agregar al carrito.');
    }
}

    // Habilita el botón cuando todos los campos estén completos
    document.getElementById('ListaForm').addEventListener('input', enableButton);
    document.getElementById('CodArtForm').addEventListener('input', enableButton);
    document.getElementById('ArticuloForm').addEventListener('input', enableButton);
    document.getElementById('PrecioForm').addEventListener('input', enableButton);
    document.getElementById('LocalForm').addEventListener('input', enableButton);

    function enableButton() {
    const lista = document.getElementById('ListaForm').value;
    const codArt = document.getElementById('CodArtForm').value;
    const articulo = document.getElementById('ArticuloForm').value;
    const precio = document.getElementById('PrecioForm').value;
    const local = document.getElementById('LocalForm').value;

    if (lista && codArt && articulo && precio && local) {
        addToCartButton.disabled = false;
    } else {
        addToCartButton.disabled = true;
    }
}

    // Función para autocompletar los campos del formulario
    function autocompletar(codigo, nombre) {
    const formularioArticulo = document.getElementById('ArticuloForm');
    const formularioCodArt = document.getElementById('CodArtForm');

    // Actualiza los campos del formulario con los valores
    formularioArticulo.value = nombre;
    formularioCodArt.value = codigo;
}




    const {google} = require('googleapis');

    // Carga tus credenciales desde el archivo JSON de credenciales
    const credentials = require('./tu-archivo-de-credenciales.json');

    // Configura la autenticación
    const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
    );

    // ID de tu hoja de cálculo de Google Sheets
    const spreadsheetId = 'ID_DE_TU_HOJA_DE_CÁLCULO';

    // Función para agregar datos a la hoja de cálculo
    function addToGoogleSheet(data) {
  const sheets = google.sheets('v4');

    sheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: 'NombreDeTuRango', // Por ejemplo, 'A1'
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
        values: [data],
    },
  }, (err) => {
    if (err) {
        console.error(`Error al agregar datos a Google Sheets: ${err}`);
    } else {
        console.log('Datos agregados a Google Sheets con éxito.');
    }
  });
}

    // Llama a esta función para agregar datos a la hoja de cálculo
    addToGoogleSheet(['Dato1', 'Dato2', 'Dato3']); // Reemplaza con tus datos

