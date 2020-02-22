if (index === strings.length) return sum
const string = strings[index]
const parsedString = parseInt(string)
index++
if(!isNaN(parsedString) && string == parsedString) {
	sum += parsedString
}

return test4(strings, index, sum)