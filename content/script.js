import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();
// -------------------------------------------------------------------------------------------------------
let body = document.body;
let header = document.createElement('header')
let footer = document.createElement('footer')
let main = document.createElement("main");
let sect_1 = document.createElement("section");
let sect_2 = document.createElement("section");
let sect_3 = document.createElement("section");
let hgroup1 = document.createElement("hgroup");
let title = document.createElement("h1");
let p1 = document.createElement('p')







hgroup1.appendChild(title)
hgroup1.appendChild(p1)
sect_1.appendChild(hgroup1)
body.appendChild(header)
body.appendChild(footer)
body.appendChild(main);
main.appendChild(sect_1);
main.appendChild(sect_2);
main.appendChild(sect_3);
sect_1.className = "sect-1";
sect_2.className = "sect-2";
sect_3.className = "sect-3";
localStorage.setItem("username", "user");
localStorage.removeItem("username");
console.log(localStorage.getItem("username"));
