document.addEventListener("DOMContentLoaded", function() {
  var purchasedItemsDiv = document.getElementById("purchasedItems");
  var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

  renderPurchasedItems();

  purchasedItemsDiv.addEventListener("click", function(event) {
    if (event.target.classList.contains("removeButton")) {
      var index = parseInt(event.target.getAttribute("data-index"));
      purchasedItems.splice(index, 1);
      localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
      var purchaseAnimation = document.getElementById('purchase-animation');
    document.getElementById('banime').innerHTML="SOLD";
    purchaseAnimation.style.transform = 'translate(-50%, -50%) scale(1)';
  setTimeout(function() {purchaseAnimation.style.transform = 'translate(-50%, -50%) scale(0)';}, 900);
      renderPurchasedItems();
    }
  });

  function renderPurchasedItems() {
    purchasedItemsDiv.innerHTML = "";
    if (purchasedItems.length > 0) {
      purchasedItems.forEach(function(item, index) {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML = "<div class='textContent'><h1>" + item.name + "</h1><p>" + item.quantity  + " Shares" +"</p><button class='removeButton' data-index='" + index + "'> SELL </button></div>";
        purchasedItemsDiv.appendChild(cardDiv);
      });
    } else {
      purchasedItemsDiv.innerHTML = "<p>No items purchased yet.</p>";
    }
  }
});