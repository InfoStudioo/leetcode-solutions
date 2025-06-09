/*
Given the head of a linked list, remove the n-th node from the end of the list and return its head.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}

// Helper: Convert array to Linked List
function arrayToList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper: Convert Linked List to array
function listToArray(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// ---------- Test Cases ----------
let list = arrayToList([1,2,3,4,5]);
let updated = removeNthFromEnd(list, 2);
console.log(listToArray(updated)); // [1,2,3,5]

list = arrayToList([1]);
updated = removeNthFromEnd(list, 1);
console.log(listToArray(updated)); // []

list = arrayToList([1,2]);
updated = removeNthFromEnd(list, 1);
console.log(listToArray(updated)); // [1]
