let slow = (fast = head);
let prevent;
while (fast && fast.next) {
  fast = fast.next.next;

  //   翻转
  let next = slow.next;
  slow.next = prevent;
  prevent = slow;
  slow = next;
}
// slow在中间 奇数问题
if (fast) {
  slow = slow.next;
}

while (prevent && slow) {
  if (prevent.val !== slow.val) {
    return false;
  }
  prevent = prevent.next;
  slow = slow.next;
}
return true;
