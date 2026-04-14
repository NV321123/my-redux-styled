import './styles.css';

import { store, increment, decrement } from "./store";
import { createWrappedButton, createDiv } from "./dom";

const firstComponentRoot = document.getElementById("root1");
const secondComponentRoot = document.getElementById("root2");

function firstComponentRender(unsubscribe) {
  firstComponentRoot.innerHTML = "";

  firstComponentRoot.appendChild(createDiv(store.getState(), "state-value"));

  const controls = document.createElement("div");
  controls.className = "controls-group";
  controls.appendChild(createWrappedButton("Increment", increment, "btn btn-increment"));
  controls.appendChild(createWrappedButton("Decrement", decrement, "btn btn-decrement"));
  firstComponentRoot.appendChild(controls);

  firstComponentRoot.appendChild(
    createWrappedButton("Unsubscribe", unsubscribe, "btn btn-unsubscribe")
  );
}

function secondComponentRender(unsubscribe) {
  secondComponentRoot.innerHTML = "";

  secondComponentRoot.appendChild(createDiv(store.getState(), "state-value"));
  secondComponentRoot.appendChild(
    createWrappedButton("Unsubscribe", unsubscribe, "btn btn-unsubscribe")
  );
}

const firstComponentUnsubscribe = store.subscribe(() =>
  firstComponentRender(firstComponentUnsubscribe)
);
const secondComponentUnsubscribe = store.subscribe(() =>
  secondComponentRender(secondComponentUnsubscribe)
);

firstComponentRender(firstComponentUnsubscribe);
secondComponentRender(secondComponentUnsubscribe);