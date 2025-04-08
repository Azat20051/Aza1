document.getElementById("file-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        alert("Дерек жүктелді: " + file.name);
    }
});
