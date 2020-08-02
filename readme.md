# fake-lit

Fakes a `html` tag for template literals from [lit-html](https://github.com/Polymer/lit-html), so editor plugins like [mjbvz/vscode-lit-html](https://github.com/mjbvz/vscode-lit-html) syntax highlight the html inside.

---

## Usage

``` javascript
// require like this
const html = require('fake-lit')
// or this
const {html} = require('fake-lit')

const highlightThis = content => html`
    <div class='parent'>
        <div class='component'>${content}</div>
    </div>
`
```

`highglightThis` will now be syntax highlighted.

The function itself does nothing, merely joins together all the parts.

---

ISC © 2020 Adam Kiss or whatever.


