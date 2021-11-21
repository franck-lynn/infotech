// 为何vb保持一致, 前面统一加了一个 0, 实际不使用
const a = [0, 1, 3, 4, 5, 8, 9, 3, 4, 5, 10, 18, 20] // 页码
const b = [0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2] // 活页
const sum: number = a.length // 13
// console.log(sum)
// 设置2个数组, c 保存连续页码的起始位置和结束位置
// d 保存第几本书
const c: number[] = []
const d: number[] = []
c[1] = a[1] // 1
d[1] = b[1] // 1
let s = 1
let t = a[1] // t = 1
for (let i = 2; i < sum; i++) {
    if (b[i] === b[i - 1] && t + 1 === a[i]) {
        t = a[i]
    } else {
        c[2 * s] = t
        console.log(`第${i}次: c[${2 * s}]=  ${c[2 * s]}`)
        s = s + 1
        console.log(`       s = ${s}`)
        c[2 * s - 1] = a[i]
        console.log(`       c[${2*s -1}] = ${c[2*s -1]} = a[${i}] = ${a[i]}`)
        d[s] = b[i]
        console.log(`       d[${s}] = ${d[s]}`)
        t = a[i]
        console.log(`       t = ${t}`)
    }
}

c[2 * s] = t


// console.log(`第1本书: ${c[1]} - ${c[2]}`)
// for (let i = 2; i < s; i++) {
//     if (d[i] !== d[i - 1]) {
//         console.log(`第${d[i]}本书: ${c[2 * i - 1]} - ${c[2 * i]}`)
//     }
// }

