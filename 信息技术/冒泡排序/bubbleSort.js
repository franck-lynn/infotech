
const arr = [3, 2, 4, 9, 1, 5, 7, 6, 8]


const bubbleSort1 = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                const tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}
console.log(bubbleSort1(arr))


const findMin = (arr) => {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++){
        if(arr[i] < arr[0]){
            min = arr[i]
        }
    }
    return min
}

console.log(findMin(arr))