

let resultContainer = document.getElementById('result');
async function getJoke(e) {
      e.preventDefault();
    try{
        let response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=093506482bcd69d0b27935e2952c');
        let joke = await response.json();
        document.querySelector("p").style.display = 'none';
        resultContainer.innerText = joke.jokeContent;
    }catch(e){
        console.error('Error:', e);
        return;
    }
}
getJoke()
document.getElementById("btn").addEventListener('click', getJoke)