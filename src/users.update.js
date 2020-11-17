const getUpdate = () => {
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
                
                idControl.innerHTML = data.id
                name.innerHTML = data.name
                surname.innerHTML = data.surname
                address.innerHTML = data.address
                city.innerHTML = data.city





            })
    }
}



getUpdate()