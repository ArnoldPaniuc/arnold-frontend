let initialValues = [1, "casian", true, 6.14, false, null, undefined];

let otherValues = [42, "panciuc"];

let numericValues = initialValues.filter(value => typeof value === "number");
let modifiedValues = numericValues.map(value => value + 2);

numericValues.forEach((value, index) => {
  initialValues[initialValues.indexOf(value)] = modifiedValues[index];
});

let stringValues = initialValues.filter(value => typeof value === "string");
stringValues = stringValues.map(value => value + " happy ");

let booleanValues = initialValues.filter(value => typeof value === "boolean");
booleanValues = booleanValues.map(value => !value);

booleanValues.forEach((value, index) => {
  initialValues[initialValues.indexOf(booleanValues[index])] = value;
});

console.log(initialValues);
