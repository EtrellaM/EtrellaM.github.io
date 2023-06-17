let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Tengo 18 años y soy estudiante.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
