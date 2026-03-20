const sakuraSVG = `
  <svg viewbox="-425 -50 850 100">
    <circle class="flower flower3" cx="-350" cy="0" r="15"></circle>
    <circle class="flower flower2" cx="-250" cy="10" r="20"></circle>
    <circle class="flower" cx="-200" cy="30" r="15"></circle>
    <circle class="flower flower2" cx="350" cy="20" r="20"></circle>
    <circle class="flower flower3" cx="250" cy="10" r="15"></circle>
    <circle class="flower" cx="200" cy="0" r="15"></circle>
    <circle class="flower flower2" cx="175" cy="10" r="25"></circle>
    <circle class="flower" cx="50" cy="20" r="20"></circle>
    <circle class="flower flower3" cx="0" cy="25" r="15"></circle>
  </svg>
`;

const flowersLen = document.getElementsByClassName("flowers").length

for (let i = 0; i < flowersLen; i++) {
  document.getElementsByClassName("flowers")[i].innerHTML = sakuraSVG;
}