function stringCombine(a, b){
  return a + b;
}

function consoleLoop(count, string){
  for(let i = 0; i < count; i++){
    console.log(string);
  }
}

function one(ent1, ent2, count) {
  // console.log('hot');
  // return "hey"
  // console.log(2);
  // return 1;

  // if(ent === 5){
  //   return 5
  // } else{
  //   return 'wow';
  // }
  let strings = stringCombine(ent1, ent2); 
  consoleLoop(count, strings);
  return `nope`;

}

// console.log(one() === "hey");
console.log(one('<div>', '</div>', 5));

