const plantsContainer = document.getElementById('plants-container');

const apiKey = '__API_KEY__';

let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// fetch(`https://perenual.com/api/species-list?key=sk-IHVq66b10dba664746437`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// Fetch plants from Trefle.io API
async function fetchPlants() {
    console.log(apiKey);
    try {
      const response = await fetch(`https://perenual.com/api/species-list?key=${apiKey}`);

      const data = await response.json();
      console.log(data)
        displayPlants(data.data);
    } catch (error) {
        console.error('Error fetching plants:', error);
    }
}

// Display plants in the DOM
function displayPlants(plants) {
    plantsContainer.innerHTML = ''; // Clear previous content
    plants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.classList.add('plant-card');

        const plantImage = document.createElement('img');
        plantImage.src = plant.image_url || 'default-plant.jpg'; // Fallback image if none available
        plantImage.alt = plant.common_name;

        const plantName = document.createElement('h3');
        plantName.textContent = plant.common_name || 'Unknown Plant';

        plantCard.appendChild(plantImage);
        plantCard.appendChild(plantName);

        plantsContainer.appendChild(plantCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', fetchPlants);
