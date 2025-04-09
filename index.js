const listaDeTareas = document.getElementById('lista-de-tareas');
const inputNuevaTarea = document.getElementById('input-nueva-tarea');
const botonAgregarTarea = document.getElementById('boton-agregar-tarea');



function agregarTarea() {
  const nuevaTareaTexto = inputNuevaTarea.value;

  if (nuevaTareaTexto.trim() !== '') {
    const nuevaTareaItem = document.createElement('li');
    nuevaTareaItem.textContent = nuevaTareaTexto;

    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar';
    botonCompletar.addEventListener('click', () => {
      nuevaTareaItem.classList.toggle('completada');
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      nuevaTareaItem.remove();
    });

    nuevaTareaItem.appendChild(botonCompletar);
    nuevaTareaItem.appendChild(botonEliminar);
    listaDeTareas.appendChild(nuevaTareaItem);

    inputNuevaTarea.value = '';
  }
}

botonAgregarTarea.addEventListener('click', agregarTarea);