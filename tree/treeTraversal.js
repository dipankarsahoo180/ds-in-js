class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    delete(value,node=this.root ) {
        if (!node) return null;
    
        if (value < node.value) {
            node.left = this.delete(value,node.left);//recursive call
        } else if (value > node.value) {
            node.right = this.delete(value,node.right);//recursive call
        } else {
            // Node found, handle cases
            if (!node.left && !node.right) {
                return null; // No children, remove node
            } else if (!node.left) {
                return node.right; // One child (right)
            } else if (!node.right) {
                return node.left; // One child (left)
            } else {
                // Two children: find in-order successor (smallest in right subtree)
                let successor = this.minValueNode(node.right);
                node.value = successor.value;
                node.right = this.delete(successor.value,node.right);
            }
        }
        return node;
    }

    minValueNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    insert(value) {
        this.root = this.insertRecursively(value,this.root);
    }

    insertRecursively(value,current) {
        // Base case: if the current node is null, create a new node
        if (current === null) {
            return new Node(value);
        }

        // Recursive case: decide to go left or right
        if (value < current.value) {
            current.left = this.insertRecursively(value,current.left);
        } else if (value > current.value) {
            current.right = this.insertRecursively(value,current.right);
        }
        // If the value is equal, we do nothing (no duplicates allowed)

        return current; // Return the unchanged current node pointer
    }

    dfs(){
        let current = this.root;
        let data = [];
        let queue = [];
        queue.push(current);
        while(queue.length>0){
            let node = queue.shift(); //remove from beginning
            data.push(node.value); //add to end
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log(data);
    }

    //node-->left-->right
    preorder(){
        let data = [];
        const traverse = (node) =>{
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(data);
    }

    //left-->node-->right
    inorder(){
        let data = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        console.log(data)
    }

    //left-->right-->node
    postorder(){
        let data = [];
        const traverse = (node) =>{
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        console.log(data);
    }
}

let bst = new BinarySearchTree();
bst.insert(16);
bst.insert(13);
bst.insert(15);
bst.insert(15);
bst.insert(20);
bst.insert(4);
bst.insert(24);
bst.insert(18);
bst.dfs();
bst.preorder();
bst.inorder();
bst.postorder();
bst.delete(13)
bst.dfs();
console.log(bst);

/**
       16
      /  \
     13   20
    / \   / \
   4  15 18 24
*/