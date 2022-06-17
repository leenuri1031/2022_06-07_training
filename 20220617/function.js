export function createElement (count, number, tag, parent){
  for(let i = count; i < number; i++){
    const objName = document.createElement(tag);
    parent.appendChild(objName);
    objName.style.width = '10vw';
    objName.style.height = '10vw';
    objName.style.backgroundColor = 'red';
    objName.style.borderRadius = '50%';
  }
}


