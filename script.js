async function getJoke() {
    
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    
   
    let joke = "";
    if (data.type === "single") {
        joke = data.joke;
    } else {
        joke = `${data.setup} - ${data.delivery}`;
    }
    
    
    document.getElementById("joke-text").innerText = joke;
    document.getElementById("char-count").innerText = `Character count: ${joke.length}`;
}

function clearJoke() {
    
    document.getElementById("joke-text").innerText = "Press the button for a joke!";
    document.getElementById("char-count").innerText = "Character count: 0";
}
