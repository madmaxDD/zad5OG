//frontend stuff

const nick = document.getElementById("nick")
const age = document.getElementById("age")
const email = document.getElementById("email")
const form = document.getElementById("form")
const nickMessagesEl = document.getElementById("nick-messages")


form.addEventListener("submit", (e) => {
    const nickMessages = []
    if (nick.value === "" || nick.value == null) {
        nickMessages.push("name cant be empty")
    } else if (nick.value.length <= 3) {
        nickMessages.push("name is too short")
    }

    if (nickMessages.length > 0) {
        nickMessagesEl.innerText = nickMessages.join(", ")
        e.preventDefault()
    }



}) 