const html = (strings, ...expressions) => (
    strings
        .reduce((arr, str) => [...arr, str, expressions.shift()], [])
        .join('')
)

module.exports = html
module.exports.html = html
