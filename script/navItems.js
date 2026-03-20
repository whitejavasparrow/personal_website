// ***** website title *****
const title = "Pei-Yi Chen";
const firstLetter = title[0];
const otherLetters = title.slice(1, title.length + 1);

const navItems = [
  { name: "Résumé", path: "resume.html" },
  // { name: "Bio", path: "bio.html" },
  // { name: "Countries", path: "countries.html" },
  // { name: "Posts", path: "posts.html" },
  { name: "Memories", path: "memories.html" },
  { name: "Contact", path: "contact.html" },
];

let navTitleTemplate =
  '<h1 class="blog-name">' +
  `<a href="index.html">
    <div class="letters-container">
      <div class="circled-letter">${firstLetter}</div>
      <div class="other-letters">${otherLetters}</div>
    </div>
  </a>
   </h1>`;

// ***** navItems *****
navTitleTemplate += '<ul class="navbar" id="navbar"></ul>';
document.getElementById("nav").innerHTML = navTitleTemplate;

let navItemTemplate = "";
for (let navItem of navItems) {
  navItemTemplate += `<a class="nav-item" href="${navItem.path}"><span>${navItem.name}</span></a>`;
}

document.getElementById("navbar").innerHTML = navItemTemplate;

// change color on scroll
var className = "inverted";
var scrollTrigger = 90;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(className);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
  }
};
// reference: https://codepen.io/aubort/pen/LeBVzW
