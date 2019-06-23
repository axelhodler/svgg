const fs = require('fs')

STYLE = `<style>
  .text { font: 9px sans-serif; }
  .rect { fill:white;stroke:black;stroke-width:1 }
</style>`

CONTENT = `
<rect width="50" height="10" class="rect"/>
<text y="8" class="text">OP_6</text>
<rect y="10" width="50" height="10" class="rect"/>
<text y="18" class="text">OP_EQUAL</text>`

rects = []

const appendRect = (text) => {
  rect_y = rects.length * 10
  text_y = rect_y + 8
  rects.push(`
<rect y="${rect_y}" width="50" height="10" class="rect"/>
<text y="${text_y}" class="text">${text}</text>
`)
}

appendRect("OP_6")
appendRect("OP_EQUAL")
contents = rects.join("")
FILE = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">${STYLE}${contents}</svg>`

fs.writeFileSync('output.svg', FILE)
