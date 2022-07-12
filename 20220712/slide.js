const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide-item');

console.dir(slider);
console.dir(slide);
// slide-item offsetHesight : 300
// slide-item offsetTop : 146
// slide-item scrollHesight : 300
console.log(slider.scrollHeight);

let firstSlideClone = slider.firstElementChild.cloneNode(true);
slider.appendChild(firstSlideClone);

// let lastSlideClone = slider.lastElementChild.cloneNode(true);
// slider.insertBefore(lastSlideClone, slider.firstElementChild);

moving= ()=>{
  let value = 0;
  setInterval(function() {
      slider.style.transform = 'translate3d(0px,-'+300*(value+1)+'px, 0px)';
      slider.style.transition = '0.5s';
    value++;
    if(value === 4){
      setTimeout(function(){
        slider.style.transition = '0s';
        slider.style.transform = 'translate3d(0px,0px, 0px)';
      }, 201);
      value = 0;
    }
  }, 1000);

}

// var slider = document.querySelector('#slider');
// var slides = slider.querySelector('.slides');
// var slide = slides.querySelectorAll('.slide');
 
let current = 0; // 현재 화면에 보여지고 있는 슬라이드가 몇 번 슬라이드인지 확인

setInterval(function() {
  
}, 1000);
// setInterval(function() {
//     var from = -(1024 * currentSlide);
//     var to = from - 1024;
//     slides.animate({
//         marginLeft: [from + "px", to + "px"]
//     }, {
//         duration: 500,
//         easing: "ease",
//         iterations: 1,
//         fill: "both"
//     });
//     currentSlide++;
//     if (currentSlide === (slide.length - 1)) {
//         currentSlide = 0;
//     }
// }, 3000);


document.addEventListener('DOMContentLoaded',function() {
  // moving();
});

