const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;

    current = temp;
  }

  return prev;
};

module.exports = reverseList;
