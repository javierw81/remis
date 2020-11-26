const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')


    if (id) {
        fetch(`${api.driver.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                const idControl = document.getElementsByName('id')[0]
                const name = document.getElementsByName('name')[0]
                const surname = document.getElementsByName('surname')[0]
                const address = document.getElementsByName('address')[0]
                const city = document.getElementsByName('city')[0]
                const licenceNumber = document.getElementsByName('licenceNumber')[0]
                const licenceClass = document.getElementsByName('licenceClass')[0]
                const car = document.getElementsByName('car')[0]
                const carLicencePlate = document.getElementsByName('carLicencePlate')[0]

                
                idControl.value = data.id
                name.value = data.name
                surname.value = data.surname
                address.value = data.address
                city.value = data.city
                licenceNumber.value=data.licenceNumber
                licenceClass.value=data.licenceClass
                car.value=data.car
                carLicencePlate.value=data.carLicencePlate
        
            })
        }
    }
    const putDriver = (id,driver) => {
        if (id && driver) {
            fetch(`${api.driver.default}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(driver),
                headers: {
                    'Content-Type': 'application/json'
                }
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
    
    const form = document.getElementById('driverForm')
    form.onsubmit = (e) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
    
        const idControl = document.getElementsByName('id')[0]
        const name = document.getElementsByName('name')[0]
        const surname = document.getElementsByName('surname')[0]
        const address = document.getElementsByName('address')[0]
        const city = document.getElementsByName('city')[0]
        const licenceNumber = document.getElementsByName('licenceNumber')[0]
        const licenceClass = document.getElementsByName('licenceClass')[0]
        const car = document.getElementsByName('car')[0]
        const carLicencePlate = document.getElementsByName('carLicencePlate')[0]

        const id = idControl.value;
                
        const driver = {
            name:name.value,
            surname: surname.value,
            address: address.value,
            city: city.value,
            licenceNumber: licenceNumber.value,
            licenceClass: licenceClass.value,
            car: car.value,
            carLicencePlate: carLicencePlate.value

        }
    
        putDriver(id,driver)

}
getDetail()