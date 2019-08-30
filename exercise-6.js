function angkaPalindrome(num) {
    // you can only write your code here!
    function Palindrome(num) {
        var num1 = num.toString().split('').reverse().join('');
        return Number(num1) === num;
    }
    if (Palindrome(num)) {
        num++;
    }
    while (!Palindrome(num)) {
        num++;
    }
    return num;
}




// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001