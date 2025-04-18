import type { AIMessage } from '../types.ts'
import { openai } from './ai'

interface IRunLLM {
  model?: string,
  messages: AIMessage[],
  temperature?: number
}

export const runLLM = async ({ model = 'gpt-4o-mini', messages, temperature = 0.1 }: IRunLLM) => {
  const response = await openai.chat.completions.create({
    model, messages, temperature
  })
  return response.choices[0].message
}