
const elements = document.querySelectorAll('.hidden');
const jsSlide = document.getElementsByClassName('js-slide');
const article = document.getElementById('article');

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



// Event Listeners
window.addEventListener('scroll',() => {
   scrollDownHidden();

})

