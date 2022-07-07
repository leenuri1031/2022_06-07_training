// function one(ele){
//   ele.addEventListenr('click', function() {
//     console.log(this);
//   });
// }

// function two(ele){
//   ele.addEventListenr('click', ()=> {
//     console.log(this);
//   });
// }

// function three(ele){
//   let getValue = ele.map((ele) => {ele});
// }

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a:2
// }

// var bar = function(){
//   foo.call(obj)
// }
// bar()

// function foo(num) {
//   console.log(this.a, num);
//   return this.a + num;
// }
// // foo라는 함수는 console에 this.a와 num을 찍어주는 함수 return 값으로 this.a + num 한 값도 뱉어냄
// var obj = {
//   a:2
// }
// // 변수 선언

// var bar = function() {
//   return foo.apply(obj, arguments);
// }

// // bar라는 변수는 함수이고, 함수 foo에서 console.log(this.a, num) 을 console.log(obj.a, arguments)로 지정해 주고 foo의 리턴값인 this.a + num 을 obj.a + arguments로 해줌

// function bind(fn, obj){
//   return function(){
//     return fn.apply(obj, arguments);
//   }
// }

// // bind라는 함수는 fn, obj라는 매개변수를 가지고있고, reutrn을 함수로 하는데 그 함수의 return은 어떤 함수를 apply해줌 -> 재사용이 가능하도록 함수로 묶어줌

// var b = bar(3);
// // 변수 b는 함수 bar의 arguments값에 3을 넣어준 상태이고 아직 더하지는 않았음
// console.log(b);
// // console에는 함수 bar에 3을 넣어준 상태에서 foo의 리턴값인 더하기를 해서 최종 값이 찍힘
// function foo(a){
//   this.a = a;
// }
// // 함수foo는 a라는 매개변수를 가지며 this.a = a 를 실행하는 함수임

// var bar = new foo(2);
// // 변수 bar는 함수 foo의 매개변수에 2를 넣어준 새로운 함수가 됨
// // bar라는 함수는 this.a = 2 를 실행하는 함수가 됨 
// console.log(bar.a);

// function fn() {/*..*/}

// var obj = {
//   c: true
// }

// var arr = []

// var myObj = {
//   a :2,
//   b : obj,
//   c : arr,
//   d : fn()
// }

// arr.push(obj, myObj);

// console.log(arr);

// var newObj = Object.assign({}, myObj);
// console.log(newObj.a);
// console.log(newObj.b === obj);
// console.log(newObj.c === arr);
// console.log(newObj.d === fn());

// var obj = {a:2};

// console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// { value: 2, writable: true, enumerable: true, configurable: true }가 나옴
// 프로퍼티 서술자(데이터 서술자)확인방법 -> 4가지 특성이 있음
// Object.defineProperty()를 통해 새로운 프로퍼티를 추가, 특성 수정 가능
// 단, configurable: true일때만

// var obj = {}

// Object.defineProperty(obj, 'a', { value: 2, writable: false, enumerable: true, configurable: true } );

// obj.a = 3;

// console.log(obj.a);

//  value값인 2가 나옴


// var obj = { a : 2};

// obj.a = 3;
// console.log(obj.a); 
// // 3 이 나옴
// Object.defineProperty(obj, 'a', { value: 4, writable: true, enumerable: true, configurable: false } );

// console.log(obj.a);
// // 4 가 나옴
// obj.a = 5;
// console.log(obj.a);
// // 5 가 나옴

// Object.defineProperty(obj, 'a', { value: 6, writable: true, enumerable: true, configurable: true } );

// console.log(obj.a);
// // error발생

// var obj = {
//   get a() {
//     return 2;
//   }
// }

// Object.defineProperty(obj, 'b',{
//   get : function(){return this.a*2},
//   enumerable :true
// });

// console.log(obj.a);
// console.log(obj.b);

var obj = {
  get a(){
    return this._a_;
  },
  set a(val){
    this._a_ = val * 2;
  }
}

obj.a = 2;
console.log(obj.a);