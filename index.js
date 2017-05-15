const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('div.details')

    const personName = form.personName.value

    details.textContent = personName
}