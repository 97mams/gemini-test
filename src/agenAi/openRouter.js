import { OpenRouter } from "@openrouter/sdk";

const apiKey = process.env.GEMINI_API_KEY;

export async function generate(prompt) {
  const openrouter = new OpenRouter({
    apiKey: apiKey,
  });

  const stream = await openrouter.chat.send({
    chatGenerationParams: {
      model: "arcee-ai/trinity-large-preview:free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: true,
    },
  });

  let response = "";
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      response += content;
      process.stdout.write(content);
    }

    if (chunk.usage) {
      console.log("\nReasoning tokens:", chunk.usage.reasoningTokens);
    }
  }
}
