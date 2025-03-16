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

    deleteIteratively(value) {
        if (!this.root) return null;
    
        let parent = null;
        let current = this.root;
    
        // Find the node to be deleted and its parent
        while (current && current.value !== value) {
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    
        // Node not found
        if (!current) return null;
    
        // Case 1: Node to be deleted has no children (leaf node)
        if (!current.left && !current.right) {
            if (current === this.root) {
                this.root = null;
            } else if (current === parent.left) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
        // Case 2: Node to be deleted has one child
        else if (!current.left) {
            if (current === this.root) {
                this.root = current.right;
            } else if (current === parent.left) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        } else if (!current.right) {
            if (current === this.root) {
                this.root = current.left;
            } else if (current === parent.left) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        }
        // Case 3: Node to be deleted has two children
        else {
            // Find the in-order successor (smallest in the right subtree)
            let successorParent = current;
            let successor = current.right;
            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }
    
            // Replace current node's value with successor's value
            current.value = successor.value;
    
            // Delete the successor node
            if (successorParent.left === successor) {
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }
        }
    
        return this.root;
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