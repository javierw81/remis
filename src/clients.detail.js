
const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')


    if (id) {
        fetch(`${api.clients.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                const name = document.getElementsByName('id')[0]
                const name = document.getElementsByName('bussinessname')[0]
                const name = document.getElementsByName('cuit')[0]
                const name = document.getElementsByName('address')[0]
                const name = document.getElementsByName('city')[0]
                
                id.innerHTML = data.id
                bussinessname.innerHTML = data.bussinessname
                cuit.innerHTML = data.cuit
                address.innerHTML = data.address
                city.innerHTML = data.city





            })
    }
}


const backButton = document.getElementById('back')
backButton.onclick = () => {
    window.location.href = `/views/clients`
}

getDetail()