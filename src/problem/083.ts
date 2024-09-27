//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // store the param node in a variable, this is needed in order to modify `next` while keeping `head`
  let current = head;

  // while `current` is not null, as `current` can be either `ListNode` or `null`,
  while (current) {
    //while `next` node is not `undefined` or `null`, and its value and the `current.value` are same
    while (current.next && current.next.val === current.val) {
      // skip by changing the `next` to `next.next`

      current.next = current.next.next;
    }
    //after checking `current` value and `next` value until they are not same, change the `current` node to `current.next` which means move to the next distinct node.
    current = current.next;
  }

  //return head
  return head;
}
