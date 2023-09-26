// JavaScript
        // Evento click
        document.getElementById('caja1').addEventListener('click', function() {
            alert('Caja 1 fue clickeada');
        });

        document.getElementById('caja2').addEventListener('click', function() {
            alert('Caja 2 fue clickeada');
        });

        // Eventos de formulario
        document.getElementById('miFormulario').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario enviado');
        });

        // Eventos de entrada de texto
        document.getElementById('textoEntrada').addEventListener('input', function() {
            console.log('Texto cambiado: ' + this.value);
        });

        // Eventos de ratón
        const divMouse = document.getElementById('divMouse');
        divMouse.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#2ecc71';
        });

        divMouse.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#e74c3c';
        });

        // Eventos de teclado
        document.getElementById('inputTeclado').addEventListener('keyup', function(event) {
            console.log('Tecla presionada: ' + event.key);
        });

        document.getElementById('inputTeclado').addEventListener('keydown', function(event) {
            console.log('Tecla liberada: ' + event.key);
        });

        // Eventos de foco y desenfoque
        document.getElementById('inputFoco').addEventListener('focus', function() {
            console.log('Input enfocado');
        });

        document.getElementById('inputFoco').addEventListener('blur', function() {
            console.log('Input desenfocado');
        });