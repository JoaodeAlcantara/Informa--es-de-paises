document.querySelector('button').addEventListener('click', async (event) => {
event.preventDefault();

    const name = document.querySelector('#input').value;
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const resp = await fetch(url);
    const dados = await resp.json();
    const erro = document.querySelector('#erro');
    const display = document.querySelector('.complete-info');
    console.log(dados)

    if(!name){
        erro.innerHTML = 'Vázio, digite o nome do país.'
    } else{
        erro.innerHTML = ''
        if(display.style.display === 'none' || display.style.display === ''){
            display.style.display = 'block'
        }
    }
    if(dados.status === 404){
        erro.innerHTML = 'Pais não encontrado. <br> Tente digitar em ingles!'
    } else{
        info({
            nome: dados[0].name.common,
            flag: dados[0].flags.png,
            capital: dados[0].capital,
            lingua: Object.values(dados[0].languages),
            populacao: dados[0].population,
            continente: dados[0].continents,
            maps: dados[0].maps.googleMaps
        })
    }
    

})

function info(dados) {
    document.querySelector('#title').innerHTML = `${dados.nome}`
    document.querySelector('#flag').src = `${dados.flag}`
    document.querySelector('#lingua').innerHTML = `${dados.lingua}`
    document.querySelector('#cap').innerHTML = `${dados.capital}`
    document.querySelector('#pop').innerHTML = `${dados.populacao}`
    document.querySelector('#cont').innerHTML = `${dados.continente}`
    document.querySelector('#link').href = `${dados.maps}`
}
// https://flagcdn.com/w320/br.png -> bandeira
// name/ common
// capital
// languages
// pupulation
// region
