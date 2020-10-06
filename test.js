const mobileNav = document.getElementsByClassName('mobile-button');
const elements = document.querySelectorAll('.hidden');
const navLinks = document.getElementById('navlinks');
const mobileClose = document.getElementById('mobile-close');
const jsSlide = document.getElementsByClassName('js-slide');
const article = document.getElementById('article')

let begin = true;
const changeColors = (current,distance,value) => {
   
    if (distance < 300){
      
        article.classList.add(`color-${value}`)
        current.classList.add('fadein');
        current.classList.remove('hidden');
    }
    else {
       
        article.classList.remove(`color-${value}`)
        current.classList.add('hidden');
        current.classList.remove('fadein');       
    }
}

const scrollDownHidden = ()=> {
  
  
    for (let i = 0; i < jsSlide.length; i++){
        currentElement=jsSlide[i];
        const distance = Math.abs(jsSlide[i].getBoundingClientRect().top);
      
        if ((Math.abs(jsSlide[0].getBoundingClientRect().top) > 300) && begin){
            begin = false;     
        }
        if (!begin) {
           
            changeColors(currentElement,distance,i);
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
