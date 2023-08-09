                    // Reverse Name ex

// function solution(str) {
//     let splitString = str.split(''); 
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join(''); 
//     return joinArray;   
//   } 
//   console.log(solution('cristina'));



                        
                    // Even or Odd

// function evenOrOdd(number) {
//     if (number % 2 === 0){
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(evenOrOdd(3))


                      // Counting Sheep

// function countSheeps(arrayOfSheep) {
//   let num = 0;
//   for(let i = 0; i < arrayOfSheep.length; i++)
//     if(arrayOfSheep[i] === true)
//       num++;
//     return num;
// }

                    //Vowel Count

// function getCount(str){
//   let vowelsCount = 0;
//   let string = str.toString();
//   for (let i=0; i <= string.length - 1; i++){
//     if(string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u"){
//       vowelsCount += 1
//     }
//   }
//   return vowelsCount;
// }

// console.log(getCount("vasfdgesrtawvr"))

// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function isEven(element){
//     return element % 2 === 0;
// }

// function isUneven(element){
//     return element % 2 === 1;
// }

// const evenNumbers = numbers.filter(isEven);
// const unevenNumbers = numbers.filter(isUneven);

// console.log(evenNumbers, unevenNumbers);

// const unevenNumbers2 = numbers.filter();


var numbers = [ 1, 5 ,4 ,8 ,10, 3];

numbers.map(function greaterThanFive(el) {
    return el * 2;
})

var numbers = [1, 5, 4, 8, 10, 3];

var halfNumbers = numbers.map(function(el) {
    return el / 2; 
});

console.log(halfNumbers);

var numbers = [1, 5, 4, 8, 10, 3];

var squaredNumbers = numbers.map(function(el) {
    return el * el; 
});

console.log(squaredNumbers);


function transformArray(arr, transformFunction) {
    return arr.map(transformFunction);
}
var numbers = [1, 5, 4, 8, 10, 3];

function square(num) {
    return num * num;
}

function half(num) {
    return num / 2;
}

var squaredNumbers = transformArray(numbers, square);
var halfNumbers = transformArray(numbers, half);

console.log(squaredNumbers); 
console.log(halfNumbers);   

