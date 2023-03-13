const btnEl = document.getElementById('btn');

const jokeEl = document.getElementById('joke');


const apiKey = "xK2UHCio0e9xS+B8D90qxg==1eF1V8dC7j4Q6L0I";

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke () {

    try {
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";

        console.log(data);
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happend, try again later.";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
    }

    
}

btnEl.addEventListener('click', getJoke);