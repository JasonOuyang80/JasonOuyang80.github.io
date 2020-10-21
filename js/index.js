const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');

const eventAdder = (element) =>{
    element.addEventListener('click',() => {
        const child = element.getElementsByTagName('div')[0];
        child.classList.add('d-block');
      
    });
};
eventAdder(cardOne);
eventAdder(cardTwo);
