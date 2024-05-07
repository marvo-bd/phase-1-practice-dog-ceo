console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    // Challenge 1: Fetch and render dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                dogImageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    // Challenge 2: Fetch and render dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById("dog-breeds");
            for (const breed in data.message) {
                const breedItem = document.createElement("li");
                breedItem.textContent = breed;
                dogBreedsList.appendChild(breedItem);
            }
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    // Challenge 3: Change font color on click
    const dogBreedsList = document.getElementById("dog-breeds");
    dogBreedsList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to blue on click
        }
    });

    // Challenge 4: Filter breeds by starting letter
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function() {
        const selectedLetter = breedDropdown.value;
        const breedItems = document.querySelectorAll("#dog-breeds li");
        breedItems.forEach(breedItem => {
            if (breedItem.textContent.startsWith(selectedLetter)) {
                breedItem.style.display = "list-item"; // Show if breed starts with selected letter
            } else {
                breedItem.style.display = "none"; // Hide if breed doesn't start with selected letter
            }
        });
    });
});
