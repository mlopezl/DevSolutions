const menuIcon = document.getElementById('menu-icon');
const desktopMenu = document.getElementById('desktop-menu');
const closeIcon = document.getElementById('close-icon');
const mainLink = document.getElementById('main');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.add('hidden');
    desktopMenu.classList.remove('hidden');
});

closeIcon.addEventListener('click', () =>{
    menuIcon.classList.remove('hidden');
    desktopMenu.classList.add('hidden');
});