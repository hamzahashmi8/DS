//  SUM ZERO with linear time complaxity
// we'll sum left-number (LN) to right number(RN) of array,
// if the answer is grater than 0, then we'll do decrease RN and again perform the sum
// if the answer become less than 0 we'll change (LN),
// we'll do this until the answer is exactly 0

function getSumPair(array){
    let LN = 0;
    let RN = array[array.length-1];

    while(LN < RN){
       let sum = array[LN] + array[RN]
       if(sum === 0){
           return ([array[LN] , array[RN]])
       }else if(sum > 0){
           RN--
       }else{
           LN++
       }
    }

}

const result = getSumPair([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);