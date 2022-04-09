/* 1. Find the Symmetric Difference 

The mathematical term symmetric difference (△ or ⊕) of two sets is 
the set of elements which are in either of the two sets but not in 
both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, 
A △ B = {1, 4}. Symmetric difference is a binary operation, which 
means it operates on only two elements. So to evaluate an expression 
involving symmetric differences among three elements (A △ B △ C), you 
must complete one operation at a time. Thus, for sets A and B above, 
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
Create a function that takes two or more arrays and returns an array 
of their symmetric difference. The returned array must contain only 
unique values (no duplicates). */

function sym(...args) {
    var arrayOfArrays = args;

    while(arrayOfArrays.length>1){

        var arrayOfDifference = [];

        for(let i = 0; i < arrayOfArrays[0].length; i++){
            if(arrayOfArrays[1].indexOf(arrayOfArrays[0][i]) == -1){
                if(arrayOfDifference.indexOf(arrayOfArrays[0][i]) == -1){
                    arrayOfDifference.push(arrayOfArrays[0][i]);
                }
            }
        }

        for(let j = 0; j < arrayOfArrays[1].length; j++){
            if(arrayOfArrays[0].indexOf(arrayOfArrays[1][j]) == -1){
                if(arrayOfDifference.indexOf(arrayOfArrays[1][j]) == -1){
                    arrayOfDifference.push(arrayOfArrays[1][j])
                }
            }
        }

        arrayOfArrays.shift();
        arrayOfArrays.shift();
        arrayOfArrays.unshift(arrayOfDifference);
    }

    arrayOfDifference.sort(function(a,b){return a-b})
    
    return arrayOfDifference;
}

// Example Arrays

var arr1 = [1, 2, 4]
var arr2 = [5, 3, 2]
var arr3 = [9, 2, 8]

// console.log(sym(arr1, arr2, arr3))



/* 2. Inventory Update

Compare and update the inventory stored in a 2D array against a second 
2D array of a fresh delivery. Update the current existing inventory item 
quantities (in arr1). If an item cannot be found, add the new item and 
quantity into the inventory array. The returned inventory array should 
be in alphabetical order by item. */

function updateInventory(arr1, arr2) {
    var newItems = []

    for(let i = 0; i < arr2.length; i++){
        let result = false;

        for(let j = 0; j < arr1.length; j++){
            if(arr2[i][1] == arr1[j][1]){
                arr1[j][0] += arr2[i][0];
                result = true
            }
        }
        
        if(!result){
            newItems.push(arr2[i]);
        }
    }

    arr1 = [...arr1, ...newItems]

    arr1.sort(function(a,b){
        return (a[1]<b[1])?-1:1;
    })

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [5, "Microphone"],
    [1, "Hair Pin"]
    
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// console.log(updateInventory(curInv, newInv));