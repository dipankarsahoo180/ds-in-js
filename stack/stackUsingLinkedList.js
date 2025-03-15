//1. use the existing linked list implementation
import {SinglyLinkedList} from "../linkedList/singlyLinkedList.js";

let ll = new SinglyLinkedList();
ll.push('Hey');
ll.push('Hi!');
ll.push('Dipankar');
ll.push('Sahoo');
ll.pop();
ll.traverse();

//2. Create new Linkedlist and use it

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = this.tail = newNode
            this.length = 1;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        this.traverse();
    }
    pop(){
        if(this.length<=1){
            this.head = this.tail = null;
            this.length = 0;
        }else{
            this.head = this.head.next;
            this.length--;
        }
        this.traverse();
    }
    traverse(){
        let value = '';
        let currentNode = this.head;
        while (currentNode != null) {
            value+='=> '+currentNode.value
            currentNode = currentNode.next;
        }
        console.log(this.length+ ' '+value)
    }
}

// let stack  = new Stack();
// stack.push('Hey');
// stack.push('Hi');
// stack.push('Dipankar');
// stack.push('Sahoo');
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();