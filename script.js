document.addEventListener("DOMContentLoaded", () => {
  const ramenMenu = document.getElementById("ramen-menu");
  const ramenName = document.getElementById("ramen-name");
  const restaurantName = document.getElementById("restaurant-name");
  const ramenImage = document.getElementById("ramen-image");
  const rating = document.getElementById("rating");
  const comment = document.getElementById("comment");

  // Sample ramen data
  const ramens = [
    {
      id: 1,
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      image: "images/1.webp",
      rating: 5,
      comment: "Delicious!"
    },
    {
      id: 2,
      name: "Miso Ramen",
      restaurant: "Menya",
      image: "images/2.webp",
      rating: 4,
      comment: "Very flavorful!"
    },
    {
      id: 3,
      name: "Tonkotsu Ramen",
      restaurant: "Ramen-ya",
      image: "images/3.webp",
      rating: 3,
      comment: "Nice and creamy!"
    }
  ];

  // Function to display ramen images in the menu
  function displayRamens() {
    ramenMenu.innerHTML = ""; // Clear previous images
    ramens.forEach(ramen => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.style.width = "100px"; // Keep menu images small
      img.style.cursor = "pointer";
      
      img.addEventListener("click", () => {
        updateRamenDetails(ramen);
      });

      ramenMenu.appendChild(img);
    });
  }

  // Function to update the ramen details in "Select a Ramen" section
  function updateRamenDetails(ramen) {
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    ramenImage.src = ramen.image;
    ramenImage.alt = ramen.name;
    rating.textContent = `Rating: ${ramen.rating}`;
    comment.textContent = `Comment: ${ramen.comment}`;
  }

  // Function to add new ramen from form
  function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const newRamen = {
        id: ramens.length + 1,
        name: document.getElementById("new-name").value,
        restaurant: document.getElementById("new-restaurant").value,
        image: document.getElementById("new-image").value,
        rating: document.getElementById("new-rating").value,
        comment: document.getElementById("new-comment").value
      };

      ramens.push(newRamen);
      updateRamenDetails(newRamen); // Show newly added ramen immediately in ramen detail
      form.reset();
    });
  }

  // Initialize app
  displayRamens();
  addSubmitListener();
});
