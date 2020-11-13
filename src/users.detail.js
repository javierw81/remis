
const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')


    if (id) {
        fetch(`${api.users.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                const name = document.getElementsByName('id')[0]
                const name = document.getElementsByName('name')[0]
                const name = document.getElementsByName('surname')[0]
                const name = document.getElementsByName('address')[0]
                const name = document.getElementsByName('city')[0]
                
                id.innerHTML = data.id
                name.innerHTML = data.name
                surname.innerHTML = data.surname
                address.innerHTML = data.address
                city.innerHTML = data.city





            })
    }
}


const backButton = document.getElementById('back')
backButton.onclick = () => {
    window.location.href = `/views/users`
}

getDetail()