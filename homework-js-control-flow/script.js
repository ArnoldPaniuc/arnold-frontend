const capCil = parseFloat(prompt("Introdu cap. cilindrica în cm3:"));
const rateImpozit = [
  { limSup: 1500, rata: 1 },
  { limSup: 3000, rata: 2 },
  { limSup: Infinity, rata: 3 }
];
let impozit = 0;
const indexInt = rateImpozit.findIndex(interval => capCil <= interval.limSup);
if (indexInt !== -1) {
  const interval = rateImpozit[indexInt];
  impozit = Math.floor(capCil * interval.rata);
}
console.log(`Impozitul ${capCil} cm3 este: ${impozit} lei.`);
