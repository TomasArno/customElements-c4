// import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

export function fontsEl() {
  class Fonts extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.textContent = `
        .title {
          margin: 20px;  

          color: orange;
          font-size: 52px;
          font-weight: bold;
        }
        
        .subtitle {
            margin: 60px 20px;
            color: purple;
            font-size: 38px;
        }
        
        .ninguna {
            font-size: 18px;
        }
        `;
      shadow.appendChild(style);

      const type = this.getAttribute("type");
      var font = document.createElement("p");

      if (type == "title") {
        font.classList.add("title");
        font.textContent = this.textContent;
      }
      if (type == "subtitle") {
        font.classList.add("subtitle");
        font.textContent = this.textContent;
      }

      shadow.appendChild(font);
    }
  }
  customElements.define("custom-fonts", Fonts);
}
