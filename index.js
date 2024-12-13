console.log("Hello Boolean");
const parola = process.argv[2];

const saluto = parola ? `Hello ${parola}` : "Hello World";

console.log(saluto);