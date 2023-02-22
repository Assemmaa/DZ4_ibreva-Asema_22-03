const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'people.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const names = document.createElement('div')
            names.innerHTML = 'name: ' + people.name
            const ages = document.createElement('div')
            ages.innerHTML = 'age: ' + people.age
            document.querySelector('.box').append(names, ages)
        });
    })
})