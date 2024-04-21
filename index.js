const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');

let sliderNumber = 1;
const length =image.length;

rightBtn.addEventListener('click', function(){
    if(sliderNumber < length ){
   slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;
    } else{
        slider.style.transform = `translateX(0)`;
        sliderNumber=1;
    }
})
leftBtn.addEventListener('click', function(){
    if(sliderNumber > 1){
slider.style.transform=`translateX(-${ (sliderNumber-2) * 800}px)`;
    sliderNumber--;
    }else {
        slider.style.transform =`translateX(-${(length -1) * 800}px)`;
        sliderNumber = length;
    }
    
})