#Event listener and todolist part(index.html):
const button = document.querySelector('button')
const container = document.querySelector('div')
const body = document.querySelector('body')

const callback = (e) => {
const {offsetX:x, offsetY:y} = e
// console.log({x,y})
const ele = document.createElement('div')
ele.style = `width:3px; height:3px; position:absolute; left:${x}px; top:${y}px; background: black; `
body.appendChild(ele)

}

body.addEventListener('mousemove', callback)
(click, keydown, and many more)
