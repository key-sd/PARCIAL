const nombre = document.getElementById("campo-nombre");
const docente = document.getElementById("campo-docente");
const duracion = document.getElementById("duracion-curso");
const botonAgregar = document.getElementById("agg-curso");

const contenedorCursos = document.querySelector("#curso .cursos .contenedor-curso");

// AGREGAR CURSO
botonAgregar.addEventListener("click", function(){

    if(nombre.value.trim() === "" || docente.value.trim() === "" || duracion.value.trim() === ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <div class="contenido-tarjeta">
            <p>📌 Nombre del Curso: ${nombre.value}</p>
            <p>👨‍🏫 Docente: ${docente.value}</p>
            <p>⏱️ Duración: ${duracion.value}</p>
            <button class="btn-eliminar">🗑️ Eliminar</button>
        </div>
    `;

    contenedorCursos.appendChild(tarjeta);

    // limpiar campos
    nombre.value = "";
    docente.value = "";
    duracion.value = "";
});


// ELIMINR CURSO
document.addEventListener("click", function(e){

    if(e.target.classList.contains("btn-eliminar")){
        const tarjeta = e.target.closest(".tarjeta");
        tarjeta.remove();
    }

});