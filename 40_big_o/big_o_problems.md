# Big O Problems
For each of these problems, consider the Big O and any optimizations.
  - What is the time complexity?
  - What is the space complexity?
  - Can they be improved? Why or why not?

  Remember REACTO - Optimization comes last. First come up with solutions that work, then make them work well.

  ```
  R E A C T O
  e x p o e p
  p a p d s t
  e m r e t i
  a p o     m
  t l a     i
    e c     z
      h     e
```

## Ransom Note Checker
Given two strings representing your note and a magazine, return a boolean that tells you if you can create the note from the magazine.

*Extra Credit*:
Return something that tells me where in the magazine I can find all the words for my ransom note.


## Pair Sum
Given a sorted array and a number, return true if any pairs of numbers in the array that sum to that number, else return false.


## Binary Search Tree
A binary search tree is a node-based binary tree data structure which has the following properties:

  - The left subtree of a node contains only nodes with values lesser than or equal to the node’s value.
  - The right subtree of a node contains only nodes with values greater than the node’s value.
  - The left and right subtree each must also be a binary search tree.
```
       8
    /     \
   3       10
  / \      / \
 1   6    9   12
    / \      /
   4   7    11
```

  1. How might you create a binary search tree class? What information does a binary search tree need to have?
  2. Write a method that determines if a value is in your binary search tree.
  3. Write a method that inserts a new value where appropriate. Say I wanted to insert the value 5 to the tree above.
    I look at the top of the tree. Since 5 < 8, I now look at the left child.
    5 > 3, so I look at that node's right child, which has a value of 6.
    5 < 6 => look at the left child, 4
    5 > 4 => 4 has no right child, so I insert a new node with value 5.
  4. Write a function that lists the entries in the tree in order. In the example above, it would be 1, 3, 4, 6, 7, 8, 9, 10, 11, 12.
  5. Write a function that list out the entries breadth-first, i.e. row by row. In the example above, this would be 8, 3, 10, 1, 6, 9, 12, 4, 7, 11.
