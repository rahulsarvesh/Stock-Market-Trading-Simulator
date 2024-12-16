updateSymbol();
    function getQueryParameter(parameterName) {
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      return urlParams.get(parameterName);
    }
    function updateSymbol() {
      var symbol = getQueryParameter('ticker');
      var scriptTag = document.createElement("script");
      scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      scriptTag.async = true;
      scriptTag.innerHTML = `{
        "width": "1515",
        "height": "630",
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
      document.getElementsByClassName("tradingview-widget-container__widget")[0].innerHTML = "";
      document.getElementsByClassName("tradingview-widget-container__widget")[0].appendChild(scriptTag);
    }
    function updatesymbol() {
      var symbol = document.getElementById("ticker").value;
      var scriptTag = document.createElement("script");
      scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      scriptTag.async = true;
      scriptTag.innerHTML = `{
        "width": "1515",
        "height": "630",
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
      document.getElementsByClassName("tradingview-widget-container__widget")[0].innerHTML = "";
      document.getElementsByClassName("tradingview-widget-container__widget")[0].appendChild(scriptTag);
    }
    function onEnterKeyPress(event) 
    {
      if (event.keyCode === 13) {
        event.preventDefault();
        updatesymbol();
      }
    }
    document.getElementById('ticker').addEventListener('keypress', onEnterKeyPress);

  document.addEventListener("DOMContentLoaded", function()
  {
    var buyButton = document.getElementById("buyButton");
    var purchasePopup = document.getElementById("purchasePopup");
    var closeButton = document.querySelector(".close");
    var confirmButton = document.getElementById("confirmButton");
    var quantityInput = document.getElementById("quantityInput");
    closeButton.addEventListener("click", function() {
      purchasePopup.style.display = "none";
    });

    buyButton.addEventListener("click", function() {
      var symbol = document.getElementById("ticker").value;
      document.getElementById("stock").innerHTML = symbol;
      purchasePopup.style.display = "block";

    });

    confirmButton.addEventListener("click", function() {
      var symbol = document.getElementById("ticker").value;
      var quantity = parseInt(quantityInput.value);
      if (!isNaN(quantity) && quantity > 0) {
        var purchasedItem = {
          name: symbol,
          quantity: quantity
        };
        var purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];
        purchasedItems.push(purchasedItem);
        localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
        purchasePopup.style.display = "none";
      } else {
        alert("Please enter a valid quantity.");
      }
      var purchaseAnimation = document.getElementById('purchase-animation');
      document.getElementById('banime').innerHTML="✔";
      purchaseAnimation.style.transform = 'translate(-50%, -50%) scale(1)';Z
    });
});

