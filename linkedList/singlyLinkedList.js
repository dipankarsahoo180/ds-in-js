class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push value at the end of linked list
  push(val) {
    if (this.head === null) {
      this.head = this.tail = new Node(val);
    } else {
      let newNode = new Node(val); //create node
      this.tail.next = newNode; //set next node as next of current tail
      this.tail = newNode; //set tail to new node
    }
    this.length++;
  }

  //remove the tail of the linked list (end)
  pop() {
    if (this.length <= 1) {
      let current = this.head;
      this.head = this.tail = null;
      this.length = 0; //return head
      return current;
    } else {
      let current = this.head;
      let tail = current;
      while (current.next != null) {
        tail = current;
        current = current.next;
      }
      this.tail = tail;
      this.tail.next = null;
      this.length--;
      return current; //return tail of the linkedlist before disconnecting
    }
  }

  //traverse throught the nodes of linked list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value, "=>", current.next?.value || null);
      current = current.next; //go to next
    }
  }

  //insert at particular position
  insert(val, position) {
    if (this.length <= 1 || position >= this.length) {
      this.push();
    } else {
      let current = this.head;
      let length = 1;
      while (length != position) {
        current = current.next;
        length++;
      }
      let newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  //remove at particular position
  remove(position) {
    if (this.length <= 1 || position >= this.length) {
      this.pop();
    } else {
      let current = this.head;
      let previous = current;
      let length = 1;
      while (length != position) {
        previous = current;
        current = current.next;
        length++;
      }
      previous.next = current.next; //detach current
      this.length--;
    }
  }

  //removing value from the begining of the linked list
  shift() {
    if (this.length <= 1) this.pop();
    else {
      this.head = this.head.next;
      this.length--;
    }
  }

  //adding value to the beginning of the linked list
  unshift(value){
    if(this.length<=1) this.push();
    else{
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
  }
  
  //reverse the linked list
  reverse(){
    if(this.length<=1) return this.head;
    else{
        let prev = null;
        let next = null;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        while(current!=null){
            //store next
            next = current.next
            current.next = prev;
            prev  = current;
            current = next
        }
        return this;
    }
}
    //get element at particular position
    get(position){
        let current = this.head;
        let currentPosition = 1;
        if(this.length <=1) return this.head;
        else if(position<=this.length){
            while(position!=currentPosition){
                current = current.next;
                currentPosition++;
            }
            return current;
        }else {
            return null;
        }
    }

    //set value at particular position
    set(value,position){
        if(position<=this.length){
            let node = this.get(position);
            if(node){
                node.value = value;
                return true;
            }else 
                return false;
        }else{
            return false;
        }
    }
}

let obj = new SinglyLinkedList();
obj.push("Hey!!");
obj.push("Hi");
obj.push("Dipankar");
obj.push("Sahoo");
obj.insert("lizu", 3);
obj.unshift('Ohh..');
console.log(obj);
obj.traverse();
obj.reverse();
console.log('---------')
obj.traverse();
obj.remove(5);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
obj.reverse()
obj.traverse();
obj.set('sahooo update',2);
console.log(obj.head, obj.tail,obj.get(2));
