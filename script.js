const nombre = document.getElementById("campo-nombre");
const docente = document.getElementById("campo-docente");
const duracion = document.getElementById("duracion-curso");
const boton = document.getElementById("agg-curso");

boton.addEventListener("click", function(){

    // Validar nombre
    if(nombre.value.trim().length < 3){
        nombre.value = "";
        nombre.placeholder = "Campo obligatorio";
    }

    // Validar docente
    if(docente.value.trim().length < 5){
        docente.value = "";
        docente.placeholder = "Campo Obligatorio";
    }

    // Validar duración
    if(duracion.value.trim() === ""){
        duracion.placeholder = "Campo obligatorio";
    }

});