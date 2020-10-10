const mobileNav = document.getElementsByClassName('mobile-button');
const navLinks = document.getElementById('navlinks');
const mobileClose = document.getElementById('mobile-close');


const showSideBar = () => {
    navLinks.classList.remove('navlinks')
    navLinks.classList.add('sidebar')
    mobileClose.classList.remove('d-none');
    mobileNav[0].classList.add('hide');
}

const hideSideBar = () => {
    navLinks.classList.add('navlinks')
    navLinks.classList.remove('sidebar')
    mobileClose.classList.add('d-none');
    mobileNav[0].classList.remove('hide');
    
}



mobileNav[0].addEventListener('click', () =>{
    showSideBar();
});
