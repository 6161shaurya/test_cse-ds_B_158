async function getJoke() {
    // Fetch a joke from the API
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    
    // Check if the joke is single or two-part and set the text accordingly
    let joke = "";
    if (data.type === "single") {
        joke = data.joke;
    } else {
        joke = `${data.setup} - ${data.delivery}`;
    }
    
    // Display the joke and update the character count
    document.getElementById("joke-text").innerText = joke;
    document.getElementById("char-count").innerText = `Character count: ${joke.length}`;
}

function clearJoke() {
    // Reset the displayed joke and character count
    document.getElementById("joke-text").innerText = "Press the button for a joke!";
    document.getElementById("char-count").innerText = "Character count: 0";
}