const mobileNav = document.getElementsByClassName('mobile-button');
const elements = document.querySelectorAll('.hidden');
const navLinks = document.getElementById('navlinks');
const mobileClose = document.getElementById('mobile-close');
const jsSlide = document.getElementsByClassName('js-slide');
const article = document.getElementById('article')

const colorPalette = ['#121212', '#3b3b3b', '#1f2933','#3c4f63'];


const scrollDownHidden = ()=>{
  

    for (let i = 0; i < jsSlide.length; i++){
        currentElement=jsSlide[i];
        if (Math.abs(jsSlide[i].getBoundingClientRect().top)<300){
            article.style.backgroundColor = colorPalette[i];
    
            currentElement.classList.add('fadein');
            currentElement.classList.remove('hidden');
        }
        else {
          
            currentElement.classList.add('hidden');
            currentElement.classList.remove('fadein');
        }
    }   
    
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
