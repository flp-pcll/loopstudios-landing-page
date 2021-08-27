const menuIcon = document.querySelectorAll('.mobile-menu-icon i');
const menu = document.querySelector('.header-top-nav-items');

menuIcon.forEach(item => {
    item.addEventListener('click', toggleMobileMenu);
})

function toggleMobileMenu(e) {
    menu.classList.toggle('mobile-menu__active');
    changeMenuIcon(e.target, menuIcon);
}

function changeMenuIcon(target, iconList) {
    if(target == iconList[0]) {
        iconList[0].style.display = 'none';
        iconList[1].style.display = 'block';
    } else {
        iconList[0].style.display = 'block';
        iconList[1].style.display = 'none';

        toggleMobileMenu;
    }
}