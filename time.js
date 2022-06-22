function a() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('지금 함수 a()가 실행되었습니다.')
      resolve('wow');
    }, 4000);
  });
}

// console.log(a());
// a().then(function(data){
//   console.log(data);
// });

// =>  Promise { <pending> } 기다리고 있는 상태

// a().then(function(data){
//   return new Promise(function(resolve,reject){
//     setTimeout(() => {
//       console.log('여기는 지금 then 이라는 함수 안에서 실행된 것입니다.')
//       resolve(data);
//     }, 1000);
//   });
// });

a()
  .then(function(data){
    return new Promise(function(resolve,reject){
      setTimeout(() => {
        console.log('여기는 지금 then 이라는 함수 안에서 실행된 것입니다. 1')
        resolve(data);
      }, 1000);
    });
})
.then(function(data){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log('여기는 지금 then 이라는 함수 안에서 실행된 것입니다. 2')
      resolve(data);
    }, 1000);
  });
})
.then(function(data){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log('여기는 지금 then 이라는 함수 안에서 실행된 것입니다. 3')
      resolve(data);
    }, 1000);
  });
})
.then(function(data){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log('여기는 지금 then 이라는 함수 안에서 실행된 것입니다. 4')
      resolve(data);
    }, 1000);
  });
})
.then(function(data){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      console.log('여기는 지금 then 이라는 함수 안에서 실행된 것입니다. 5')
      resolve(data);
    }, 1000);
  });
});