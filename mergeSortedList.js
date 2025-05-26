class ListNode {
 
  constructor(val = 0, next = null){

    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2){

  let dummyHead = new ListNode();
  let current = dummyHead;

  while (l1 !== null && l2 !== null){

    if (l1.val <= l2.val) {
      
      current.next = l1;
      l1 = l1.next;

      }else{
        current.next = l2;
        l2 = l2.next;
      }

      current = current.next;

   }

   current.next = l1 || l2;

   return dummyHead.next;
   
}

// Helper to create a linked list from array

function createList(arr){
  let dummy = new ListNode();
    
  let current = dummy;

  for(let num of arr){

    current.next = new ListNode(num);

    current = current.next;
  }

  return dummy.next;
 
}


// Helper to print the linked list

function printList(head){
  let result = [];

  while(head){

   result.push(head.val);
   head = head.next;

  }

  console.log(result.join(" -> "));
}


// Test case
let l1 = createList([1, 3, 5]);
let l2 = createList([2, 4, 6]);

let mergedList = mergeTwoLists(l1, l2);
printList(mergedList);

