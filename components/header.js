const header = () => {
    const headerElement = document.createElement('header');
    headerElement.className = 'header';
    headerElement.innerHTML = `
    <a href="./index.html" class="logo">LOGO</a>
    
    <div class="menu-burger">
        <div class="burger-icon"></div>
        <div class="burger-icon"></div>
        <div class="burger-icon"></div>
    </div>
    
    <nav class="menu">
        <ul class="links">
            <li><a class="link" href="./index.html">Inicio</a></li>
            <li><a class="link" href="./servicios.html">Servicios</a></li>
            <li><a class="link" href="./contacto.html">Contacto</a></li>
        </ul>
    </nav>

    <!-- Menú desplegable -->
    <div class="overlay-menu">
        <div class="close-btn">X</div>
        <ul class="overlay-links">
            <li><a class="overlay-link" href="./index.html">Inicio</a></li>
            <li><a class="overlay-link" href="./servicios.html">Servicios</a></li>
            <li><a class="overlay-link" href="./contacto.html">Contacto</a></li>
        </ul>
    </div>
`;

    // Añadir el header al final del body (puedes ajustar el selector según necesites)
    document.body.prepend(headerElement);

    // Agregar funcionalidad al menú hamburguesa y al botón de cierre
    const menuBurgerEl = document.querySelector('.menu-burger');
    const menuEl = document.querySelector('.menu');
    const overlayMenuEl = document.querySelector('.overlay-menu');
    const closeBtnEl = document.querySelector('.close-btn');

    menuBurgerEl.addEventListener('click', () => {
        overlayMenuEl.style.display = 'flex';
    });

    closeBtnEl.addEventListener('click', () => {
        overlayMenuEl.style.display = 'none';
    });

}

header();
