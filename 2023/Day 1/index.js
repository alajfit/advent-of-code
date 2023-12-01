const fs = require('fs')

function part1() {
    return fs
        .readFileSync('./input.txt', 'utf-8').split('\n')
        .reduce((acc, line) => { m = line.match(/\d/g); return acc + parseInt(`${m[0]}${m[m.length - 1]}`) }, 0)
}

console.log('Answer: ' + part1()) // 54667

function part2() {
    const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g
    const digitMap = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 }
    const toNum = n => digitMap[n] || n

    return fs
        .readFileSync('./input.txt', 'utf-8').split('\n')
        .reduce((acc, line) => { m = line.match(regex); return acc + parseInt(`${toNum(m[0])}${toNum(m[m.length - 1])}`) }, 0)
}

console.log('Answer: ' + part2())
