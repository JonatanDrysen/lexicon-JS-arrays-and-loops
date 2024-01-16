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
