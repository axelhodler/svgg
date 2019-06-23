const fs = require('fs')
const process = require('process')

STYLE = `<style>
  .text { font: 9px sans-serif; }
  .rect { fill:white;stroke:black;stroke-width:1 }
</style>`

WIDTH=50
const appendRect = (text, index) => {
  rect_y = index * 10
  text_y = rect_y + 8
  return `
<rect y="${rect_y}" width="${WIDTH}" height="10" class="rect"/>
<text y="${text_y}" class="text">${text}</text>
`
}

contents = process.argv[2].split(",").map((element, index) => {
  return appendRect(element, index)
})

FILE = `<svg width="${WIDTH}" xmlns="http://www.w3.org/2000/svg">${STYLE}${contents}</svg>`

fs.writeFileSync('output.svg', FILE)
