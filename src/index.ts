import readline from "readline-sync";
import fs from "fs";
import {TInput} from "./types";

function getInputFromUser(): TInput {
    const APIkey: string = readline.question("Plak je API key hier:")
    const DBurl: string = readline.question("Plak hier je database url:")
    return {APIkey, DBurl}
}

function saveInput(input: TInput) {
    fs.writeFileSync(".env", `
API_KEY=${input.APIkey}
DB_URL=${input.DBurl}
`)    
}

function main() {
    const input = getInputFromUser()
    saveInput(input);
}

main();