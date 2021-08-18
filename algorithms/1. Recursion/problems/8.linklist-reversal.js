'use strict'
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;

        this.tail = newNode

        this.length++
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value,
            next: null
        }
        const leader = this.traverseToindex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++

    }

    traverseToindex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index) {
        //check params
        const leader = this.traverseToindex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }




}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)

console.log("🚀 ~ myLinkedList", myLinkedList)
console.log('8====>', myLinkedList.printList());

function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    const temp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return temp;

}

const revertedLinklist = reverseList(myLinkedList.head);

console.log("🚀 ~ revertedLinklist", revertedLinklist)
