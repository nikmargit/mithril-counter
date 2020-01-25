import m from "mithril";
function Counter() {
  var count = 0;
  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }
  function reset() {
    count = 0;
  }
  return {
    view: () =>
      m(".container", [
        m(".counter", count),
        m("button.button.button-green", { onclick: increment }, "+"),
        m("button.button.button-orange", { onclick: decrement }, "-"),
        m("button.button.button-red", { onclick: reset }, "Reset")
      ])
  };
}
export default Counter;
