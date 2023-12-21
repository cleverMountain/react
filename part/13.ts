function getTarget(arr: Array<number>, target: number): number[] | undefined {
  const map = {} as any
  for (let i = 0; i < arr.length;  i++) {
    let curNum: number = arr[i]
    let curTarget = (target - curNum) as keyof typeof map
    let cur: number | undefined = map[curTarget]
    if (cur !== undefined) {
      return [cur, i]
    } else {
      map[curNum] = i
    }
  }
}
console.log(getTarget([1, 2, 3], 3))