const phoneIR = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const fom = document.getElementById("form")
const inp = document.getElementById("txt")
const Tag = document.getElementById("smal")

const div = document.getElementById("x")
const musicJlo = new Audio("jlo.mp3")

function Run() {
    fom.addEventListener("submit", (event) => {
        event.preventDefault()

        const IR = phoneIR.test(inp.value)

        if(!(IR)) {
            Tag.innerHTML = "لطفا مقدار صحیح را وارد کنید"
        }

        else {
            musicJlo.play()
            div.innerHTML = "<img src='jlo.jpg'>"
            Tag.innerHTML = ''
        }
    })
}