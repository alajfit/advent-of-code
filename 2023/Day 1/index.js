const fs = require('fs')

function part1() {
    return fs
        .readFileSync('./input.txt', 'utf-8').split('\n')
        .map(line => { m = line.match(/\d/g); return 10 * parseInt(m[0]) + parseInt(m[m.length - 1]) })
        .reduce((acc, curr) => acc + curr, 0)
}

console.log('Answer: ' + part1()) // 54667

function part2() {
    const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g
    const digitMap = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 }
    const toNum = n => parseInt(digitMap[n] || n)

    return fs
        .readFileSync('./input.txt', 'utf-8').split('\n')
        .map(line => { m = line.match(regex); return 10 * toNum(m[0]) + toNum(m[m.length - 1]) })
        .reduce((acc, curr) => acc + curr, 0)
}

console.log('Answer: ' + part2())
