import { ListNode } from "../models/ListNode";

function isPalindrome(head: ListNode | null): boolean {
    if(!head?.next) return true;
    // ^ Two pointes in order to find the middle and the end from the linked Lists
    let slow: ListNode | null = head;
    let fast: ListNode | null= head;
 
    while(fast?.next){
        slow = slow!.next;
        fast = fast.next.next;
    }

    // ^ Once the fast reaches the end of the linked lists, slow is going to be the middle from the linked list

    // ^ Now we are going to invert the second linkedlist starting from its middle to the last one

    let firstList: ListNode | null = head;
    let secondList: ListNode | null = invertList(slow);

    // ^ Them both element lists  must be  equal, if there are at least one different, then return false;

    while(secondList){
        if(firstList!.val !== secondList.val) return false;
        firstList = firstList!.next;
        secondList = secondList.next;
    }


    return true;
};

function invertList(head: ListNode | null): ListNode | null{
    let curr = head;
    let prev = null;

    while(curr){
        const nextTemp = curr.next; // store
        curr.next = prev; // invert
        prev = curr // extend
        curr = nextTemp; // next
    }

    return prev;
}


const node4 = new ListNode(1, null)
const node3 = new ListNode(2, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

console.log('head linked list-->', head); // 1 --> 2 --> 2 --> 1 --> null

console.log("is it a palindrome ? --> ", isPalindrome(head)) 