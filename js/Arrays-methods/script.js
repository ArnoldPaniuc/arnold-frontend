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

// let i = 0;
// do {
//     if (i % 2 === 0) {
//         console.log(i + "par");
//     } else {
//         console.log(i + "impar")
//     }
//     i++;
// } while (i <=100);


// let count = 0;

// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// }


// cc('K');
// console.log(cc('K'));



const array = [1, 2, 'string', [false, undefined, 3]];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);

//   if (Array.isArray(array[i])) {
//     const arrayCopil = array[i];
//     for (let j = 0; j < arrayCopil.length; j++) {
//       console.log("Valori array: ", arrayCopil[j]);
//     }
//   }
// }

// for (const value of array) {
//   console.log(value);

//   if (Array.isArray(value)) {
//     console.log("Child array values");
//     for (const childArrayValue of value) {
//       console.log(childArrayValue);
//     }
//   }
// }

// const stringCuGhilimele = "intre ghilimele";
// const stringCuGhilimea = "intre ghilimea";
// const templateLiteralString = `intre backticks`;

// const propozitie = "Am citit cartea 'Harry Potter'";

// for (const index in array) {
//   console.log(index);
//   console.log(`Elementul la indexul ${index}: `, array[index]);
// }

// console.log("Tipul array-ului in JS:", typeof array);
// const array = {
//   0: 1,
//   1: 2,
//   2: "string",
//   3: [false, undefined, 3]
// }

// const obj = {
//   curs: "Frontend",
//   week: 12,
//   wantsome: true,
//   key: "cheie",
// };

// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

// Array.map
// returneaza un array nou
const newArray1 = array.map((value) => {
  if (typeof value === 'number') {
    return value * 2;
  }

  if (typeof value === 'string') {
    return value + ' map function';
  }

  return value;
});

// Array.forEach
// itereaza peste elementele din array
array.forEach((value) => {
  if (typeof value === 'number') {
    return value * 2;
  }

  if (typeof value === 'string') {
    return value + ' map function';
  }
});

const jobs = [
  {
    id: 1,
    jobTitle: 'Backend',
    country: 'Romania',
    salary: [1000, 2000],
    currency: 'eur',
  },
  {
    id: 2,
    jobTitle: 'Frontend',
    country: 'Anglia',
    salary: [3500, 6000],
    currency: 'eur',
  },
  {
    id: 3,
    jobTitle: 'DevOps',
    country: 'Spania',
    salary: [3000, 5500],
    currency: 'eur',
  },
  {
    id: 4,
    jobTitle: 'Frontend',
    country: 'Spania',
    salary: [1200, 3500],
    currency: 'eur',
  },
];

console.log(jobs);
const newBetterPaidJobs = jobs.map((job) => {
  // job.salary[0] = job.salary[0] + 500;
  // job.salary[1] = job.salary[1] + 500;
  // Se schimba la toate variabilele care utilizeza acest obiect

  // Object assign;

  const newJob = {
    ...job,
    salary: [job.salary[0] + 500, job.salary[1] + 500],
  };

  return newJob;
});

console.log('Higher pay jobs update:', newBetterPaidJobs);

// const arrayDeStringuriDespreJoburi = jobs.map((job) => {
//   return `Jobul ${job.jobTitle} cu locatia ${job.country} cu range salarial ${
//     job.salary[0]
//   }-${job.salary[1]}${job.currency.toUpperCase()}`;
// });

// console.log(arrayDeStringuriDespreJoburi);

// Mod 1 filtrare array
const highPayingJobs = [];
for (const job of jobs) {
  if (job.salary[0] > 1500 || job.country === 'Spania') {
    highPayingJobs.push(job);
  }
}

console.log('High paying jobs:', highPayingJobs);

// Mod 2 filtrare
// Array.filter
// returneaza un array nou
const jobsFromSpain = jobs.filter((job) => {
  //boolean
  return job.country === 'Spania';
});

console.log('Spania jobs:', jobsFromSpain);

const jobsFromBulgaria = jobs.filter((job) => {
  //boolean
  return job.country === 'Bulgaria';
});

console.log('Bulgaria jobs:', jobsFromBulgaria);

// Array.find
const job = jobs.find((job) => job.country === 'Spania');
console.log(job);

const nojobFound = jobs.find((job) => job.country === 'Bulgaria');
console.log(nojobFound);

// Array.sort
// jobs.sort()
// const numbers = [5, 1, 1, 6, 10, 11];

// const strings = ["ala", "bala", "aca", "abba"];
// console.log(numbers.sort((a, b) => a - b));
// console.log(
//   strings.sort((a, b) => {
//     if (a < b) {
//       return -1; // schimba ordinea
//     }

//     if (a > b) {
//       return 1; // tine ordinea
//     }

//     return 0; // tine ordinea doar daca elementele sunt egale
//   })
// );

const sortedJobsBySalary = jobs.toSorted((a, b) => {
  return a.salary[0] - b.salary[0];
});
console.log('Sorted by salary:', sortedJobsBySalary);

const sortedJobsByJobTitle = jobs.toSorted((a, b) => {
  if (a.jobTitle < b.jobTitle) {
    return -1;
  }

  if (a.jobTitle > b.jobTitle) {
    return 1;
  }

  return 0;
});

console.log('Sorted by job title', sortedJobsByJobTitle);

const cartProducts = [
  {
    id: 1,
    price: 1200,
    name: 'Casti 1',
  },
  {
    id: 2,
    price: 300,
    name: 'Casti 2',
  },
  {
    id: 3,
    price: 500,
    name: 'Casti 3',
  },
];

const todayReservations = [
  {
    id: 1,
    people: 2,
    name: 'Gigel',
    time: 12,
  },
  {
    id: 1,
    people: 4,
    name: 'Popescu',
    time: 12,
  },
  {
    id: 1,
    people: 3,
    name: 'Ionescu',
    time: 13,
  },
];

//Array.reduce
const sumOfBaseSalaries = jobs.reduce((accumulator, currentJob) => {
  console.log(accumulator);
  return accumulator + currentJob.salary[0];
}, 0);

console.log(sumOfBaseSalaries);

const checkoutTotalPrice = cartProducts.reduce(
  (accumulator, currentProducts) => {
    console.log(accumulator);
    return accumulator + currentProducts.price;
  },
  10
);

console.log(checkoutTotalPrice);

function peopleAtACertainHours(reservationsArray, hour) {
  console.log('ceva');
  return reservationsArray
    .filter((reservation) => {
      return reservation.time === hour;
    })
    .reduce((accumulator, currentReservation) => {
      console.log(accumulator);
      return accumulator + currentReservation.people;
    }, 0);
}

console.log(
  'Persoane la ora 12:',
  peopleAtACertainHours(todayReservations, 12),
  'Persoane la ora 13:',
  peopleAtACertainHours(todayReservations, 13)
);

// const a = [1, 2, 3, 4];
// const b = [...a];
// NU ASA b = a

// b.push(5);

// console.log(a, b);

// const obj1 = {
//   curs: "Frontend",
//   week: 12,
//   wantsome: true,
//   key: "cheie",
// };

// const { curs, week, ...rest } = obj1;
// // obj2.year = 2023;

// console.log(curs, week, rest);
