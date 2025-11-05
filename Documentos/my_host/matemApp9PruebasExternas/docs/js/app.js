// Código JavaScript para la navegación entre ejercicios

document.addEventListener('DOMContentLoaded', function() {
    const ejercicios = document.querySelectorAll('.ejercicio');
    const controlesNavegacion = document.getElementById('controles-navegacion');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const totalEjercicios = ejercicios.length;
    let ejercicioActual = 1;

    // -----------------------------------------------------
    // FUNCIÓN PRINCIPAL DE VISUALIZACIÓN
    // -----------------------------------------------------
    function mostrarEjercicio(indice) {
        // 1. Ocultar todos los ejercicios
        ejercicios.forEach(ej => {
            ej.style.display = 'none';
        });

        // 2. Mostrar el ejercicio solicitado
        const ejercicioId = `ejercicio-${indice}`;
        const ejercicioAMostrar = document.getElementById(ejercicioId);
        if (ejercicioAMostrar) {
            ejercicioAMostrar.style.display = 'block';
            ejercicioActual = indice;
        }

        // 3. Actualizar el estado de los botones (activo/inactivo)
        document.querySelectorAll('.btn-ejercicio').forEach(btn => {
            btn.classList.remove('activo');
            if (parseInt(btn.dataset.indice) === ejercicioActual) {
                btn.classList.add('activo');
            }
        });

        // 4. Actualizar el texto del botón Siguiente
        if (ejercicioActual === totalEjercicios) {
            btnSiguiente.textContent = 'Finalizar Prueba';
        } else {
            btnSiguiente.textContent = `Siguiente → (${ejercicioActual}/${totalEjercicios})`;
        }
    }

    // -----------------------------------------------------
    // CREACIÓN DEL MENÚ DE BOTONES DE PAGINACIÓN
    // -----------------------------------------------------
    const menuPaginacion = document.createElement('div');
    menuPaginacion.id = 'menu-ejercicios';
    
    for (let i = 1; i <= totalEjercicios; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Ej${i}`;
        btn.classList.add('btn-ejercicio');
        btn.dataset.indice = i; // Guardamos el índice para usarlo en el click
        
        btn.addEventListener('click', function() {
            mostrarEjercicio(i);
        });

        menuPaginacion.appendChild(btn);
    }
    
    // Insertar el menú antes del botón Siguiente
    controlesNavegacion.insertBefore(menuPaginacion, btnSiguiente);

    // -----------------------------------------------------
    // LÓGICA DEL BOTÓN SIGUIENTE
    // -----------------------------------------------------
    btnSiguiente.addEventListener('click', function() {
        if (ejercicioActual < totalEjercicios) {
            mostrarEjercicio(ejercicioActual + 1);
        } else {
            // Lógica para finalizar la prueba (ej. enviar formulario, mostrar resultados)
            alert("¡Prueba finalizada! Puedes enviar los resultados ahora.");
            // Aquí iría el código para enviar los datos o redirigir
        }
    });

    // Mostrar el primer ejercicio al cargar la página
    mostrarEjercicio(1);
});


