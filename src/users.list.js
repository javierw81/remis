
const deleteThis = (id) => {
    if (confirm("are you sure?")) {


        fetch(`${api.user.default}/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                location.reload();
            })
    }
}

const getList = () => {
    fetch(api.user.list)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('users_table').tBodies[0]
            data.forEach(
                (obj, idx) => {
                    const tr = createTr()
                    //<tr></tr>
                    const tdId = createTd(obj.id)
                    //<td>123123</td>
                    const tdName = createTd(obj.name)
                    //<td>javier</td>
                    const tdSurname = createTd(obj.surname)
                    //<td>wamba</td>                    
                    const tdAddress = createTd(obj.address)
                    const tdCity = createTd(obj.city)

                    const tdAction = createTd()
                    const btnDetail = createButton("Detail", "btn-view", () => {
                        const id = obj.id
                        window.location.href = `/views/users/detail?id=${id}`
                    })
                    const btnUpdate = createButton("Update", "btn-update", () => {
                        const id = obj.id
                        window.location.href = `/views/users/update?id=${id}`
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
                    tr.appendChild(tdName)
                    /*
                   <tr>
                       <td>123123</td>
                       <td>javier</td>
                   </tr>                   
                   <td>wamba</td>          
                   */
                    tr.appendChild(tdSurname)
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