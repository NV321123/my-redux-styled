export function createWrappedButton(text, onClick, className = '') {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  
  if (className) {
    button.className = className;
  }

  return createDivWithChild(button);
}

function createDivWithChild(child) {
  const div = createDiv();
  div.appendChild(child);
  return div;
}

export function createDiv(text, className = '') {
  const div = document.createElement("div");
  if (text !== undefined) {
    div.textContent = text;
  }

  if (className) {
    div.className = className;
  }
  return div;
}