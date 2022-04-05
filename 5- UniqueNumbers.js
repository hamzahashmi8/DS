// COUNT UNIQUE NUMBERS IN ARRAY
// [1,1,2,2,3,3,4,4,4,5,5,6,6,7,7,8,8]
//  output ==> 8

// conditions:
// we'll take 2 variables: i,j
//  then check the value of array[i] and array[j]
// if the value is not equal we'll incresase i++, and after increment at the place of array[i] we'll place the value of array[j].

function uniqueValue(array){

    if(array.length){
        let i=0;
        for(let j=1; j<array.length; j++){
            if(array[i] !== array[j]){
                i++;
                array[i] = array[j]
            }
        }return i+1;
    }else{
        throw new Error('array is empty.')
    }
}

const result = uniqueValue([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8])
console.log(result);