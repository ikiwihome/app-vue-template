import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  const originalConsoleLog = console.log
  console.log = (...args: any[]) => {
    const processedArgs = args.map(arg => {
      if (typeof arg === 'function') {
        return arg.toString()
      }
      return arg
    })
    originalConsoleLog(...processedArgs)
  }
})
