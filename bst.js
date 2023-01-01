bst() {
  // Use the existing `dfsInOrder()` method to traverse the tree.
  const values = this.dfsInOrder();
  // Check if the array returned by the in-order DFS is a sorted array.
  for (let i = 1; i < values.length; i++) {
    // Compare the current and previous values.
    if (values[i] < values[i - 1]) {
      return false
    }
  }
  return true;
}

module.exports = bst;
