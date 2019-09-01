function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var i = [];
    var j = [];
    var k = [];
    var newArr = [i, j, k];
    for (var a = 0; a < arr.length; a++) {
        if (arr[a] % 2 === 0 && arr[a] % 3 !== 0) {
            i.push(arr[a]);
        } else if (arr[a] % 2 === 1 && arr[a] % 3 !== 0) {
            j.push(arr[a]);
        } else if (arr[a] % 3 === 0) {
            k.push(arr[a]);
        }
    }
    return newArr;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]