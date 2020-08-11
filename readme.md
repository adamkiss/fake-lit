# fake-lit [![The badge](https://img.shields.io/npm/v/fake-lit?style=for-the-badge)](https://www.npmjs.com/package/fake-lit)

Fakes a `html` tag for the template literals - like [lit-html](https://github.com/Polymer/lit-html) does - so any editor plugins like [mjbvz/vscode-lit-html](https://github.com/mjbvz/vscode-lit-html) highlight the html inside.

---

## Usage

``` javascript
// options! like this:
const html = require('fake-lit')

const highlightThis = content => html`
    <div class='parent'>
        <div class='component'>${content}</div>
    </div>
`
```

`highglightThis` will now have highlighted syntax.

The function itself does nothing, merely joins together all the parts.

---

ISC © 2020 Adam Kiss or whatever.


