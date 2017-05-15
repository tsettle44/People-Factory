const personForm = document.querySelector('form')
 
const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value

    const colorDiv = `
        <div style="height: 50px; width: 50px; background-color: ${hairColor}"></div>
    `

    const em = document.createElement('ul')
    em.textContent = 'Submission'
    const name = document.createElement('li')
    name.textContent = personName
    const color = document.createElement('li')
    color.textContent = hairColor
    const num = document.createElement('li')
    num.textContent = age
    const place = document.createElement('li')
    place.textContent = birthplace
    em.appendChild(name)
    em.appendChild(color)
    em.appendChild(num)
    em.appendChild(place)
    details.appendChild(em)

}

personForm.addEventListener('submit', handleSubmit)