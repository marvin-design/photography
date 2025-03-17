const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/1.webp", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/2.webp", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/3.webp", rating: 3, comment: "Nice and creamy!" }
];

// Display ramen images
function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

// Handle ramen click
function handleClick(ramen) {
  document.getElementById('ramen-name').textContent = ramen.name;
  document.getElementById('restaurant-name').textContent = ramen.restaurant;
  document.getElementById('ramen-image').src = ramen.image;
  document.getElementById('rating').textContent = ramen.rating;
  document.getElementById('comment').textContent = ramen.comment;
}

// Add new ramen
function addSubmitListener() {
  const form = document.getElementById('new-ramen-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value
    };
    ramens.push(newRamen);
    displayNewRamen(newRamen);
    form.reset();
  });
}

// Display new ramen added
function displayNewRamen(ramen) {
  const img = document.createElement('img');
  img.src = ramen.image;
  img.addEventListener('click', () => handleClick(ramen));
  document.getElementById('ramen-menu').appendChild(img);
}

// Initialize app
function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);
