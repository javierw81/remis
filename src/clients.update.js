const putUpdate = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.put('id')


    if (id) {
        fetch(`${api.client.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("-----",data)
                const idControl = document.getElementsByName('id')[0]
                const businessName = document.getElementsByName('businessName')[0]
                const cuit = document.getElementsByName('cuit')[0]
                const address = document.getElementsByName('address')[0]
                const city = document.getElementsByName('city')[0]
                
                idControl.innerHTML = data.id
                businessName.innerHTML = data.businessName
                cuit.innerHTML = data.cuit
                address.innerHTML = data.address
                city.innerHTML = data.city





            })
    }
}




putUpdate()