document.addEventListener("DOMContentLoaded", () => {
  main();
});

// Stub data
const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./shoyu.webp", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./miso.webp", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./tonkotsu.jpg", rating: 0, comment: "No rating yet." }
];

// Function to display all ramens
function displayRamens() {
  const ramenMenu = document.querySelector("#ramen-menu");
  ramenMenu.innerHTML = ""; // Clear previous content

  ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });

  // Show first ramen by default
  if (ramens.length > 0) {
    handleClick(ramens[0]);
  }
}

// Function to display ramen details when clicked
function handleClick(ramen) {
  const detailImage = document.querySelector("#ramen-image");
  const ramenName = document.querySelector("#ramen-name");
  const restaurant = document.querySelector("#restaurant-name");
  const rating = document.querySelector("#rating");
  const comment = document.querySelector("#comment");

  detailImage.src = ramen.image;
  ramenName.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment || "No comments yet.";
}

// Function to handle new ramen submission
function addSubmitListener() {
  const form = document.querySelector("#new-ramen-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      id: ramens.length + 1,
      name: event.target["new-name"].value,
      restaurant: event.target["new-restaurant"].value,
      image: event.target["new-image"].value,
      rating: event.target["new-rating"].value || 0,
      comment: event.target["new-comment"].value || "No comments yet."
    };

    // Add to the array
    ramens.push(newRamen);

    // Re-display the ramen images
    displayRamens();

    // Reset the form
    form.reset();
  });
}

// Initialize app
function main() {
  displayRamens();
  addSubmitListener();
}
