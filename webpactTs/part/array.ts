let arr: number[] = [1, 2] // 全是number
let arr1: Array<string | number> = ['a', 'b'] // 全是string
let arr2: Array<void> = [undefined] // 没有类型
let arr3: Array<any | string> = [undefined, null, 'str', 123] // 任意类型


// 联合类型
let arr4: (number | string)[] = [1, 2, 'string']
let arr5:((number | number[])[] | string)[] = [[1, [1]], 'stri']


// 元组 可选元素
let arr6: [number, string?] = [1, '12']
let arr7: [number, ...number[]] = [1,2, 3]
arr6.push(10)
console.log(arr6)