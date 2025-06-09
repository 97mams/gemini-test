import { GoogleGenAI } from "@google/genai"

const apiKey = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({apiKey: apiKey})

async function main(){
  const response = await ai.models.generateContent({
    model: "gemini-2.0-falsh",
    contents: "Expliquez comment l'IA fonctionne en quelques mots"
  })
  console.log(response.text)
}

main()
