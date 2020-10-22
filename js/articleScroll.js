
const elements = document.querySelectorAll('.hidden');
const jsSlide = document.getElementsByClassName('js-slide');
const innerContainer = document.getElementById('inner-container');
const scrollMessage = document.getElementById('scrollMessage');
let begin = true;
const jsSlideArray = Array.prototype.slice.call(jsSlide)

const changeColors = (current,distance,value) => {
   
    if (distance < 400){
        
        innerContainer.classList.add(`color-${value}`)
        current.classList.remove('hidden');
        current.classList.add('fadein');
    }
    else {
       
        innerContainer.classList.remove(`color-${value}`)
        current.classList.add('hidden');
        current.classList.remove('fadein');  
         
    }
}


const scrollDownHidden = ()=> {

  
    for (let i = 0; i < jsSlide.length; i++){
        currentElement=jsSlide[i];
        const distance = Math.abs(currentElement.getBoundingClientRect().x);
        
        if ((Math.abs(jsSlide[0].getBoundingClientRect().x) > 400) && begin){
            begin = false;     
        }
        if (!begin) {
           
            changeColors(currentElement,distance,i);
            if (jsSlideArray.every(element =>{
                return element.classList.contains('hidden')
             })){
                scrollMessage.classList.remove('hidden');
                scrollMessage.classList.add('fadein');
             }
             else {
                scrollMessage.classList.add('hidden');
                scrollMessage.classList.remove('fadein');
             }
        }

    }   
    
}



// Event Listeners
window.addEventListener('scroll',() => {
   scrollDownHidden();
    console.log(window.pageXOffset);
})

window.addEventListener('wheel',() => {
    scrollDownHidden();
 })
 



//  rain effect
function show() 
{
   $('.main').empty();
   var increment = 0;
   var drops = "";
   var backDrops = "";

   while (increment < 100) {
       var x = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
       var y = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
       increment += y;
       drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class="stem" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class="splat" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
       backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (y + y - 1 + 100) + '%; animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"><div class="stem" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div><div class="splat" style="animation-delay: 0.' + x + 's; animation-duration: 0.5' + x + 's;"></div></div>';
   }
   $('.main').append(backDrops);
   }
   $('body').toggleClass('splat-toggle');
   show();