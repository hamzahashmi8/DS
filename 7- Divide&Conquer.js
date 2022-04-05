// DIVIDE & cONQUERER TECHNIQUE
// find the index of given no. in a sorted array
// Two types of searching:
    // 1- linear search
    // 2-binary search --> we'll use this search here

// we'll divide the array and go in that section where that number is lie
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// condition:
// min=0;                               element= 1
// max=array.length -1;                 element = 15
// midIndex = (min+max)/2               (0+14)/2 = 7

    function searchAlgo(array,num){
        let min = 0;
        let max = array.length -1;

        while(min<=max){
            let midIndex = Math.floor((min+max)/2);
            if(array[midIndex]<num){
                min = midIndex+1;
            }else if(array[midIndex]>num){
                max = midIndex -1;
            }else{
                return midIndex
            }
        }
    } 
    const result = searchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7)
    console.log(result);
