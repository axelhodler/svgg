const fs = require('fs')

STYLE = `<style>
  .text { font: 9px sans-serif; }
  .rect { fill:white;stroke:black;stroke-width:1 }
</style>`

const appendRect = (rects, text) => {
  rect_y = rects.length * 10
  text_y = rect_y + 8
  rects.push(`
<rect y="${rect_y}" width="50" height="10" class="rect"/>
<text y="${text_y}" class="text">${text}</text>
`)
  return rects
}

let contents = appendRect([], "OP_6")
contents = appendRect(contents, "OP_EQUAL")
contents = contents.join("")
FILE = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">${STYLE}${contents}</svg>`

fs.writeFileSync('output.svg', FILE)
