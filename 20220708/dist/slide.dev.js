"use strict";

var slider = document.querySelector(".slider");
var slide = document.querySelector(".slide"); // const btnLeft = document.querySelector(".btn-left");
// const btnRight = document.querySelector(".btn-right");

var slideItems = Array.from(document.querySelectorAll("#slide li"));

var endScrollAnimation = function endScrollAnimation(target, translateVal) {
  target.animate([{
    transform: "translateY(0)"
  }, {
    transform: "translateY(".concat(translateVal, "px)")
  }, {
    ransform: "translateY(0)"
  }], 500);
}; // []-> keyframe 처음-가로위치 0, 중간-가로위치 변수만큼, 마지막- 가로위치 다시 0 1/2초 동안 움직임
// endScrollAnimation - 애니메이션 실행하는 함수


var endRight = function endRight() {
  var rightEdge = slider.scrollWidth - slider.offsetWidth; // offsetWidth - 컨테이너 보이는 넓이
  // scrollWidth - overflow : hidden 포함 넓이
  // scrollLeft - 가로 스크롤바 위치

  if (slider.scrollLeft === rightEdge) {
    // 만약 가로 스크롤바 위치와 rightEdge값이 같으면 애니메이션 함수 실행시켜줌
    endScrollAnimation(-10);
  } else {
    slider.scrollLeft += slider.offsetWidth - 158; // 그렇지 않다면 가로 스크롤바의 위치를 가로스크롤바 + 컨테이너 보이는 넓이 - 158 (슬라이드를 가운데로 하기 위한 숫자)
  }
};

var endLeft = function endLeft() {
  if (slider.scrollLeft === 0) {
    endScrollAnimation(10); // 만일 가로 스크롤바 위치가 0이 된다면 함수를 실행 시켜줌
  } else {
    slider.scrollLeft -= slider.offsetWidth - 150; // 그렇지 않다면 가로 스크롤바의 위치를 가로스크롤바 - 컨테이너 보이는 넓이 - (맨 처음에 위치할 수 있도록 하는 숫자)
  }
};

var heightValue = 0;
var _boolean = true;

function slideFn() {
  if (_boolean === true) {
    heightValue = heightValue + 230;
    slider.scrollTo({
      top: heightValue,
      behavior: "smooth"
    });

    if (heightValue >= 900) {
      _boolean = false;
    }
  } else {
    heightValue = 0;
    slider.scrollTo({
      top: heightValue,
      behavior: "smooth"
    });
    _boolean = true;
  }
}

var timer = setInterval(slideFn, 1000); // btnRight.addEventListener("click", function(){
//   if(boolean === true){
//     heightValue = heightValue + 466;
//     console.log(heightValue);
//     console.log(slide.scrollHeight);
//     slider.scrollTo({top : heightValue , behavior : "smooth"})
//     if(heightValue >= 900){
//       boolean = false;
//     }
//   } else {
//     heightValue = 0;
//     slider.scrollTo({top : heightValue , behavior : "smooth"});
//     boolean = true;
//   }
// });
// btnLeft.addEventListener("click", function(){
//   if(boolean === true){
//     heightValue = heightValue + 1203;
//     console.log(heightValue);
//     // console.log(slider.scrollHeight);
//     slider.scrollTo({top : heightValue , behavior : "smooth"})
//     if(heightValue >= 1203){
//       boolean = false;
//     }
//   } else {
//     heightValue = 0;
//     slider.scrollTo({top : heightValue , behavior : "smooth"});
//     boolean = true;
//   }
// });
// let slides = document.querySelector('.slides');
// let slideImg = document.querySelectorAll('.slides li');
// currentIdx = 0;
// slideCount = slideImg.length;
// prev = document.querySelector('.prev'); //이전 버튼
// next = document.querySelector('.next'); //다음 버튼
// slideWidth = 300; //슬라이드이미지 넓이
// slideMargin = 100; //슬라이드 끼리의 마진값
// makeClone(); // 처음이미지와 마지막 이미지 복사 함수
// initfunction(); //슬라이드 넓이와 위치값 초기화 함수
// function makeClone() {
//   let cloneSlide_first = slideImg[0].cloneNode(true);
//   let cloneSlide_last = slides.lastElementChild.cloneNode(true);
//   slides.append(cloneSlide_first);
//   slides.insertBefore(cloneSlide_last, slides.firstElementChild);
// }
// function initfunction() {
//   slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
//   slides.style.left = -(slideWidth + slideMargin) + 'px';
// }
// next.addEventListener('click', function () {
//   //다음 버튼 눌렀을때
//   if (currentIdx <= slideCount - 1) {
//     //슬라이드이동
//     slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
//     slides.style.transition = `${0.5}s ease-out`; //이동 속도
//   }
//   if (currentIdx === slideCount - 1) {
//     //마지막 슬라이드 일때
//     setTimeout(function () {
//       //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
//       slides.style.left = -(slideWidth + slideMargin) + 'px';
//       slides.style.transition = `${0}s ease-out`;
//     }, 500);
//     currentIdx = -1;
//   }
//   currentIdx += 1;
// });
// prev.addEventListener('click', function () {
//   //이전 버튼 눌렀을때
//   console.log(currentIdx);
//   if (currentIdx >= 0) {
//     slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
//     slides.style.transition = `${0.5}s ease-out`;
//   }
//   if (currentIdx === 0) {
//     setTimeout(function () {
//       slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
//       slides.style.transition = `${0}s ease-out`;
//     }, 500);
//     currentIdx = slideCount;
//   }
//   currentIdx -= 1;
// });