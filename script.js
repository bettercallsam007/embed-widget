// /embed/widget.js
(function () {
  // Create a global variable to store chat dimensions
  window.mychat = window.mychat || {};

  // Create a container div for the iframe
  var iframeContainer = document.createElement("div");

  iframeContainer.id = "iframe-container";
  document.querySelector("body").appendChild(iframeContainer);

  // Define styles for the iframe container
  var styles = {
    border: "0px",
    "background-color": "transparent",
    "pointer-events": "none",
    "z-index": "2147483639",
    position: "fixed",
    bottom: "120px",
    width: "300px", // Set your desired width
    height: "500px", // Set your desired height
    overflow: "hidden",
    opacity: "1",
    "max-width": "100%",
    right: "30px",
    "max-height": "100%",
    "border-radius": "10px",
    overflow: "hidden",
    "box-shadow":
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  };
  Object.assign(iframeContainer.style, styles);

  // Create an iframe element
  var iframe = document.createElement("iframe");
  iframe.src = "https://website-embed.netlify.app/app.html"; // Replace with your chat application's URL
  iframe.id = "chat-iframe";
  iframe.allow = "autoplay; camera; microphone"; // Customize permissions as needed

  // Define styles for the iframe
  var iframeStyles = {
    "pointer-events": "all",
    background: "none",
    border: "0px",
    float: "none",
    position: "absolute",
    inset: "0px",
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    "min-height": "0px",
  };
  Object.assign(iframe.style, iframeStyles);

  // Append the iframe to the container
  iframeContainer.appendChild(iframe);

  const img = document.createElement("img");
  img.style.width = "28px";
  img.style.height = "28px";

  // Create a toggle button
  var toggleButton = document.createElement("button");

  // toggleButton.innerText = 'Toggle Chat';
  toggleButton.id = "chat-toggle-button";
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "30px";
  toggleButton.style.right = "30px";
  toggleButton.style.zIndex = "2147483640"; // Place above the iframe
  toggleButton.style.borderRadius = "50%";
  toggleButton.style.height = "60px";
  toggleButton.style.width = "60px";
  (toggleButton.style.background = "#f6f6f6"),
    (toggleButton.style.boxShadow =
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"),
    (toggleButton.style.border = "1px solid  #dddfe0");

  toggleButton.onclick = function () {
    iframeContainer.style.display =
      iframeContainer.style.display === "none" ? "block" : "none";
    iframeContainer.style.display =
      iframeContainer.style.display === "none"
        ? (img.src = "https://www.svgrepo.com/download/17060/chat.svg")
        : (img.src = "https://www.svgrepo.com/download/499053/cancel.svg");
  };

  // Append the toggle button to the body
  document.querySelector("body").appendChild(toggleButton);
  toggleButton.appendChild(img);
  img.src = "https://www.svgrepo.com/download/499053/cancel.svg";
})();
