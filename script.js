const MARK = ["X", "0"]
let tracer = ""
const textSymbol = document.querySelector(".inputText")

// add mark: done
// if already marked cannot add second mark in same place
//check for winner

document.addEventListener("click", e => {
    if (!e.target.matches(".symbol")) return

    const childNode = e.target.children[0]
    add_mark(childNode)
}) 


function add_mark(childNode) {
    console.log(childNode)
    if (!tracer){
        let choosePlayer = Math.floor(Math.random() * 2) 
        childNode.textContent = MARK[choosePlayer]
        tracer = MARK[choosePlayer]
    } else {
        childNode.textContent = tracer == "X" ? tracer =  MARK[1] : tracer = MARK[0]
    }
}