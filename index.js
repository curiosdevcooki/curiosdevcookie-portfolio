function replicateElement(elementId, maxDepth, currentLevel) {
  // Base case:
  if (currentLevel >= maxDepth) {
    return;
  }

  const original = document.getElementById(elementId);

  const parent = original.parentElement;

  // get all children of the parent element
  const children = parent.children;
  console.log("Children:", children);

  if (currentLevel === 0) {
    parent.style.position = 'relative';
    parent.style.zIndex = 2;
  }

  const clone = original.cloneNode(true);

  clone.id = `${elementId}-${currentLevel}`;
  clone.style.position = 'absolute';

  clone.style.left = `${2.3 * currentLevel}rem`;
  clone.style.top = `${2.5 * currentLevel}rem`;

  original.style.opacity = 0.1;
  clone.style.opacity = `${0.1 + currentLevel * 0.2}`;
  clone.style.fontSize = `${5.5 + currentLevel}rem`;
  clone.style.fontFamily = getFontFamilies(currentLevel);

  parent.appendChild(clone);

  // hide elements:
  document.getElementById(`welcome`).style.opacity = 0;

  const cloneZero = document.getElementById(`welcome-0`);
  cloneZero.style.opacity = 0;

  replicateElement(`${elementId}-${currentLevel}`, maxDepth, currentLevel + 1);
}

replicateElement('welcome', 7, 0);

function getFontFamilies(level) {
  const fontFamilies = [
    'Monospace', 'Verdana', 'Courier New',
    'Times New Roman', 'Georgia', 'Arial', 'Impact'
  ];
  return fontFamilies[level % fontFamilies.length];
}