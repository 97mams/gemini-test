import { OpenRouter } from "@openrouter/sdk";
import readline from "node:readline";

const apiKey = process.env.GEMINI_API_KEY;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const openRouter = new OpenRouter({
  apiKey: apiKey,
});

const stream = await openrouter.chat.send({
  model: "arcee-ai/trinity-large-preview:free",
  messages: [
    {
      role: "user",
      content: "How many r's are in the word 'strawberry'?",
    },
  ],
  stream: true,
});

let response = "";
for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) {
    response += content;
    process.stdout.write(content);
  }

  // Usage information comes in the final chunk
  if (chunk.usage) {
    console.log("\nReasoning tokens:", chunk.usage.reasoningTokens);
  }
}

rl.question("Entrez votre prompte: \n \x1b[32m + \x1b[0m", (prompt) => {
  rl.close();
});
