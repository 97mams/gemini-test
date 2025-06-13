import { GoogleGenAI } from "@google/genai"
import { debug } from "node:console"
import readline from "node:readline"

const apiKey = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({apiKey: apiKey})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


async function main(){
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "salut gimini"
  })
  console.log(response.text)
}

main()
rl.question("Entrez votre prompte: \n \x1b[32m + \x1b[0m", prompt => {
  rl.close()
})
