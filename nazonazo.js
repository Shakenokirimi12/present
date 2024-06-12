document.getElementById("sidebar-toggle").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        content.classList.remove("open");
    } else {
        sidebar.style.left = "0px";
        content.classList.add("open");
    }
};
