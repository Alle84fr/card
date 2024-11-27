async function persoDis(){

    let url = "https://api.disneyapi.dev/character/450"//
    let api = await fetch (url,{
        method: "GET"

    })

    if (api.ok) {

        let retorno = await api.json ();
        console.log(retorno);
        document.getElementById("filme").innerHTML = retorno.data.films[0];
        document.getElementById("perso").innerHTML = retorno.data.name;
        document.getElementById("gam").innerHTML = retorno.data.videoGames[0];
        document.getElementById("p_imag").src = retorno.data.imageUrl;

    }

}

persoDis()