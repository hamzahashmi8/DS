// STRING ANAGRAM
// HELLO ==> HLLOE true
// AJAY ==> AYAJ   true
// BLUB ==> BLUE   false

// No. of letters should remain same, but arrguments can be different.

// conditions: 
// length of 1st string should equal to length of 2nd string
// count each element in string 1 ==> {h:1, e:1, l:2, 0:1}


function IsAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false
    }
    let counter = {}
    for(let element of string1){
        counter[element] = (counter[element] || 0) +1;
        // console.log(counter[element]);
    }
    for(let element of string2){
        if(!counter){
            return false
        }
        counter[element] -=1;
    }
    return true
}

const result = IsAnagram("hello", "lleho")
console.log(result);
