// CHECK THAT THE ARRAY2 CONTAINS THE SQUARE ELEMENT OF ARRAY1
// array1 = [1,2,3,4], array2 = [1,9,4,16]

function isSquareCheck(array1, array2){
    for(let i=0; i<array1.length; i++){
        let isSquare= false;
        for(let j=0; j<array2.length; j++){
            if(array1[i] * array1[i] === array2[j]){
                isSquare = true
            }
            if(j=== array2.length-1){
                if(!isSquare){
                    return false
                }
            }
        }
    }
    return true
}

const result = isSquareCheck([1,2,3,4], [1,9,4,16])
console.log(result);