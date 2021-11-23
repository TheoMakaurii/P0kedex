   
// import $ from 'jquery';

function main() {
    console.log('DOM is loaded');
    if($('#input').val() !== ''){
    let pokemon = $('#input').val();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
    console.log(url)
  
    fetch(url)
      .then(response => response.json())
      .then(responseJson => { console.log(responseJson.sprites.front_default);
        let image= responseJson.sprites.front_default;

        let pokemonName=responseJson.name;
    
        $('#pokemon-center').append(`<a href="https://pokemondb.net/pokedex/${pokemonName}"> <img src="${image}" alt = "pokemon"> </a>`);
            });}
    else{ let pokemon = Math.floor(Math.random() * 898) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        console.log(url)
      
        fetch(url)
          .then(response => response.json())
          .then(responseJson => { console.log(responseJson.sprites.front_default);
            let image= responseJson.sprites.front_default;
            let pokemonName=responseJson.name;
    
      $('#pokemon-center').append(`<a href="https://pokemondb.net/pokedex/${pokemonName}"> <img src="${image}" alt = "pokemon"> </a>`);
          });}

  }
  
  function watchForm() {
  $('form').on('click', '#submit',() => {
      event.preventDefault();
      $('#pokemon-center').html('');
      main();
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });