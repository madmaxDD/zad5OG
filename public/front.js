//frontend stuff

const nick = document.getElementById("nick")
const age = document.getElementById("age").value
const email = document.getElementById("email")
const form = document.getElementById("form")
const nickMessagesEl = document.getElementById("nick-messages")
const ageMessagesEl = document.getElementById("age-messages")
const emailMessagesEl = document.getElementById("email-messages")

form.addEventListener("submit", (e) => {
    const nickMessages = []
    const ageMessages = []
    const emailMessages = []

    if (nick.value === "" || nick.value == null) {
        nickMessages.push("name cant be empty")
    } else if (nick.value.length <= 3) {
        nickMessages.push("name is too short")
    }

    if (nickMessages.length > 0) {
        nickMessagesEl.innerText = nickMessages.join(", ")
        e.preventDefault()
    }

    
    if (age < 100 && age >=18) {
        ageMessages.push("you must be 18 or older, but not tooo old (max age 100)")
    }

    if (ageMessages.length > 0) {
        ageMessagesEl.innerText = ageMessages.join(", ")
        e.preventDefault()
    }

    if (email.value == null) {
        emailMessages.push("email cant be empty")
    } else if (email.value.length <= 3) {
        emailMessages.push("email is too short")
    }

    if (emailMessages.length > 0) {
        emailMessagesEl.innerText = emailMessages.join(", ")
        e.preventDefault()
    }


}) 