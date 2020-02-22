let guess, low, high
high = 1e6
low = 1
for (let i = 0; i < 50; i++) {
  guess = Math.floor( (low + high) / 2)
  const result = verify(guess)
  console.log('it: ' + (i+1) + '\t result: ' + result 
    + '\t low: ' + low + '\t high: ' + high + '\t secret: ' + solution)
  if (result === 0) return
  if (result === -1) high = guess
  if (result === 1) low = guess
}

const solution = Math.floor((Math.random() * 1e6) + 1)

const verify =  (guess) => {
  console.log(guess, solution)
  if (guess === solution) return 0
  if (guess > solution) return -1
  if (guess < solution) return 1
}