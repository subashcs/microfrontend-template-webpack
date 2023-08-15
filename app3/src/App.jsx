import { render } from "solid-js/web";

import Counter from "./Counter";

import "./index.scss";

const App = () => (
  <div class="bg-green-500 mt-10 text-3xl mx-auto max-w-6xl">
    <h1>App3</h1>
    <Counter />
  </div>
);

render(App, document.getElementById("app"));
