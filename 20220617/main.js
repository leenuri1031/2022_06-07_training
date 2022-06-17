import { createElement } from "./function.js";

function randomNumMaker (){
  // const randomNum = Math.random();
  // const randomDice = Math.floor(randomNum * 6+1);
  // console.log(randomDice);

  const root = document.getElementById('root');
  const btn = document.getElementById('btn');
  const container = document.getElementById('container');
  // console.log(root);
  root.style.width = '100vw';
  root.style.height = '100vh';
  root.style.display = "flex";
  root.style.justifyContent = 'center';
  root.style.alignItems = 'center';
  root.style.flexDirection = 'column';
  

  container.style.width = '45vw';
  container.style.height = '45vw';
  container.style.border = '1px solid blue';
  container.style.margin = '5vw';
  container.style.display = "flex";
  container.style.justifyContent = 'space-evenly';
  container.style.alignItems = 'center';
  container.style.flexWrap = 'wrap';
  // // console.dir(container);
  
  btn.addEventListener('click', ()=> {
    // console.log(Math.floor(Math.random()*6 +1));
    let randomNum = Math.floor(Math.random()*6 +1);
    if(container.innerHTML === ""){
      console.log(randomNum);
      for(let i = 1; i<7; i++){
        if(randomNum === i){
          createElement(0,i,'div',container);
        }
      }
    } else {
      container.innerHTML = "";
    }
  });
}

// if(container.innerHTML === ""){
      
//   if(randomDice === 1){
//     let div = document.createElement('div');
//     container.appendChild(div);
//     div.style.width = '10vw';
//     div.style.height = '10vw';
//     div.style.backgroundColor = 'red';
//     div.style.borderRadius = '50%';
//   } 
//   if(randomDice === 2){
//     for(let i = 0 ; i<2; i++){
//     let div = document.createElement('div');
//     container.appendChild(div);
//     div.style.width = '10vw';
//     div.style.height = '10vw';
//     div.style.backgroundColor = 'red';
//     div.style.borderRadius = '50%';
//     }
//   }
//   if(randomDice === 3){
//     for(let i = 0 ; i<3; i++){
//     let div = document.createElement('div');
//     container.appendChild(div);
//     div.style.width = '10vw';
//     div.style.height = '10vw';
//     div.style.backgroundColor = 'red';
//     div.style.borderRadius = '50%';
//     }
//   }
//   if(randomDice === 4){
//     for(let i = 0 ; i<4; i++){
//     let div = document.createElement('div');
//     container.appendChild(div);
//     div.style.width = '10vw';
//     div.style.height = '10vw';
//     div.style.backgroundColor = 'red';
//     div.style.borderRadius = '50%';
//     }
//   }
//   if(randomDice === 5){
//     for(let i = 0 ; i<5; i++){
//     let div = document.createElement('div');
//     container.appendChild(div);
//     div.style.width = '10vw';
//     div.style.height = '10vw';
//     div.style.backgroundColor = 'red';
//     div.style.borderRadius = '50%';
//     }
//   }
  
//   if(randomDice === 6){
//     for(let i = 0 ; i<6; i++){
//     let div = document.createElement('div');
//     container.appendChild(div);
//     div.style.width = '10vw';
//     div.style.height = '10vw';
//     div.style.backgroundColor = 'red';
//     div.style.borderRadius = '50%';
//     }
//   }
  
// } else {
//   container.innerHTML = "";
// }

export default randomNumMaker();
