//model
const videos = [
  'videos/thisFar.mp4',
  'videos/quitting.mp4',
  'videos/risk.mp4',
  'videos/doit.mp4',
];
const app = document.getElementById('app');
let random;
//view
Updateview();

function Updateview() {
  makeRandom();
  app.innerHTML = /*html*/ `
    <div class="container">
      <div>
      <h1>Here is your motivation</h1>
      </div>
      <div>
      <video width="475" height="375" controls autoplay>
        <source src="${videos[random]}" type="video/mp4">
      </video>
      </div>
      <div>
        <button onclick="anotherOne()">I need more motivation</button>
      </div>
      <div class="help">${enoughMotivation()}</div>
    </div>
  `;
}
//controller
function makeRandom() {
  random = Math.floor(Math.random() * videos.length);
}

function anotherOne() {
  videos.splice(random, 1);
  makeRandom();
  Updateview();
}

function enoughMotivation() {
  if (videos.length == 0) {
    return 'There is only so much motivation I can help with';
  } else {
    return '';
  }
}
