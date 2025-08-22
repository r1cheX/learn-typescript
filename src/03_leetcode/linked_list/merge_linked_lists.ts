import { ListNode } from "../models/ListNode";


// ? resultedList -> [dummy: -1] -> [val: 1] -> [val: 2] -> [val: 4] -> null
// ?                                   ^
// ?                               pointer is here

// ? resultedList -> [dummy: -1] -> [val: 1] -> [val: 1] -> [val: 3] -> [val: 4] -> null
// ?                                   ^           ^
// ?                               old pos    new connection

// ? resultedList -> [dummy: -1] -> [val: 1] -> [val: 1] -> [val: 3] -> [val: 4] -> null
// ?                                               ^
// ?                                           pointer moves here

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let resultedList = new ListNode(-1);
    // * Every change from pointer is also going to change in resultedList
    // * Because we are using by reference below;

    // ^ Now the pointer is going to be used to point from every nested from either 
    // ^ list1 or list2 and also to build the structure from resultedList.

    // ^ The pointer acts like a cursor that always points to the "current end" of the list being built
    let pointer = resultedList;

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            pointer.next = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            list2 = list2.next;
        }

        pointer = pointer.next;
    }

    if(list1) pointer.next = list1;
    if(list2) pointer.next = list2;

    return resultedList.next;
};  


// Example of execution 

// Initial:     resultedList -> [dummy] 
//                                 ^
//                             pointer

// After iter 1: resultedList -> [dummy] -> [1] 
//                                            ^
//                                        pointer

// After iter 2: resultedList -> [dummy] -> [1] -> [1] 
//                                                   ^
//                                               pointer

// And so on...


const nodea3 = new ListNode(4, null)
const nodea2 = new ListNode(2, nodea3);
const list1 = new ListNode(1, nodea2);

const nodeb3 = new ListNode(4, null)
const nodeb2 = new ListNode(3, nodeb3);
const list2 = new ListNode(1, nodeb2);

console.log("linked lists --> list 1", list1)
console.log("linked lists --> list 2", list2)
console.log('Merge linked lists-->', mergeTwoLists(list1, list2)); 