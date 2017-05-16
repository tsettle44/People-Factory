const personForm = document.querySelector('form')
 
const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    // const personName = form.personName.value
    // const hairColor = form.hairColor.value
    // const age = form.age.value
    // const birthplace = form.birthplace.value

    // const colorDiv = `
    //     <div style="height: 50px; width: 50px; background-color: ${hairColor}"></div>
    // `
    const ul = document.createElement('ul')
    ul.textContent = 'Submission'
    details.appendChild(ul)

    const labels = document.getElementsByTagName('label')

    for(var i = 0; i < form.length - 1 ; i++) {
        if(i == 1) {
            const colorDiv = `<div style="height: 20px; display: inline-block; width: 150px; background-color: ${form[i].value}"></div>`
            const list = document.createElement('li')
            list.innerHTML = labels[i].innerText + ": " + colorDiv
            ul.appendChild(list)
        } else {
            const list = document.createElement('li')
            list.textContent = labels[i].innerText + ": " + form[i].value
            ul.appendChild(list)      
        }
    }

    
    // const em = document.createElement('ul')
    // em.textContent = 'Submission'
    // const name = document.createElement('li')
    // name.textContent = personName
    // const color = document.createElement('li')
    // color.textContent = hairColor
    // const num = document.createElement('li')
    // num.textContent = age
    // const place = document.createElement('li')
    // place.textContent = birthplace
    // em.appendChild(name)
    // em.appendChild(color)
    // em.appendChild(num)
    // em.appendChild(place)
    // details.appendChild(em)

}


personForm.addEventListener('submit', handleSubmit)