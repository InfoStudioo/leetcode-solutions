/*
LeetCode 143 — Reorder List

You are given the head of a singly linked list.
The list must be reordered so that:
The first element is followed by the last,
then the second is followed by the second-last, and so on.
You must do this in-place without modifying the values in the nodes (i.e., only node connections can be changed).
*/

// Node class definition
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Main reorder function
function reorderList(head) {
    if (!head || !head.next) return;

    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow.next;
    slow.next = null;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let first = head, second = prev;
    while (second) {
        let tmp1 = first.next;
        let tmp2 = second.next;

        first.next = second;
        second.next = tmp1;

        first = tmp1;
        second = tmp2;
    }
}

// Helper to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper to print linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Test case
const head = arrayToList([1, 2, 3, 4, 5]);
console.log("Before:");
printList(head);
reorderList(head);
console.log("After:");
printList(head);
