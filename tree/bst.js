class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        }else {
            let current = this.root;
            while (true) {
                if (value == current.value) {
                    return;
                } else if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return;
                    }
                    current = current.left;
                } else {
                    if (current.right == null) {
                        current.right = newNode;
                        return;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        let level = 1;
        let current = this.root;
        while (current != null) {
            if (value == current.value) {
                return { current, level };
            }
            else if (value < current.value) {
                current = current.left;
                level++;
            } else if (value > current.value) {
                current = current.right;
                level++;
            }
        }
        return { current: null, level: -1 };
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
    
}

let bst = new BinarySearchTree();
bst.insert(16);
bst.insert(13);
bst.insert(15);
bst.insert(15);
bst.insert(20);
bst.insert(4);
bst.insert(6);
bst.insert(7);
bst.insert(5);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(24);
bst.insert(18);
bst.insert(19)
bst.insert(10)
// console.log(bst.find(6));
bst.delete(6);
// console.log(bst.find(6));
console.log(bst);

/**
       16
      /  \
     13   20
    / \   / \
   4  15 18 24
     \    \
      6   19
     / \
    5   7
         \
          9
         / \
        8  10
-------------------
       16
      /  \
     13   20
    / \   / \
   4  15 18 24
     \    \
      7   19
     / \
    5   9
       / \
      8  10
 */