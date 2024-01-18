//frontend stuff

const nick = document.getElementById("nick")
const age = document.getElementById("age")
const email = document.getElementById("email")
const form = document.getElementById("form")
const nickMessagesEl = document.getElementById("nick-messages")
const ageMessagesEl = document.getElementById("age-messages")
const emailMessagesEl = document.getElementById("email-messages")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
    const nickMessages = []
    const ageMessages = []
    const emailMessages = []


    if (nick.value === "" || nick.value == null) {
        nickMessages.push("name cant be empty")
    } else if (nick.value.length <= 2) {
        nickMessages.push("name is too short")
    }

    if (nickMessages.length > 0) {
        nickMessagesEl.innerText = nickMessages.join(", ")
        e.preventDefault()
    } else {
        nickMessagesEl.innerText = ""; // Wyczyść komunikat, jeśli nie ma błędów
    }

    console.log(age.value)
    if ((age.value === "" || age.value == null)) {
        ageMessages.push("age cant be empty")
    } else if (parseInt(age.value) > 100 || parseInt(age.value)  < 18) {
        ageMessages.push("you must be 18 or older, but not tooo old (max age 100)")
        console.log(age.value)
    }

    if (ageMessages.length > 0) {
        ageMessagesEl.innerText = ageMessages.join(", ")
        e.preventDefault()
    } else {
        ageMessagesEl.innerText = ""; // Wyczyść komunikat, jeśli nie ma błędów
    }

    if ((email.value === "" || email.value == null)) {
        emailMessages.push("email cant be empty")
    } else if (!emailRegex.test(email.value)) {
        emailMessages.push("Invalid email address");
    }

    if (emailMessages.length > 0) {
        emailMessagesEl.innerText = emailMessages.join(", ")
        e.preventDefault()
    } else {
        emailMessagesEl.innerText = ""; // Wyczyść komunikat, jeśli nie ma błędów
    }
}) 