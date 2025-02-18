// Array para almacenar nombre de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Usar .value en lugar de ariaValueMax

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre!");
        return;
    }

    // Verificar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya se encuentra en la lista`);
        return;
    } 

    // Agregar nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el cuadro de entrada
    inputAmigo.value = ""; 

    // Actualizar lista en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar contenido actual de la lista
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un elemento <li>
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) { // Comprueba si el array amigos está vacío
        alert("No hay amigos disponibles. Agrega al menos uno.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}

