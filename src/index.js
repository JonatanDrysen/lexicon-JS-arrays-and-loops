// task 1
const arr = []
arr.push("hi", "my", "name", "is", "jonis")
console.log("task 1: ", arr)

// task 2
const numbers = [123, 6, 1, 0, 12, 53]
console.log("task 2: ", numbers.map((n) => n * 3))

// task 3
const numbers2 = [1, 2, 56, 3, 0, 81, 5, 7, 9]
const newArr= []
numbers2.forEach((item) => {
    if(item >= 5) {
        newArr.push(item)
    }
})
console.log("task 3: ", newArr)

// task 4
const numbers3 = [13, 4, 75, 1, 45, 7, 673, 0, 95, 12, 9]
let totalSum = 0
numbers3.forEach((item) => totalSum += item)
console.log("task 4: ", totalSum)

// task 5
const sentence = ["the", "fox", "jumped", "over", "the", "turtle"]
sentence.forEach((item) => {
    if(item === "the") {
        console.log("task 5: ", item)
    }
    return;
})

// task 6
const notPoppedArr = ["you", "can't", "see", "me!"]
console.log("task 6: ", notPoppedArr.toSpliced(-1, 1))

// task 7
const numbers4 = [2, 6, 7, 1, 8, 3, 5, 2812, 11]
const biggestNum = numbers4.reduce((biggest, current) => (current > biggest ? current : biggest), numbers4[0])
console.log("task 7: ", biggestNum)

// task 8
const arr1 = ["hello", 234, 9123, "World", "!", 340]
const arr2 = []
arr1.forEach((item) => arr2.push(item))
console.log("task 8: ", arr2)