async function persoDis(){

    let url = "https://api.disneyapi.dev/character"
    let api = await fetch (url,{
        method: "GET"

    })

    if (api.ok) {

        let retorno = await api.json;
        document.getElementById("filme").innerHTML = retorno.name
        document.getElementById("perso").innerHTML = retorno.name
        document.getElementById("inim").innerHTML = retorno.name
        document.getElementById("filme").innerHTML = retorno.name
    }

}

persoDis()