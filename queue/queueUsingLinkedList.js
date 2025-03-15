import { SinglyLinkedList } from "../linkedList/singlyLinkedList.js";

let queue = new SinglyLinkedList();
queue.push("Oh");
queue.push("hey");
queue.push("hi");
queue.traverse();
queue.shift();
queue.traverse();
queue.shift();
queue.traverse();
queue.shift();
queue.traverse();
queue.shift();
queue.traverse();
console.log('----------')
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    this.traverse();
  }

  dequeue() {
    if (this.size <=1) {
      this.first = this.last = null;
      this.size = 0;
    }else{
        this.first = this.first.next;
        this.size--;
    }
    this.traverse();
  }

  traverse(){
    let val = '';
    let current = this.first;
    while(current!=null){
        val+=' => '+current.value;
        current = current.next;
    }
    console.log(this.size+' ' +val)
  }
}



let cusromQueue = new Queue();
cusromQueue.enqueue("Oh");
cusromQueue.enqueue("hey");
cusromQueue.enqueue("hi");
cusromQueue.dequeue();
cusromQueue.dequeue();
cusromQueue.dequeue();
// cusromQueue.dequeue();