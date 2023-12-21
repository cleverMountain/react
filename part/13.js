function getTarget(arr, target) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        var curNum = arr[i];
        var curTarget = (target - curNum);
        var cur = map[curTarget];
        if (cur !== undefined) {
            return [cur, i];
        }
        else {
            map[curNum] = i;
        }
    }
}
console.log(getTarget([1, 2, 3], 3));
