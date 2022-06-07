const root = document.getElementById('root');

// let liElement = [];
// for(let i = 1; i<11; i++){
//   liElement.push(`<li> ${i} </i>`);
// }

// console.log(liElement.join(''));
// ul.innerHTML = liElement.join('');

// root.innerHTML = `
//   <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
//   <li>5</li>
//   <li>6</li>
// `;


const items = ['피카츄', '라이츄','파이리','꼬부기','버터풀','야도란'];
const menu = [];
menu.push(`<ul>`);
items.forEach((value, index) => {
  menu.push(`<li>${value}-${index}</li>`);
});
menu.push(`</ul>`);
root.innerHTML = menu.join('');



