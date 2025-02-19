const input1  = [1,2,3,2,1,1];
const input2  = [4,1,9,5,1,4,90,1];

function frequencyCounters(){
    if (input1.length <= input2.length){
        for(let i=0;i<input1.length;i++){
            let correctIndex = input2.indexOf(input1[i]**2)
            if(correctIndex == -1) return false;
            input2.splice(correctIndex,1);
            console.log(input2);
        }
        return true;
    }
}

//console.log(frequencyCounters()); // O(n log(n))

function frequencyCounterBetter(){
    if(input1.length <= input2.length){
        inputFrequency1 = {};
        inputFrequency2 = {};
        for(let i of input1){
            inputFrequency1[i] = (inputFrequency1[i] || 0) +1
        }
        for(let i of input2){
            inputFrequency2[i] = (inputFrequency2[i]||0) +1
        }

        for(let i of input1){
            if(inputFrequency1[i] > inputFrequency2[i**2]) return false;
        }
        return true;
    }
}

//console.log(frequencyCounterBetter()) // O(3n) == O(n)


const checkAnagram = (str1,str2) =>{
    console.log(str1,str2);
    for(let i of str1.toLowerCase()){
        if(!str2?.includes(i)) return false;
        str2 = str2.replace(i,'');
    }
    console.log(str1,str2);
    return true;
}

console.log(checkAnagram('anagram', 'nagarawm'));

