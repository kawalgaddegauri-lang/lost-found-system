/* =========================
   SMOOTH SCROLL
========================= */

function scrollToReport() {
    document
        .getElementById("report")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function scrollToItems() {
    document
        .getElementById("lost")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   LOGIN MODAL
========================= */

function openLogin() {
    document
        .getElementById("loginModal")
        .classList.add("active");
}


/* =========================
   REPORT MODAL
========================= */

function openReport(type) {

    document
        .getElementById("reportModal")
        .classList.add("active");

    document
        .getElementById("modalTitle")
        .textContent = "Report " + type + " Item";
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");
}


/* =========================
   SUBMIT REPORT
========================= */

function submitReport(event) {

    event.preventDefault();

    const item =
        document.getElementById("reportItem").value;

    const category =
        document.getElementById("reportCategory").value;

    const location =
        document.getElementById("reportLocation").value;

    const description =
        document.getElementById("reportDescription").value;


    if (!item || !category || !location) {

        alert("Please fill all required fields.");

        return;
    }


    alert(
        "Report submitted successfully! 🎉\n\n" +
        "Item: " + item +
        "\nCategory: " + category +
        "\nLocation: " + location
    );


    document
        .getElementById("reportModal")
        .classList.remove("active");


    document.querySelector("#reportModal form").reset();
}


/* =========================
   LOGIN
========================= */

function login(event) {

    event.preventDefault();

    alert("Login successful! 👋");

    document
        .getElementById("loginModal")
        .classList.remove("active");
}


/* =========================
   SEARCH ITEMS
========================= */

function searchItems() {

    const search =
        document
        .getElementById("heroSearch")
        .value
        .toLowerCase()
        .trim();


    document
        .getElementById("itemSearch")
        .value = search;


    scrollToItems();

    filterItems();
}


/* =========================
   FILTER ITEMS
========================= */

function filterItems() {

    const search =
        document
        .getElementById("itemSearch")
        .value
        .toLowerCase()
        .trim();


    const category =
        document
        .getElementById("categoryFilter")
        .value;


    const cards =
        document.querySelectorAll(".item-card");


    cards.forEach(card => {

        const text =
            card.textContent.toLowerCase();

        const cardCategory =
            card.dataset.category;


        const matchesSearch =
            text.includes(search);


        const matchesCategory =
            category === "all" ||
            cardCategory === category;


        if (matchesSearch && matchesCategory) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });
}


/* =========================
   VIEW ITEM
========================= */

function viewItem(itemName) {

    alert(
        "Item Details\n\n" +
        "You selected: " +
        itemName
    );
}


/* =========================
   VIEW ALL
========================= */

function showAllItems() {

    document
        .getElementById("itemSearch")
        .value = "";

    document
        .getElementById("categoryFilter")
        .value = "all";

    filterItems();

    scrollToItems();
}


/* =========================
   CLOSE MODAL OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const reportModal =
        document.getElementById("reportModal");

    const loginModal =
        document.getElementById("loginModal");


    if (event.target === reportModal) {

        reportModal.classList.remove("active");

    }


    if (event.target === loginModal) {

        loginModal.classList.remove("active");

    }

});