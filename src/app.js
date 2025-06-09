import { GoogleGenAI } from "@google/genai"

const apiKey = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({apiKey: apiKey})

async function main(){
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "prompte"
  })
  console.log(response.text)
}

main()
