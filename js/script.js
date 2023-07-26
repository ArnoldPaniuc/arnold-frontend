// const age = prompt("introdu varsta ta");
// console.log(typeof Number(age));
// const convertedAge = Number(age);
// const firstLimit = 25;
// const secondLimit = 15;
// if(convertedAge > firstLimit) {
//     console.log ("Nu aveti reducere")
// }else if (convertedAge > secondLimit) {
//     console.log("Aveti reducere de 10%")
// }else {
//     console.log("Aveti reducere de 25%")
// }

// switch
// const age = Number(prompt("Introdu varsta ta"));
// switch (age) {
//     case 15:
//         console.log("Reducere de 25%");
//         break;
//     case 16:
//         console.log("Reducere de 20%");
//         break;
//     case 17:
//         console.log("Reducere de 15%");
//         break;
//     case 18:
//         console.log("Reducere de 10%");
//         break;
//     default:
//         console.log("Nu se mai aplica reducerea")
// }

// for 
// const a = 100; 
// console.log("Numere pare pana la 100")
// for (i=1; i<=a; i++)
// {
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }

// while
// let i = 1
// while (i<=100) {
//   if (i%2!==0) {
//     console.log(i);
//   }
//   i++;
// }

let i = 0;
do {
    if (i % 2 === 0) {
        console.log(i + "par");
    } else {
        console.log(i + "impar")
    }
    i++;
} while (i <=100);