const fs = require('fs')
const process = require('process')
const script_opcodes = process.argv[2].split(",")
const stack_state = process.argv[3].split(",")

STYLE = `<style>
  .text { font: 9px sans-serif; }
  .rect { fill:white;stroke:black;stroke-width:1 }
</style>`

WIDTH=151
COLUMN_WIDTH=50
BLOCK_HEIGHT=10
const rectWithText = (x_offset, rect_y, text_y, text) => {
  return `
<rect x="${x_offset}" y="${rect_y}" width="${COLUMN_WIDTH}" height="10" class="rect"/>
<text x="${x_offset}" y="${text_y}" class="text">${text}</text>
`
}

const scriptRect = (y_offset, text, index) => {
  rect_y = index * BLOCK_HEIGHT + y_offset
  text_y = rect_y + 8
  return rectWithText(0, rect_y, text_y, text)
}

const stackRect = (y_offset, text, index) => {
  rect_y = index * BLOCK_HEIGHT + y_offset
  text_y = rect_y + 8
  return rectWithText(COLUMN_WIDTH * 2, rect_y, text_y, text)
}

const delta = script_opcodes.length - stack_state.length
opcode_y_offset = 20
stack_y_offset = 20
if (delta < 0) { // stack is higher
  opcode_y_offset += (stack_state.length - script_opcodes.length) * BLOCK_HEIGHT
} else { // more opcodes than stack size
  stack_y_offset += (script_opcodes.length - stack_state.length) * BLOCK_HEIGHT
}

contents = script_opcodes.map((element, index) => {
  return scriptRect(opcode_y_offset, element, index)
})

stack_contents = stack_state.map((element, index) => {
  return stackRect(stack_y_offset, element, index)
})

FILE = `<svg width="${WIDTH}" xmlns="http://www.w3.org/2000/svg">
  ${STYLE}${contents.join("")}
  <text x="0" y="10" class="text">Script</text>
  <text x="100" y="10" class="text">Stack</text>
  ${stack_contents.join("")}
</svg>`

fs.writeFileSync('output.svg', FILE)
