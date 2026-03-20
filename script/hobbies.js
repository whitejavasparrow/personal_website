const hobbies = [
  {
    hobby_name: "大提琴<br>Cello",
    icon_file_name: "cello.png",
  },
  {
    hobby_name: "短跑<br>Sprinting",
    icon_file_name: "sprinting.png",
  },
  { hobby_name: "室內設計<br>Home Design", icon_file_name: "home_design.png" },
];

const hobbyArray = hobbies.map(
  (el) =>
    `<li class="hobby">
  <img class="hobby-icon" src="./imgs/${el.icon_file_name}"/>
  <p>${el.hobby_name}</p>
</li>`
);

const hobbyTemplate = hobbyArray.join("");

document.getElementsByClassName("hobby-container")[0].innerHTML = hobbyTemplate;
