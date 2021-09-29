var form = document.querySelector('#login')

form.onsubmit = function(event) {
    event.preventDefault()

    var email = this.email.value
    var password = this.password.value

    if (email !== 'johndoe@mail.com')
        return this.email.classList.add('input--error')

    if (password !== '123123123')
        return this.password.classList.add('input--error')

    alert('you are logged in!')
}