const listaDeTareas = document.getElementById('lista-de-tareas');
const inputNuevaTarea = document.getElementById('input-nueva-tarea');
const botonAgregarTarea = document.getElementById('boton-agregar-tarea');



window.addEventListener('load', cargarTareas);


function agregarTarea() {
  const nuevaTareaTexto = inputNuevaTarea.value;

  if (nuevaTareaTexto.trim() !== '') {
    const nuevaTareaItem = document.createElement('li');
    nuevaTareaItem.textContent = nuevaTareaTexto;

    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar';
    botonCompletar.addEventListener('click', () => {
      nuevaTareaItem.classList.toggle('completada');
      guardarTareas();
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      nuevaTareaItem.remove();
      guardarTareas();
    });

    nuevaTareaItem.appendChild(botonCompletar);
    nuevaTareaItem.appendChild(botonEliminar);
    listaDeTareas.appendChild(nuevaTareaItem);

    inputNuevaTarea.value = '';
    guardarTareas();
  }
}


botonAgregarTarea.addEventListener('click', agregarTarea);


function guardarTareas() {
  const tareas = [];
  listaDeTareas.querySelectorAll('li').forEach(li => {
    const texto = li.childNodes[0].textContent; // Primer nodo de texto
    const completada = li.classList.contains('completada');
    tareas.push({ texto, completada });
  });
  localStorage.setItem('tareas', JSON.stringify(tareas));
}


function crearTareaDesdeLocalStorage(tarea) {
  const nuevaTareaItem = document.createElement('li');
  nuevaTareaItem.textContent = tarea.texto;

  if (tarea.completada) {
    nuevaTareaItem.classList.add('completada');
  }

  const botonCompletar = document.createElement('button');
  botonCompletar.textContent = 'Completar';
  botonCompletar.addEventListener('click', () => {
    nuevaTareaItem.classList.toggle('completada');
    guardarTareas();
  });

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.addEventListener('click', () => {
    nuevaTareaItem.remove();
    guardarTareas();
  });

  nuevaTareaItem.appendChild(botonCompletar);
  nuevaTareaItem.appendChild(botonEliminar);
  listaDeTareas.appendChild(nuevaTareaItem);
}

function cargarTareas() {
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
  tareasGuardadas.forEach(tarea => {
    crearTareaDesdeLocalStorage(tarea);
  });
}