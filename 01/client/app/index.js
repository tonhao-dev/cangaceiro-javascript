const fields = [
    document.querySelector('#date'),
    document.querySelector('#quantity'),
    document.querySelector('#value')
]

// # .

function onSubmit(event) {
    event.preventDefault() // page are not refreshing

    console.log(fields[0].value)
    console.log(fields[1].value)
    console.log(fields[2].value)
}

document.querySelector('.form').addEventListener('submit', onSubmit)
