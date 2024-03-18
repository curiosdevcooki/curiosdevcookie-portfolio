
function replicateElement(elementId, maxDepth, currentLevel) {
  // Base case: if the current level equals the max depth, stop recursion
  if (currentLevel >= maxDepth) {
    return;
  }

  // Find the element to replicate
  var original = document.getElementById(elementId);
  if (!original) {
    console.error('Element not found:', elementId);
    return;
  }

  // Ensure the original container is positioned relatively to anchor absolute children
  if (currentLevel === 0) {
    original.style.position = 'relative';
  }

  // Clone the original element
  var clone = original.cloneNode(true); // deep clone

  // Modify the clone's ID to avoid duplicate IDs in the DOM and adjust styles for overlap
  clone.id = `${elementId}-clone-${currentLevel}`;
  clone.style.position = 'absolute';
  clone.style.left = `${0.5 * currentLevel}rem`; // Horizontal movement, adjust as needed
  clone.style.top = `${0.5 * currentLevel}rem`; // Vertical movement, adjust as needed

  // Append the cloned element to the original one (or to the main container for positioning)
  original.appendChild(clone); // Append to the original to keep it all in one container

  // Recur with incremented level
  replicateElement(`${elementId}-clone-${currentLevel}`, maxDepth, currentLevel + 1);
}

// Initialize the replication process
replicateElement('portrait-section', 7, 0);
