/**
 * Averages input values (I origionally wrote this for only 3 but thought
 * I would challenge myself to make it a bit more fun)
 * @args ...args: any number of values
 * @return rounded average of values if valid args else -1
 */
function averageThreeNumbers(...args){
    try {
        return Math.round(args.reduce((currSum, currVal) => {return currSum + currVal}, 0) / args.length)
    } catch(ReferenceError){
        console.log(ReferenceError)
        return -1
    }
}

function createSentence(num, noun){
    return `On average, a Berkeley student has ${num} ${noun}s.`
}

function getRandomNum(max){
    return Math.round(Math.random() * max)
}
const x = getRandomNum(20)
const y = getRandomNum(10)
const z = getRandomNum(13)
const avg = averageThreeNumbers(x, y, z)
const sentence = createSentence(avg, "turtle")
console.log(sentence)
