function one(ele){
  ele.addEventListenr('click', function() {
    console.log(this);
  });
}

function two(ele){
  ele.addEventListenr('click', ()=> {
    console.log(this);
  });
}


function three(ele){
  let getValue = ele.map((ele) => {ele});
}