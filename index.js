
   
function main() {
    console.log('DOM is loaded');
    let fetchurl = `https://api.thecatapi.com/v1/images/search`
    console.log(fetchurl)
  
    fetch(fetchurl)
      .then(response => response.json())
      .then(responseJson => { console.log(responseJson);
        let image= responseJson;
        let cats=``
        for(let i=0; i<image.length; i++){
          cats=image[i].url;
  $('#cat-house').append(`<img src="${cats}" alt = "cat">`);}
      });
  }
  
  function watchForm() {
  $('form').on('click', '#submit',() => {
      event.preventDefault();
      $('#cat-house').html('');
      main();
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });