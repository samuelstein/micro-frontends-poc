/*import React from "react";

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"lightblue"
    }}>
      <h1>App 2</h1>
    </div>
  )
}

export default App;*/


class TestWebcomponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `
    <style>
    div{
      background: red;
    }
    </style>
    <div>
    <h1>App 2</h1>
    <p>Web Components</p>
    </div>
    `
  }
}

window.customElements.define("test-webcomponent", TestWebcomponent)