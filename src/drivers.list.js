const deleteThis = (id) => {
    if (confirm("are you sure?")) {


        fetch(`${api.driver.default}/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                location.reload();
            })
    }
}

const getList = () => {
    fetch(api.driver.list)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('drivers_table').tBodies[0]
            data.forEach(
                (obj, idx) => {
                    const tr = createTr()
                    //<tr></tr>
                    const tdId = createTd(obj.id)
                    //<td>123123</td>
                    const tdname = createTd(obj.name)
                    //<td>javier</td>
                    const tdsurname = createTd(obj.surname)
                    //<td>wamba</td>                    
                    const tdAddress = createTd(obj.address)
                    const tdCity = createTd(obj.city)
                    const tdlicenceNumber = createTd(obj.licenceNumber)
                    const tdlicenceClass = createTd(obj.licenceClass)
                    const tdcar = createTd(obj.car)
                    const tdcarLicencePlate = createTd(obj.carLicencePlate)


                    const tdAction = createTd()
                    const btnDetail = createButton("Detail", "btn-view", () => {
                        const id = obj.id
                        window.location.href = `/views/drivers/detail?id=${id}`
                    })
                    const btnUpdate = createButton("Update", "btn-update", () => {
                        const id = obj.id
                        window.location.href = `/views/drivers/update?id=${id}`
                    })
                    const btnDelete = createButton("Delete", "btn-delete", () => {
                        const id = obj.id
                        deleteThis(id)
                    })

                    tdAction.appendChild(btnDetail)
                    tdAction.appendChild(btnUpdate)
                    tdAction.appendChild(btnDelete)

                    tr.appendChild(tdId)
                    /*
                    <tr>
                        <td>123123</td>
                    </tr>
                    <td>javier</td>
                    <td>wamba</td>          
                    */
                    tr.appendChild(tdname)
                    /*
                   <tr>
                       <td>123123</td>
                       <td>javier</td>
                   </tr>                   
                   <td>wamba</td>          
                   */
                    tr.appendChild(tdsurname)
                    /*
                    <tr>
                        <td>123123</td>
                        <td>javier</td>
                        <td>wamba</td> 
                    </tr>    
                    */
                    tr.appendChild(tdAddress)
                    tr.appendChild(tdCity)
                    tr.appendChild(tdlicenceNumber)
                    tr.appendChild(tdlicenceClass)
                    tr.appendChild(tdcar)
                    tr.appendChild(tdcarLicencePlate)

                    tr.appendChild(tdAction)

                    table.appendChild(tr)
                }
            )
        })
}
const newButton = document.getElementById('create')
newButton.onclick = () => {
window.location.href = `/views/drivers/create`
}
getList()