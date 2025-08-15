// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// * So firsly we are going to apply the "store - invert - extend - next" approach

// ^ So it means that the main philosohpy here is:
// ^ First, we are going to have a "currentNode" variable which is the cursor that means where we are now in the linkedList.
// ^ We are going to have a "previousNode" variable to have the reversed partial or total linkedList
// ^ Then, We Iterate through the linked list, and by each node we are going to assign the next value to the previous variable (reversion)
// ^ In order to iterate we are going to have "next" variable to move forward to the next node from the linkedList


function reverseList(head: ListNode | null): ListNode | null {
    // * We initially assigned it as null because --> last element from that linked list 
    // * As default null is the signal that the linkedlist has ended
    let previousNode = null;
    let currentNode = head; // * 1 --> 2 --> 3 --> nu 

    // * Example:
    // ^ prev 1
    // ? thanks to (curr1.next) = prev
    // ^ 1 (current node1) --> null (prev)

    // ^ prev 2
    // ? thanks to (curr2.next) = prev
    // ^ 2 (current node2) --> (1 --> null) prev 1

    // ^ 3 --> 2 --> 1 --> null
    // ? thanks to (curr3.next) = prev
    // ^ 3 (current node3) --> (2 --> 1 --> null) prev 2

    while (currentNode !== null) {

        const nextNode = currentNode.next; // * Store  - the rest of the linked list because we are going to modify the currentNode 
        // ? 2 --> 3 --> null

        currentNode.next = previousNode; // * Inversion  - the next value is going to be the previousNode.
        // ? 1 --> null

        previousNode = currentNode // * Extend - We just extend the reversed Linkedlist to the previousNode.
        // ? 1 --> null 

        currentNode = nextNode; // * Next - We move forward to the next node
        // ? 2 --> 3 --> null
    }


    return previousNode; // * The reversed linked list
};

// ? Diagram to visualize it event much better

// * Start: 1 -> 2 -> 3 -> null

// * Iteration 1:   null   <-   1       2 -> 3 -> null
// ^                prev      curr         next

// ? Prev: curr.next = prev (1 --> null)

// * Iteration 2:   null <- 1  <- 2     3 -> null
// ^                     prev    curr     next

// ? Prev: curr.next = prev (2 --> 1 --> null)

// * Iteration 3:   null <- 1 <- 2 <-   3   <-   null
// ^                        prev      curr       next        
// ? Prev: curr.next = prev (3 --> 2 --> 1 --> null)


const node4 = new ListNode(4, null)
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

console.log('head linked list-->', head); // 1 --> 2 --> 3 --> null

console.log("reverse linked list --> ", reverseList(head)) // 3 --> 2 --> 1 --> null