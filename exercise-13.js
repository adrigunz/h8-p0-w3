function targetTerdekat(arr) {
    // you can only write your code here!
    var counterO = 0;
    var counterX = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            while (arr[i] !== 'x') {
                counterO++;
                i++;
                if (arr[i] === arr[arr.length]) {
                    counterO = 0;
                    break;
                }
            }
            return counterO;
        } else if (arr[i] === 'x') {
            while (arr[i] !== 'o') {
                counterX++;
                i++;
                if (arr[i] === 'x') {
                    counterX = 0;
                }
            }
            return counterX;
        }
    }
}



// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2