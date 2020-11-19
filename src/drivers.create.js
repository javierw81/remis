const postDriver = (driver) => {
    if (driver) {

        fetch(`${api.driver.default}`, {
        
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(driver),

        })
        .then(response => response.json())
        .catch(error => alert('Error:', error)) /* manejo de error */
        .then(data => {
        window.location.href = `/views/drivers`
        })

    }
}



const cancelButton = document.getElementById('cancel')
cancelButton.onclick = () => {
window.location.href = `/views/drivers`
}

const driverCreateForm = document.getElementById('driverCreateForm')
driverCreateForm.onsubmit = (e) => {
if (e.preventDefault) {
    e.preventDefault();
}

const name = document.getElementsByName('name')[0]
const surname = document.getElementsByName('surname')[0]
const address = document.getElementsByName('address')[0]
const city = document.getElementsByName('city')[0]
const licenceNumber = document.getElementsByName('licenceNumber')[0]
const licenceclass = document.getElementsByName('licenceClass')[0]
const car = document.getElementsByName('car')[0]
const carLicencePlate = document.getElementsByName('carLicencePlate')[0]




const driver = {
    name: name.value,
    surname: surname.value,
    address: address.value,
    city: city.value,
    licenceNumber:licenceNumber.value,
    licenceClass:licenceClass.value,
    car:car.value,
    carLicencePlate:carLicencePlate.value
}

postDriver(driver)
}

