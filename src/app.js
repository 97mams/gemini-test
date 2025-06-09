import { GoogleGenAI } from "@google/genai"

const apiKey = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({})

console.log(apiKey);
