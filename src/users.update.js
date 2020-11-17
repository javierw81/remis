const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')



    if (id) {
        fetch(`${api.user.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                const idControl = document.getElementsByName('id')[0]
                const name = document.getElementsByName('name')[0]
                const surname = document.getElementsByName('surname')[0]
                const address = document.getElementsByName('address')[0]
                const city = document.getElementsByName('city')[0]

                idControl.value = data.id
                name.value = data.name
                surname.value = data.surname
                address.value = data.address
                city.value = data.city
            })
    }
}

const putUser = (id, user) => {
    if (id && user) {
        fetch(`${api.user.default}/${id}`, {
            method: 'PUT',
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

const form = document.getElementById('userForm')
form.onsubmit = (e) => {
    if (e.preventDefault) {
        e.preventDefault();
    }

    const idControl = document.getElementsByName('id')[0]
    const name = document.getElementsByName('name')[0]
    const surname = document.getElementsByName('surname')[0]
    const address = document.getElementsByName('address')[0]
    const city = document.getElementsByName('city')[0]

    const id = idControl.value;

    const user = {
        name: name.value,
        surname: surname.value,
        address: address.value,
        city: city.value
    }

    putUser(id, user)

}

getDetail()