import { ListNode } from "../models/ListNode";

// ^ Basically we are going to have 3 sections

// ^ 1. Find the middle --> Based on Floyd's we are going to two pointers.
function reorderList(head: ListNode | null): void {
    if(!head?.next) return; // do nothing if there's no elements;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // ^ When the fast reaches the end of the linked list, the slow pointer will be the middle.
    while(fast?.next){
        slow = slow!.next;
        fast = fast.next.next;
    }

    // ^ Now we have the middle and we have two linked lists, now we are going to inverse from the middle to fast.

    let curr = slow; // ? first 
    let prev = null; // ? prev always start at null 

    while (curr){
        const nextTemp = curr.next; // store 
        curr.next = prev; // inverse; 
        prev = curr; // extend  
        curr = nextTemp; // next 
    }

    // ^ Once we have the inversed linked list in the prev variable;
    // ^ Then we have to just intercalate between the prev and head linkedLists

    let first: ListNode | null = head; // head 1 -> 2 -> 3 -> 4 -> 5
    let second: ListNode | null = prev; // inversedLinkedList 5 --> 4 

    while(second?.next){
        // store
        const temp1: ListNode | null = first!.next;
        const temp2: ListNode | null = second.next;

        // process
        first!.next = second;
        second.next = temp1;

        // next
        first = temp1;
        second = temp2;
    }
};

const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

console.log('head linked list-->', head); // 1 --> 2 --> 3 --> 4 --> 5 --> null

reorderList(head)
console.log("reorder linked list --> ", head) // 1 --> 5 --> 2 --> 4 --> 3 --> null