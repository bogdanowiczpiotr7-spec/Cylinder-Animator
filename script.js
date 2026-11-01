
const downloadButton = document.getElementById("downloadButton");
const downloadMessage = document.getElementById("downloadMessage");

downloadButton.addEventListener("click", function (event) {
    event.preventDefault();

    downloadMessage.textContent =
        "The Cylinder Animator download will be available soon!";
});
