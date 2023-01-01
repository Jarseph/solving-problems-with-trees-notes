findKthLargestValue() {
   // Use the existing `dfsInOrder()` method to traverse the tree.
  const values = this.dfsInOrder();
  const kthIndex = values.length - 1;
  
  // Ensure that the index is within the bounds of the array.
  if (kthIndex >= 0) {
    return values[kthIndex];
  } else {
    console.error("k value exceeds the size of the BST.")
}
  
  module.exports = findKthLargestValue;
