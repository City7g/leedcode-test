const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const t = new Date()
sleep(100).then(() => {
  console.log(new Date() - t)
})

console.log(123)
