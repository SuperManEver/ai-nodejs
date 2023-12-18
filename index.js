import "dotenv/config";

import OpenAI from "openai";

const openAi = new OpenAI();
const results = await openAi.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `You are a helpful AI assistant. Answer the user's questions to the best of you ability.`,
    },
    { role: "user", content: "Hi!" },
  ],
});

console.log(results);
