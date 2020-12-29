import { html } from "htm/react";
import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./count";
import Timings from "./timings";

export function renderReact() {
  const root =
    document.getElementsByTagName("timings-root")[0] ||
    document.createElement("timings-root");
  document.querySelector(".flex-v-box.roam-log-container").prepend(root);

  ReactDOM.render(html` <${Timings} /> `, root);
}