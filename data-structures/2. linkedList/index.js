//  1-->  10-->5-->16
// https://visualgo.net/en/list
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
/*
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log("🚀 ~ file: index.js ~ line 11 ~ myLinkedList", myLinkedList)
myLinkedList.prepend(1)
console.log("🚀 ~ file: index.js ~ line 38 ~ myLinkedList.prepend(1)", myLinkedList)
console.log('8====>', myLinkedList.printList());
myLinkedList.insert(2, 99)
console.log('8====>', myLinkedList.printList());
myLinkedList.remove(2)
console.log('8====>', myLinkedList.printList());
*/

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
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
      next: null,
      prev: null
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;

    this.tail = newNode

    this.length++
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode;
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
      next: null,
      prev: null
    }
    const leader = this.traverseToindex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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
    unwantedNode.next.prev = leader

    this.length--;
  }




}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.append(13);
console.log('8====>', myLinkedList);
myLinkedList.remove(1);
console.log('8====>', myLinkedList);