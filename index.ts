import 'dotenv/config'
// import { runLLM } from './src/llm'
// import { addMessages, getMessages } from './src/memory'
import { z } from 'zod'
import { runAgent } from './src/agent.ts'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}


const weatherTool = {
  name: 'get_stuff',
  description: `use this to get this weather`,
  parameters: z.object({
    reasoning: z.string().describe('why did you pick this tool?')
  })

}


const response = await runAgent({ userMessage, tools: [weatherTool] })

console.log(response)
//
// await addMessages([{ role: 'user', content: userMessage }])
// const messages = await getMessages()
//
// const response = await runLLM({
//   messages,
// })
//
// await addMessages([{ role: 'assistant', content: response }])
//
// console.log(response)
