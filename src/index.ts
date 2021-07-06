import readline from "readline-sync";
import fs from "fs";

const APIkey: string = readline.question("Plak je API key hier:")
const DBurl: string = readline.question("Plak hier je database url:")

console.log({APIkey, DBurl})

fs.writeFileSync(".env", `
API_KEY=${APIkey}
DB_URL=${DBurl}
`)

