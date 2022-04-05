// LARGEST SUM
// count largest sum of consective elements
// [1,2,3,4,3,5,4,6,7,8]
// num = 4
// sum = 25
// conditions:
// num should not be grater than array.length
// formula: total_no_of_array + number + 1 = total_Number of loops


function findLargest(array,num){
    if(num>array.length){
        throw new Error("number should not be grater than array.length")
    }else{
        let max= 0;
        for(let i = 0; i< array.length - num +1; i++){
            let temp = 0;
            for(let j=0; j<num; j++){
                temp += array[i+j]
            }
            max= temp;
        }
        return max
    }
}

const result = findLargest([1,2,3,4,3,5,4,6,7,8],4)
console.log(result);