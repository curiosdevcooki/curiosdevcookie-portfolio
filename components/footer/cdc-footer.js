//Built web component for footer:
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
        
      :host {
        font-family: 'Beth+Ellen', cursive;
      }
        section {
          font-family: 'Beth Ellen', cursive;
          font-size: 2rem;
          color: var(--color-white);
        }

        a {
          color: var(--color-white);
          text-decoration: none;
        }

        a:hover {
          color: var(--color-green);
          text-decoration: underline;
        }

        p {
          font-size: clamp(1rem, 3vw, 2rem);
        }
      </style>

        <section>
        <p>✨ Built in 🇪🇺🇩🇪…  with copious amounts of [🫀, 🧠 , ☕️ , 🎉] by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie</a> .✨</p>
        </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);
