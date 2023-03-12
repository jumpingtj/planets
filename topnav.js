/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.display = "";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("overlay").style.display = "none";
}

closeNav();