function agregarTarea() {
    const tareaInput = $('#tareaInput');
    const tarea = tareaInput.val();

    if (tarea.trim() === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }

    const listaTareas = $('#listaTareas');
    const nuevaTareaHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${tarea}
            <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
        </li>
    `;

    listaTareas.append(nuevaTareaHTML);
    tareaInput.val('');
}

function eliminarTarea(elemento) {
    $(elemento).parent().remove();
}