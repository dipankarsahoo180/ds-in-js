class Heap{
    constructor(){
        this.data=[];
    }

    insert(value){
        this.data.push(value);
        let idx = this.data.length-1;
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.data[parentIdx];
            if(value<=parent) break;
            //swap parent and value
            this.data[idx] = parent;
            this.data[parentIdx] = value;
            //set current index to parent index for comparison
            idx = parentIdx;
        }
        return this.data;
    }

    extractMax(){
        //first swap first and last
        [this.data[0],this.data[this.data.length-1]] = [this.data[this.data.length-1],this.data[0]];
        //remove the last element
        this.data.pop();
        let idx =0;
        let child = 0;
        //check if 2x+1 > length-1,
        // array compare limit reached, then nothing to swap
        //so enter loop only if length is more than 2,else case is handled above
        while (this.data.length-1 > 2*idx) {
            //if value is already greater, do nothing
            if(this.data[idx]> Math.max(this.data[(2*idx)+1],this.data[(2*idx)+2])) 
            break;

            //if 2x+2 is greater than 2x+1 set child to 2x2 for swap with current
            if(this.data[(2*idx)+2]>this.data[(2*idx)+1]) 
                child = (2*idx)+2;
            //else swap with 2x+1
            else child = (2*idx)+1;
            
            //swap child with current
            [this.data[idx],this.data[child]] = [this.data[child],this.data[idx]];
            //set idx to child idx after swapping for next cmoparison
            idx = child;
        }
        return this.data;
    }
}

let heap = new Heap();
console.log(heap.insert(50));
console.log(heap.insert(30));
console.log(heap.insert(20));
console.log(heap.insert(10));
console.log(heap.insert(5));
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
let heap1 = new Heap();
console.log(heap1.insert(41));
console.log(heap1.insert(39));
console.log(heap1.insert(33));
console.log(heap1.insert(58));
console.log(heap1.insert(18));
console.log(heap1.insert(27));
console.log(heap1.insert(12));
console.log(heap1.insert(55));
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());
console.log(heap1.extractMax());