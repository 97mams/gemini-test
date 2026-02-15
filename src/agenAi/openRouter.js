import { OpenRouter } from "@openrouter/sdk";

const apiKey = process.env.GEMINI_API_KEY;

export async function generate(prompt) {
  const context = `Generate a short Git commit message in English based on this git diff.

  Format:
  <type>: <body>

  Rules:
  - Use conventional types (feat, fix, refactor, chore, docs, test)
  - Present tense
  - One line only

  Git diff:${prompt}`;

  const openrouter = new OpenRouter({
    apiKey: apiKey,
  });

  const stream = await openrouter.chat.send({
    chatGenerationParams: {
      model: "arcee-ai/trinity-large-preview:free",
      messages: [
        {
          role: "user",
          content: context,
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
