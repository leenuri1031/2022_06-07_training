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

// let value = 0;
// let boolean = true;

// moving = () => {
//   setInterval(function() {
//     if(boolean === true){
//       value = value+300;
//       slider.scrollTo({top:value, behavior:'smooth'});
//       if(value >= 1000){
//         let newSlideItem = document.createElement('div');
//         slider.appendChild(newSlideItem);
//       }
//     }
//   },500);
// }

document.addEventListener('DOMContentLoaded',function() {
  moving();
});

