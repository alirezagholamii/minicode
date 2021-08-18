'use strict'
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function insertNode(head, data) {
    if (head === null) {
        head = new Node();
        head.data = data;
        return head
    }
    if (head.data < data) {
        head.right = insertNode(head.right, data)
    } else {
        head.left = insertNode(head.left, data)
    }
    return head
}

const test1 = insertNode(null,10);
insertNode(test1,15)
insertNode(test1,8)

console.log(test1);