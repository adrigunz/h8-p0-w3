function palindrome(kata) {
    // you can only write your code here!
    // Split, reverse and join string to get reversed text
    var kataKebalik = kata.toLowerCase().split('').reverse().join('');
    if (kata === kataKebalik) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false