async function GetNameMachineRequest(url: string) {
    let res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
    }).then(response => {
        if(response.ok){
            return response.json()
        }
    })

    return res.item.name
}

export default GetNameMachineRequest