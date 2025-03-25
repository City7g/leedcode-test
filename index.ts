import { createCounter } from './resolved/createCounter.ts'

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
