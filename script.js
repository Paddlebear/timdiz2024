

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

window.onload = function () { document.getElementsByClassName("listItem").width = document.getElementsByClassName("sub-menu").width; }

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

const menu = document.getElementById("menu")
let open;

function openMenu() {
    if (open) {
        menu.style.display = "none";
        open = false;
    } else if (!open) {
        menu.style.display = "block";
        open = true;
    }
}

function darkMode() {
    var img = document.getElementById("darkmode");
            if (img.src.includes("switchdark.svg")) {
                img.src = "./assets/switchlight.svg";
            } else {
                img.src = "./assets/switchdark.svg";
            }
    document.body.classList.toggle('dark-mode');
}