function getfreq(arr){
    arr1 = []
    for(i=0; i<=arr.length-1; i++){
        thearr = []
        counter = 0
        for(j=0; j<=arr.length-1; j++){
            // console.log(arr[i], arr[j])
            if(arr[i] == arr[j]){
                // console.log(arr[i], arr[j])
                counter++
            }
        }
        // arr1.push(arr[i], counter)
        // We convert the numbers to a string and concatenate and add a space at the the end so we can use the function ...new Set to omit recurring elements
        arr1.push(arr[i].toString() + ' '.concat(counter.toString()) + ' ')
    }
    
    let uniqueChars = [...new Set(arr1)];
    console.log(uniqueChars);
    
    // We use nested for loop statements, we will now use the spaces in the if condition, each time it detects a space, it will use the slice function using the indices, i,j,k and push that element to an array arrfin
    for(i=0; i<=uniqueChars.length-1; i++){
        // console.log(uniqueChars[i])
        k = 0
        arrfin = []
        for(j=0; j<=uniqueChars[i].length-1; j++){
            if(uniqueChars[i][j] == ' '){
                // console.log(i,k,j)
                // console.log(uniqueChars[i].slice(k,j))
                arrfin.push(parseInt(uniqueChars[i].slice(k,j)))
                k = j + 1
            }
        }
        console.log(arrfin)
        console.log(`${arrfin[0]}'s frequency is ${arrfin[1]}`)
        console.log('========')
    }
}
getfreq([1,15,237,2,15,237])
console.log('========')
getfreq([1,2,15,23,58,3,4,5,23,5,8978,1,8978])

// It is always helpful to output first manually our desired output using exact indices to see the relationship for our looping statements and conditions
// console.log(uniqueChars[0].slice(0,1))
// console.log(uniqueChars[0].slice(2,3))
// console.log('========')
// console.log(uniqueChars[1].slice(0,1))
// console.log(uniqueChars[1].slice(2,3))
// console.log('========')
// console.log(uniqueChars[2].slice(0,2))
// console.log(uniqueChars[2].slice(3,4))
// console.log('========')
// console.log(uniqueChars[3].slice(0,2))
// console.log(uniqueChars[3].slice(3,4))