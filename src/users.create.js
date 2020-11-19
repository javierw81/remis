const postUser = (user) => {
    if (user) {
        fetch(`${api.user.default}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => alert('Error:', error)) /* manejo de error */
            .then(data => {
                window.location.href = `/views/users`
            })
    }
}

const cancelButton = document.getElementById('cancel')
cancelButton.onclick = () => {
    window.location.href = `/views/users`
}
const userCreateForm = document.getElementById('userCreateForm')
userCreateForm.onsubmit = (e) => {
if (e.preventDefault) {
    e.preventDefault();
}

    const name = document.getElementsByName('name')[0]
    const surname = document.getElementsByName('surname')[0]
    const address = document.getElementsByName('address')[0]
    const city = document.getElementsByName('city')[0]


    const user = {
        name: name.value,
        surname: surname.value,
        address: address.value,
        city: city.value
    }

    postUser(user)

}

