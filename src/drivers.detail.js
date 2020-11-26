
const getDetail = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')


    if (id) {
        fetch(`${api.driver.default}/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("-----",data)
                const idControl = document.getElementsByName('id')[0]
                const name = document.getElementsByName('name')[0]
                const surname = document.getElementsByName('surname')[0]
                const address = document.getElementsByName('address')[0]
                const city = document.getElementsByName('city')[0]
                const licenceNumber = document.getElementsByName('licenceNumber')[0]
                const licenceClass = document.getElementsByName('licenceClass')[0]
                const car = document.getElementsByName('car')[0]
                const carLicencePlate = document.getElementsByName('carLicencePlate')[0]

                
                idControl.innerHTML = data.id
                name.innerHTML = data.name
                surname.innerHTML = data.surname
                address.innerHTML = data.address
                city.innerHTML = data.city
                licenceNumber.innerHTML = data.licenceNumber
                licenceClass.innerHTML = data.licenceClass
                car.innerHTML = data.car
                carLicencePlate.innerHTML = data.carLicencePlate





            })
    }
}


const backButton = document.getElementById('back')
backButton.onclick = () => {
    window.location.href = `/views/drivers`
}

getDetail()