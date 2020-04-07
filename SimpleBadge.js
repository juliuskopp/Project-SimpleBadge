class SimpleBadge extends HTMLElement {
        constructor() {
            super();
            this._number = null;
        }

        static get observedAttributes() {
            return ['number'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            this._number = newValue;
            this._render();
        }

        connectedCallback() {
            this._render();
        }
        
        get number() {
            return this._number;
        }

        set number(v) {
            this.setAttribute('number', v);
        }

        _render() {
            if (this._number == null) {
                return;
            }

            let span = this.querySelector('span');

            if (span == null) {
                span = document.createElement('span');
                this.appendChild(span);
            }

            span.innerText = this._number;
        }
    }    