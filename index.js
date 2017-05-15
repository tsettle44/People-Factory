const personForm = document.querySelector('form')

personForm.onsubmit = 

const handSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector(`.details`)

    const personName = form.personName.value
    const hairColor = form.personName.value
    const age = form.personName.value
    const birthplace = form.personName.value

    const colorDiv = `
        <div style="height: 50px; width: 50px; background-color: ${hairColor}"></div>
    `

    // details.innerHTML = `<em>${personName}</em>`

    // const em = document.createElement('em')
    // em.textContent = personName
    // details.appendChild(em)

    details.innerHTML = `
        <ul>
            <li>Name: ${personName}</li>
            <li>Hair Color: ${hairColor}</li>
            <li>Age: ${age}</li>
            <li>Birthplace: ${birthplace}</li>
        </ul>
    `
}

person.addEventListener('submit', handleSubmit)