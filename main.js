const mobileMenuIcon = document.querySelector('.menuIcon')
const mobileMenu = document.querySelector('.mobileMenu')
const mobileMenuClose = document.querySelector('.closeMenuImage')
mobileMenuIcon.addEventListener('click', menuAparece);
mobileMenuClose.addEventListener('click', menuDesaparece)
function menuAparece() {
    mobileMenu.classList.remove('isClosed')
}
function menuDesaparece() {
    mobileMenu.classList.add('isClosed')
}