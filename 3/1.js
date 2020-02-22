for (let i = 1; i < 100; i++) {
    let result = ''
    if (!(i % 3)) result = 'Open'
    if (!(i % 7)) result += 'Source'
    if ( (i % 3) && (i % 7)) result = i.toString()
    console.log(result)
}