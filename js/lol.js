const headerText = document.querySelectorAll('.header-text')[0];
const corner = document.querySelectorAll('.corner')[0];
const headerButton = document.getElementById('header-button');
const headerInfo = document.getElementById('header-info');
const headerHeading = document.querySelectorAll('.header-heading')[0];
const imgHeader = document.getElementById('js-img-header');
headerText.addEventListener('mouseover',() => {
    corner.classList.add('corner-bg');
});

headerText.addEventListener('mouseout',() => {
    corner.classList.remove('corner-bg');
});

headerButton.addEventListener('click',()=>{
    corner.style.display='none';
    headerText.style.display='none';
    headerInfo.style.display='flex';
    headerHeading.classList.add('header-heading-center');
    imgHeader.classList.add('img-blur');
});