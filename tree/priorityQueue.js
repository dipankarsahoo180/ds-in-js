class Node{
    constructor(priority,value){
        this.priority = priority;
        this.value = value;
    }
}

class PriorityQueue{
    constructor(){
        this.data=[];
    }

    insert(priority,value){
        let node = new Node(priority,value);
        this.data.push(node);
        let idx = this.data.length-1;
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.data[parentIdx];
            if(node.priority>parent.priority) break;
            //swap parent and node
            this.data[idx] = parent;
            this.data[parentIdx] = node;
            //set current index to parent index for comparison
            idx = parentIdx;
        }
        return this.data[0];
    }

    extractMax(){
        //first swap first and last
        [this.data[0],this.data[this.data.length-1]] = [this.data[this.data.length-1],this.data[0]];
        //remove the last element
        let node = this.data.pop();
        let idx =0;
        let child = 0;
        //check if 2x+1 > length-1,
        // array compare limit reached, then nothing to swap
        //so enter loop only if length is more than 2,else case is handled above
        while (this.data.length-1>2*idx) {
            //if priority is already min, do nothing
            if(this.data[idx].priority<
                Math.min(
                    this.data[(2*idx)+1].priority,
                    (this.data.length>2*idx+2?this.data[(2*idx)+2].priority:Infinity)) )
            break;

            //if 2x+2's priority is less than 2x+1's prioirty 
            //set child to 2x2 for swap with current
            if(this.data[(2*idx)+2] && this.data[(2*idx)+2].priority<this.data[(2*idx)+1].priority) 
                child = (2*idx)+2;
            //else swap with 2x+1
            else child = (2*idx)+1;
            
            //swap child with current
            [this.data[idx],this.data[child]] = [this.data[child],this.data[idx]];
            //set idx to child idx after swapping for next cmoparison
            idx = child;
        }
        return node;
    }
}

let priorityQueue = new PriorityQueue();
console.log(priorityQueue.insert(10,30));
console.log(priorityQueue.insert(9,31));
console.log(priorityQueue.insert(5,17));
console.log(priorityQueue.insert(4,25));
console.log(priorityQueue.insert(3,19));
console.log(priorityQueue.insert(122,18));
console.log(priorityQueue.insert(2,20));
console.log(priorityQueue.insert(1,16));
priorityQueue.data.map((data=>console.log(data.value,'-->',data.priority)));
console.log('--------removal start-----------');
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
