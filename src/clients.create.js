const postClient = (client) => {
    if (client) {

        fetch(`${api.client.default}`, {
        
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(client),

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

const clientCreateForm = document.getElementById('clientCreateForm')
clientCreateForm.onsubmit = (e) => {
if (e.preventDefault) {
    e.preventDefault();
}

const businessName = document.getElementsByName('businessName')[0]
const cuit = document.getElementsByName('cuit')[0]
const address = document.getElementsByName('address')[0]
const city = document.getElementsByName('city')[0]


const client = {
    businessName: businessName.value,
    cuit: cuit.value,
    address: address.value,
    city: city.value
}

postClient(client)
}

