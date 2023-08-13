const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum illum alias molestias? Eaque delectus, debitis, fugit ratione in amet dignissimos aliquid libero earum tempore esse molestiae. Maiores,amet  labore maxime"

console.log(string.length)
// console.log(string.replace("Lorem ipsum", "String example: hello!"))
console.log(string.indexOf("consectetur"))
console.log(string.lastIndexOf("amet"))
console.log(string.startsWith("Lorem"))
console.log(string.startsWith("amet"))
console.log(string.endsWith("maxime"))
console.log(string.endsWith("amet"))
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.includes("laboriosam"))
console.log(string.includes("dog"))
console.log(string.replaceAll("amet", "dog"))
console.log(string.split(" "))
console.log(`


    some words
    


`.trim())
console.log(string.slice(22, 86))
