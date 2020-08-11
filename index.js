const html = (strings, ...expressions) => (
    strings ? strings
        .reduce((arr, str) => [...arr, str, expressions.shift()], [])
        .join('') : ''
)

module.exports = html
