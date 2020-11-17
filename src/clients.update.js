const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')


    if (id) {
        fetch(`${api.client.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                const idControl = document.getElementsByName('id')[0]
                const businessName = document.getElementsByName('businessName')[0]
                const cuit = document.getElementsByName('cuit')[0]
                const address = document.getElementsByName('address')[0]
                const city = document.getElementsByName('city')[0]
                
                idControl.value = data.id
                businessName.value = data.businessName
                cuit.value = data.cuit
                address.value = data.address
                city.value = data.city
        
            })
        }
    }
    const putClient = (id, client) => {
        if (id && client) {
            fetch(`${api.client.default}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .catch(error => alert('Error:', error)) /* manejo de error */
                .then(data => {
                    window.location.href = `/views/clients`
                })
        }
    }
    
    const cancelButton = document.getElementById('cancel')
    cancelButton.onclick = () => {
        window.location.href = `/views/clients`
    }
    
    const form = document.getElementById('clientForm')
    form.onsubmit = (e) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
    
        const idControl = document.getElementsByName('id')[0]
        const businessName = document.getElementsByName('businessName')[0]
        const cuit = document.getElementsByName('cuit')[0]
        const address = document.getElementsByName('address')[0]
        const city = document.getElementsByName('city')[0]
    
        const id = idControl.value;
    
        const client = {
            businessName: businessName.value,
            cuit: cuit.value,
            address: address.value,
            city: city.value
        }
    
        putClient(id, client)

}
getDetail()