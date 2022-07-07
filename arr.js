let temp;
let a = [1, 2];

temp = a[0];
a[0] = a[1];
a[1] = temp;

// a.splice(0, 2, 2, 1);
console.log(a);

// let b = a.reverse();
// console.log(b);
