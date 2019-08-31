function pasanganTerbesar(num) {
    // you can only write your code here!
    var arr = num.toString().split('');
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
        var duo = Number(arr[i] + arr[i + 1]);
        if (duo > largest) {
            largest = duo;
        }
    }
    return largest;
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99