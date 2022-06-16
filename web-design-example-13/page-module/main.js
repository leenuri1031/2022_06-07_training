
// work .1 코드 가독성을 위해 각각의 기능 modify 진행
import menuMaker from "./menuMaker.js";
import bodySectionMaker from "./bodySectionMaker.js";
import { anchorItems, colorArr } from "./databox.js";
// work .2 현실 적인 DOM 구축은 아래의 rootChild 변수에 담긴다.

const rootChild = `
  <ul id="menu-container">
    ${menuMaker(anchorItems, "li", "menu")}
  </ul>
  ${bodySectionMaker(anchorItems, "section", "menu")}
`;
/* 
rootchild -> 
<ul id="menu-container">
  <li><a href= #menu-0>피카츄-0<a/></li>
  <li><a href= #menu-1>라이츄-1<a/></li>
  <li><a href= #menu-2>파이리-2<a/></li>
  <li><a href= #menu-3>꼬부기-3<a/></li>
  <li><a href= #menu-4>버터플-4<a/></li>
</ul>
<section id = menu-0>피카츄-0</section>
<section id = menu-1>라이츄-1</section>
<section id = menu-2>파이리-2</section>
<section id = menu-3>꼬부기-3</section>
<section id = menu-4>버터플-4</section>

*/
// work .3 중심이 되어줄 root 요소 식별
const root = document.getElementById('root');
window.addEventListener('load', function() {
  // window 로드 이벤트가 발생할때 
  this.document.body.style.padding = 0;
  this.document.body.style.margin = 0;  
  root.innerHTML = rootChild; // ? DOM constructuring
  // styling
  // root안에 자식들이 들어가 있는 상태 
  const sections = Array.from(this.document.getElementsByTagName('section'));
  // Array.from - 배열로 만들어주는 메서드 
  // 문서에서 'scection'이라는 태그를 가지고와 배열로 만든 것을 변수 sections에 대입

  sections.forEach((value, index) => {
    value.style.width = "100vw";
    value.style.height = "100vh";
    value.style.backgroundColor = colorArr[index];
    value.style.display = "none";
  });
  /* 
  배열 sections는 반복함((배열의 요소 - 각각의 section태그, 요소의 인덱스값) => {
    section 스타일링 해주기 
    value.style.backgroundColor = colorArr[index];
    -> section 마다 배경색이 달라짐  
  });
 */

  const menuContainer =this.document.getElementById('menu-container');
  menuContainer.style.listStyleType = "none";
  menuContainer.style.position = "fixed";
  menuContainer.style.top = "50%";
  menuContainer.style.right = "0";
  menuContainer.style.transform = "translate(-20%, -50%)";
  // Id가 menu-container인 요소를 가져와 스타일링

  const menuItems = Array.from(menuContainer.children);
  // menu-container의 자식들을 배열로 만들어줌
  // console.log(this);
  // console.log(this.location);
  // url 주소를 뜻함
  // console.log(this.location.hash);
  // url주소의 해쉬

  this.addEventListener('hashchange', function() {
    // #menu-0,1,2,3,4 -> hash임 url 주소 뒤에 붙어있음
    // http://127.0.0.1:5500/index.html#menu-4
    // this는 window를 가르킴 
    // hashchange 이벤트의 경우 url부분이 바뀌는 이벤트 이기 때문에 윈도우에 달아줘야 함
    const hashData = location.hash.substring(1);
    sections.forEach((value) => {
      let getIdData = value.id;
      if(getIdData === hashData) {
        value.style.display = "block";
      } else {
        value.style.display = "none";
      }
    });
  });
});






