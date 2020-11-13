
const deleteThis = (id) => {
    if (confirm("are you sure?")) {


        fetch(`${api.clients.default}/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                location.reload();
            })
    }
}

const getList = () => {
    fetch(api.clients.list)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('clients_table').tBodies[0]
            data.forEach(
                (obj, idx) => {
                    const tr = createTr()
                    //<tr></tr>
                    const tdId = createTd(obj.id)
                    //<td>123123</td>
                    const tdbussinessname = createTd(obj.bussinessname)
                    //<td>javier</td>
                    const tdcuit = createTd(obj.cuit)
                    //<td>wamba</td>                    
                    const tdAddress = createTd(obj.address)
                    const tdCity = createTd(obj.city)

                    const tdAction = createTd()
                    const btnDetail = createButton("Detail", "btn-view", () => {
                        const id = obj.id
                        window.location.href = `/views/clients/detail?id=${id}`
                    })
                    const btnUpdate = createButton("Update", "btn-update", () => {
                        const id = obj.id
                        window.location.href = `/views/clients/update?id=${id}`
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
                    tr.appendChild(tdbussinessname)
                    /*
                   <tr>
                       <td>123123</td>
                       <td>javier</td>
                   </tr>                   
                   <td>wamba</td>          
                   */
                    tr.appendChild(tdcuit)
                    /*
                    <tr>
                        <td>123123</td>
                        <td>javier</td>
                        <td>wamba</td> 
                    </tr>    
                    */
                    tr.appendChild(tdAddress)
                    tr.appendChild(tdCity)


                    tr.appendChild(tdAction)

                    table.appendChild(tr)
                }
            )
        })
}

getList()