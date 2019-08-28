function balikString(string) {
    // Step 1. Create an empty string that will host the new created string
    var reversedString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (string.length - 1) which corresponds to the 
       last character of the string, "!"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]; // or reversedString = reversedString + string[i];
    }
    /* In Example String Here hello's length equals 5
        For each iteration: i = string.length - 1 and reversedString = reversedString + string[i]
        First iteration:    i = 5 - 1 = 4,         reversedString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         reversedString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         reversedString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         reversedString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         reversedString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return reversedString; // "!dlrow olleh"
}

console.log(balikString('hello world!'));