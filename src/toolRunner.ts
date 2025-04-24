import type OpenAI from 'openai'
import { generateImage, generateImageToolDefinition } from './tools/generateImage.ts'
import { reddit, redditToolDefinition } from './tools/reddit.ts'
import { dadJoke, dadJokeToolDefinition } from './tools/dadJoke.ts'

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}')
  }

  switch (toolCall.function.name) {
    case generateImageToolDefinition.name:
      return generateImage(input)

    case redditToolDefinition.name:
      return reddit(input)

    case dadJokeToolDefinition.name:
      return dadJoke(input)

    default:
      return `Never run this tool:${toolCall.function.name} again, or else!`
  }
}


// https://oaidalleapiprodscus.blob.core.windows.net/private/org-9wIgdaeiHaqQ8SX7VfWhnGQP/user-uHp4mO38FYvz9xC7V2G3rtj2/img-a1t4tGComwQxfjx3ge9pPEqO.png?st=2025-04-24T03%3A58%3A30Z&se=2025-04-24T05%3A58%3A30Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=475fd488-6c59-44a5-9aa9-31c4db451bea&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-23T05%3A44%3A37Z&ske=2025-04-24T05%3A44%3A37Z&sks=b&skv=2024-08-04&sig=hk70%2BBb3P57QwGmtQ/73yatr65aEirvZ0dxI3tJXR50%3D