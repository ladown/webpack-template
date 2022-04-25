"use strict";

import "./pug-files";
import "../scss/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const Body = {
    node: document.body,

    mod: "js-lock",

    lock() {
      this.node.classList.remove(this.mod);
    },

    unlock() {
      this.node.classList.add(this.mod);
    },
  };
});
