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
    return input
        .reduce((acc, curr) => 
            acc + Object.values(curr.split(':')[1].split(/,|;/)
                .reduce((colors, color) => {
                    const [num, word] = color.trim().split(' ')
                    if (colors[word] < parseInt(num)) colors[word] = parseInt(num)
                    return colors
                }, { red: 0, green: 0, blue: 0 })).reduce((a, c) => a * c, 1)
        , 0)
}

console.log(part1(inputRows)) // 2512

console.log(part2(inputRows)) // 67335
