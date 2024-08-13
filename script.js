console.log('testing testing');
const emojiEndpoint =
  'https://api.giphy.com/v2/emoji?api_key=W7zx7fjSQpzpwFIM3HR7bO9gVblIxlmJ&limit=100&offset=0';

const emojisDiv = document.getElementById('emoji-list');

console.log(emojisDiv);

fetch(emojiEndpoint)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    data.data.forEach((emoji) => {
      const card = document.createElement('div');
      card.className = 'card';

      const emojiImage = document.createElement('img');
      emojiImage.src = emoji.images.fixed_height.url;
      emojiImage.alt = emoji.title;

      const emojiTitle = document.createElement('p');
      emojiTitle.textContent = emoji.title;

      const emojiRating = document.createElement('p');
      emojiRating.innerHTML = 'Rating: ' + emoji.rating.toUpperCase();

      // console.log(emojiTitle);
      card.appendChild(emojiImage);
      card.appendChild(emojiTitle);
      card.appendChild(emojiRating);
      emojisDiv.appendChild(card);
    });
  });

async function fetchPlants() {
  const response = await fetch('https://trefle.io/api/v1/plants?token=n-fYw493N5VhPOW6yxgl9vy5eK_LOxnFa4sMljzTkZ4', { mode: "no-cors", referrerPolicy: "same-origin" });

  const data = await response.json();

  return data;
}


console.log(fetchPlants())
