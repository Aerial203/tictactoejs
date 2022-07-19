const MARK = ["X", "0"]
const textSymbol = document.querySelector(".inputText")
const subHeadingText = document.querySelector(".sub-heading")
let tracer = ""
let players

document.addEventListener("click", e => {
    if (!e.target.matches(".symbol")) return

    const childNode = e.target.children[0]
    add_mark(childNode)
    check_win()
}) 


function add_mark(childNode) {
    if (!tracer){
        let choosePlayer = Math.floor(Math.random() * 2) 
        childNode.textContent = MARK[choosePlayer]
        tracer = MARK[choosePlayer]
        alert(`First player ${tracer}`)
        subHeadingText.textContent = tracer == MARK[0] ? "Player 1(X) And Player 2(0)" : "Player 1(0) And Player 2(X)"
        players = {
            player1: tracer,
            player2: tracer == "X" ? "0" : "X"
        }
    } else if (tracer && !childNode.textContent){
        childNode.textContent = tracer == "X" ? tracer =  MARK[1] : tracer = MARK[0]
    }
}

function check_win() {

    if (check(MARK[0])) {
        if (players.player1 == MARK[0]) {
            subHeadingText.textContent = "Player1 - X wins" 
        } else {
            subHeadingText.textContent = "Player2 - X wins"
        }
          
    }
    if (check(MARK[1])) {
        if (players.player1 == MARK[1]) {
            subHeadingText.textContent = "Player1 - 0 wins"
        } else {
            subHeadingText.textContent = "Player2 - 0 wins" 
        }
    }
}


function get_block() {
    return {
        zero: document.querySelector(".zero").textContent,
        one: document.querySelector(".one").textContent,
        two: document.querySelector(".two").textContent,
        three: document.querySelector(".three").textContent,
        four: document.querySelector(".four").textContent,
        five: document.querySelector(".five").textContent,
        six: document.querySelector(".six").textContent,
        seven: document.querySelector(".seven").textContent,
        eight: document.querySelector(".eight").textContent,
    }
}

function check(mark) {
    if (get_block().zero == mark && get_block().one == mark && get_block().two == mark ||
        get_block().three == mark && get_block().four == mark && get_block().five == mark ||
        get_block().six == mark && get_block().seven == mark && get_block().eight == mark ||
        get_block().zero == mark && get_block().four == mark && get_block().eight == mark ||
        get_block().two == mark && get_block().four == mark && get_block().six == mark ||
        get_block().zero == mark && get_block().three == mark && get_block().six == mark ||
        get_block().one == mark && get_block().four == mark && get_block().seven == mark ||
        get_block().two == mark && get_block().five == mark && get_block().eight == mark
        ) {
            document.addEventListener("click", stopProp, { capture: true })
            return true
    }
}

function stopProp(e) {
    e.stopImmediatePropagation()
}