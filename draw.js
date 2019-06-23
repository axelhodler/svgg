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

FILE = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">${STYLE}${CONTENT}</svg>`

fs.writeFileSync('output.svg', FILE)
