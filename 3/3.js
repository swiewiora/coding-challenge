  let sum = 0
  strings.forEach(string => {
    const parsedString = parseInt(string)
    if(!isNaN(parsedString) && string == parsedString) {
      sum += parsedString
    }
  })
  console.log(sum)
  return sum