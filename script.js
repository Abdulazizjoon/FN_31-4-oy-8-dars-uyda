//pop uchun masala
//1-masala
// let arr = [10, 20, 30, 40, 50];
// function puh(a) {
//   let sum = 0;
//   for (let j = 0; j < a.length; j++) {
//     sum += a[j];
//   }
//   for (let i = 0; sum > 100; i++) {
//     sum -= a.pop();
//   }
//   return sum;
// }
// let res = puh(arr);
// console.log(res);

//2-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function pop(a) {
//     for (let i = 0; i <3; i++) {
//         a.pop()
//     }
//     return a
// }
// let res=pop(arr)
// console.log(res);

//3-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function pop(a) {
//     for (let i = 0; i <1; i++) {
//         a.pop()
//     }
//     for (let j = a.length; j >=0; j--) {
//         console.log(a[j]);
//     }
// }
// let res = pop(arr)

//shift
//1-masala
// let arr = ["Ali", "Abdulaziz", "Bobur", "Aziz",'Aziza'];
// function strShift(a) {
//   let sum = a;
//   for (let i = 0; a.length > 3; i++) {
//       sum.shift()
//   }
//   return sum;
// }
// let res = strShift(arr);
// console.log(res);

//2-masala
// let arr = [100, 200, 300, 400];
// function strShift(a) {
//   let sum = 0;
//   for (let i = 1; i < a.length; i++) {
//       sum = a.splice(i,1);
//   }
//   return sum;
// }
// let res = strShift(arr);
// console.log(res);

//3-masala
// let arr = [2, 4, 6, 8];
// function firstremove(a) {
//         a.shift();
//     for (let i = 0; i < a.length; i++) {
//         a[i] = a[i] * 2
//     }

// }
// firstremove(arr)
// console.log(arr);

//unshift
//1-masala
// let arr = [10, 20];
// function firsadd(a) {
//   let sum = 0;
//   for (let j = 0; j < a.length; j++) {
//     sum += a[j];
//   }
//   for (let i = 0; sum < 50; i++) {
//       a.unshift(30);
//       sum+=30
//   }
//   console.log(a);
//   return sum;
// }
// firsadd(arr);

//2-masala
// let arr = ["ali", 'vali'];
// function add(a) {
//     for (let i = 0; a.length<5; i++) {
//         a.unshift('salim')
//         if (a.length>5) {
//             a.pop()
//         }
//     }
//     return a
// }
// let res = add(arr)
// console.log(res);

//3-masala
// let arr = [1, 2, 3];
// function maxElemeentAdd(a) {
//     let sum=0
//     for (let i = 0; i < a.length; i++) {
//         sum+=a[i]
//     }
//     a.unshift(sum)
//     return a
// }
// let res = maxElemeentAdd(arr);
// console.log(res);



//push
//1-masala
// let arr=[1,2]
// let random = Math.trunc(Math.random() * 10);
// function maxNumber(a) {
//     for (let i = 0; a.length<10; i++) {
//         a.push(random)
//     }
// }
// let res=maxNumber(arr)
// console.log(arr);

