function removeNthFromEnd(head, n) {
  let dummyHead = { next: head };
  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
}

module.exports = removeNthFromEnd;
