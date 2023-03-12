function page(page) {
    document.body.style.backgroundImage = "none";
    document.head.title = "Planets - " + page;
    var pages = document.querySelectorAll("#page-container div");
    console.log(pages);
    for (let index = 0; index < pages.length; index++) {
        const pageNode = pages[index];
        if (pageNode.id === page) {
            pageNode.style.display = "block";
        } else {
            pageNode.style.display = "none";
        }
    }
    var dropdown = document.querySelectorAll(".dropdown-content");
    console.log(dropdown);
    dropdown.forEach(element => {
        element.style.display = "none";
    });
    setTimeout(function() {
        dropdown.forEach(element => {
            element.style = "";
        })
    }, 120);
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// console.log(params.page);
if (params.page !== null) {
    page(params.page);
}

document.addEventListener(
    "keydown",
    (event) => {
        if (event.key === "j") {
            var code = prompt("Plese enter the code:");
            if (parseInt(code) * 3.152 === 7835.872) {
                alert("Well done!");
            }
        }
    }
);