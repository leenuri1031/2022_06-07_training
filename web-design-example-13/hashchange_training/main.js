import { anchorItems, colorArr, divColorArr } from "./databox.js";
import sectionMaker from "./sectionMaker.js";
import divMaker from "./divMaker.js";


const rootChild = `
<div id = "container">
${divMaker(anchorItems, 'div', 'col')}
</div>
${sectionMaker(anchorItems, 'section', 'col')}
`;

const root = document.getElementById('root');
// console.log(window);
window.addEventListener('load',function() {
  this.document.body.style.padding = 0;
  this.document.body.style.margin = 0;  
  root.innerHTML = rootChild;
  // console.log(this);
  const sections = Array.from(this.document.getElementsByTagName('section'));
  console.log(sections);

  sections.forEach((value, index) => {
    value.style.width = "100vw";
    value.style.height = "100vh";
    value.style.backgroundColor = colorArr[index];
    // value.style.display = "none";
  });

  const divs =Array.from(this.document.getElementsByTagName('div'));

  divs.forEach((value, index) => {
    value.style.width = "100vw";
    value.style.height = "100vh";
    value.style.backgroundColor = divColorArr[index];
  });
  
});
