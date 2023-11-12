const input = document.querySelector('input')
const btn = document.querySelector('.ok')
const resNumber = document.querySelector('#number')
const result = document.querySelector('.result')


function btnAtion() {
    btn.addEventListener('click', () => {
        const user = parseInt(input.value)
        const comp = Math.floor(Math.random()*10)+1
        console.log(user)
        console.log(comp)

        resNumber.innerHTML = `your: ${user} / computer: ${comp}`

        if (user > 10 || user < 1 || isNaN(user)) {
            result.innerHTML = "your number should not be more than 10. try again";
        } else {
            comparison(user, comp);
        }
    })
}


function comparison(userN, compN) {
    if (userN > compN) {
        result.innerHTML = 'You win'
    } else if (userN < compN) {
        result.innerHTML = 'You lose'
    } else {
        result.innerHTML = 'draw'
    }
}

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        btnAtion()
        btn.click()
    }
})