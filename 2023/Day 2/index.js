const fs = require('fs')
const inputRows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function part1(input) {
    const loadOut = { red: 12, green: 13, blue: 14 }
    return input
        .filter(row => row.split(':')[1].split(/,|;/)
            .every(load => (([num, word]) => parseInt(num) <= loadOut[word])(load.trim().split(' ')))
        ).reduce((acc, curr) => acc + parseInt(curr.split(':')[0].split(' ')[1]), 0)
}

function part2(input) {

}

console.log(part1(inputRows)) // 2512

console.log(part2(inputRows))
