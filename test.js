const mobileNav = document.getElementsByClassName('mobile-button');
const elements = document.querySelectorAll('.hidden');
const navLinks = document.getElementById('navlinks');
const mobileClose = document.getElementById('mobile-close');






const scrollDownHidden = ()=>{
    const currentPos = window.scrollY;
   
    
    elements.forEach((element) => {
        const currentEle = element.getBoundingClientRect().top
        if (currentPos >= currentEle) {
            element.classList.add('fade-in-element');
            element.classList.remove('hidden')
        }
        else {
            element.classList.add('hidden');
            element.classList.remove('fade-in-element')
        }
    });
}

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


// Event Listeners
window.addEventListener('scroll',() => {
   scrollDownHidden();

})

mobileNav[0].addEventListener('click', () =>{
    showSideBar();
});
