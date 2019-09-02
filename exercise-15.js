function groupAnimals(animals) {
    // you can only write your code here!
    var sortedAnimals = animals.sort();
    var tempArr = [];
    var outputArr = [];
    for (var i = 0; i < sortedAnimals.length; i++) {
        if (tempArr.length == 0) {
            tempArr.push(sortedAnimals[i]);
        } else if (sortedAnimals[i - 1].charAt(0) == sortedAnimals[i].charAt(0)) {
            tempArr.push(sortedAnimals[i]);
        } else if (sortedAnimals[i - 1].charAt(0) != sortedAnimals[i].charAt(0)) {
            outputArr.push(tempArr);
            tempArr = [];
            tempArr.push(sortedAnimals[i]);
        }
    }
    outputArr.push(tempArr);
    return outputArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]