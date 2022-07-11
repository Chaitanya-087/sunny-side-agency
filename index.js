const mediaQuery = window.matchMedia('(max-width:768px)');
const banner = document.getElementById('banner')
const menu = document.getElementById('menu-icon')
const navItems = document.getElementById('nav-items');
const transformImage = document.getElementById('transform');
const standoutImage = document.getElementById('standout');
const graphic = document.getElementById('graphic');
const photography = document.getElementById('photography');
const bottles = document.getElementById('bottles');
const orange = document.getElementById('orange');
const cone = document.getElementById('cone');
const sugarcubes = document.getElementById('sugarcubes');
const navBar = document.getElementById('back-drop');

if (mediaQuery.matches) {
    banner.src = "./images/mobile/image-header.jpg"
    transformImage.src = "./images/mobile/image-transform.jpg"
    standoutImage.src = "./images/mobile/image-stand-out.jpg"
    graphic.src = './images/mobile/image-graphic-design.jpg'
    photography.src = './images/mobile/image-photography.jpg'
    bottles.src = './images/mobile/image-gallery-milkbottles.jpg'
    orange.src = './images/mobile/image-gallery-orange.jpg'
    cone.src = './images/mobile/image-gallery-cone.jpg'
    sugarcubes.src = './images/mobile/image-gallery-sugar-cubes.jpg'

    menu.classList.remove('disappear')
}

window.addEventListener('scroll',() => {
    if(document.documentElement.scrollTop > 20) {
        navBar.classList.add('back-drop')
    }
    else{
        navBar.classList.remove('back-drop')
    }
})

function openMenu() {
    navItems.classList.toggle('active')
}