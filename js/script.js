// Seleccionamos el botón de abrir y cerrar el menú
const menuToggle = document.querySelector('.menu-toggle');

// Seleccionamos el contenedor del menú
const menuContainer = document.querySelector('.menu-container');

// Agregamos un evento de clic al botón
menuToggle.addEventListener('click', () => {
  // Agregamos o removemos la clase "open" al contenedor del menú
  menuContainer.classList.toggle('open');
});