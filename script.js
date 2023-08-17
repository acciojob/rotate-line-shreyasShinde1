//your JS code here. If required.
const div = document.createElement("div")
div.style.position = "absolute"
div.id = "line"

let rotation = 0;
setInterval(()=>{
	rotation +=5;
	div.style.transform = `translate(-50%,-50%) rotate(${rotation}deg)`
},50)
document.body.appendChild(div)