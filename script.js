let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
function getQuote(){
  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
        'X-Api-Key': 'DuKQkG9P1AWsbfotgLTK1A==B2jF7evyozzDIkYE',
        'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    quote.innerText = data[0].quote;
    author.innerText = data[0].author;
  })
  .catch(error => console.error('Error:', error));  
}
window.addEventListener("load",getQuote);
btn.addEventListener("click",getQuote);