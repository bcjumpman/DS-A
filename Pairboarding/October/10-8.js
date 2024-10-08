// * BRIAN
/*

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.


Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // Input: head = [1,4,3,2,5,2], x = 3

  // return head if head is null or empty
  if (!head) return head;

  // creates a new node for less values than x
  let LessNode = new ListNode(0);
  // creates a new node for greater values that x
  let GreatNode = new ListNode(0);

  // assign lessernode to less variable
  let less = LessNode;
  // assign greaternode to greater variable
  let great = GreatNode;

  // check head is null or not
  while (head !== null) {
    // (1 < 3)
    // (4 < 3)
    // (3 < 3) not less than x so
    // (2 < 3)
    // (5 < 3)
    // (2 < 3)
    if (head.val < x) {
      //  less.next = 1
      //  less.next = 2
      //  less.next = 2
      less.next = head;
      //  less = 1
      //  less = 1 -> 2
      //  less = 1 -> 2 -> 2  : final less
      less = less.next;
    } else {
      //  great.next = 4
      //  great.next = 3
      //  great.next = 5
      great.next = head;
      //  great = 4
      //  great = 4 -> 3
      //  great = 4 -> 3 -> 5 : final great
      great = great.next;
    }
    // head = 1.next => 4
    // head = 4.next => 3
    // head = 3.next => 2
    // head = 2.next => 5
    // head = 5.next => 2
    // head = 2.next => null
    head = head.next; // move head val to next

    great.next = null;

    // less.next = 4->3->5
    less.next = GreatNode.next;

    // result lessNode. next = 1->2->-2->4->3->5
  }

  return LessNode.next;
};

//* AUSTINS
// var maxVowels = function (s, k) {
//   // identify vowels
//   const vowels = ["a", "e", "i", "o", "u"];
//   // init substring and result amount
//   const sub = [];
//   let result = 0;

//   //   iterate through strings to count vowels
//   for (let i = 0; i < s.length; i++) {
//     // find all vowels and push vowels to sub
//     if (vowels.includes(s[i])) {
//       sub.push(s[i]);
//       //   console.log("SUB", sub);
//       result++;
//     }
//   }
//   //   for loop that limit strins to length k
//   for (let j = 0;  j < k; j++)

//   return Math.max(result);
// };

// // Example 1:

// // Input: s = "abciiidef", k = 3
// // Output: 3
// // Explanation: The substring "iii" contains 3 vowel letters.
// console.log(maxVowels("abciiidef", 3));

// // Example 2:
// // Input: s = "aeiou", k = 2
// // Output: 2
// // Explanation: Any substring of length 2 contains 2 vowels.
// console.log(maxVowels("aeiou", 2));
// // Example 3:
// // Input: s = "leetcode", k = 3
// // Output: 2
// // Explanation: "lee", "eet" and "ode" contain 2 vowels.
// console.log(maxVowels("leetcode", 3));
