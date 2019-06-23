const fs = require('fs')

STYLE = `<style>
  .text { font: 9px sans-serif; }
  .rect { fill:white;stroke:black;stroke-width:1 }
</style>`

const appendRect = (text, index) => {
  rect_y = index * 10
  text_y = rect_y + 8
  return `
<rect y="${rect_y}" width="50" height="10" class="rect"/>
<text y="${text_y}" class="text">${text}</text>
`
}

contents = ["OP_6", "OP_EQUAL"].map((element, index) => {
  return appendRect(element, index)
}).join("")

FILE = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">${STYLE}${contents}</svg>`

fs.writeFileSync('output.svg', FILE)
