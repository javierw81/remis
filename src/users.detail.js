
const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')


    if (id) {
        fetch(`${api.user.default}/${id}`)
            .then(response => response.json())
            .then(data => {

                const name = document.getElementsByName('name')[0]
                const surname = document.getElementsByName('surname')[0]

                name.innerHTML = data.name
                surname.innerHTML = data.surname



            })
    }
}


const backButton = document.getElementById('back')
backButton.onclick = () => {
    window.location.href = `/views/users`
}

getDetail()