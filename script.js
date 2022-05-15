var box = document.getElementById('Box');
var Lorry = document.getElementById('Lorry');


var boxTlm = new TimelineMax();


boxTlm.fromTo(box, {
  x: -40,
  y: -20,
  
},{
  x: 40,
  y: 20,
  duration: 2,
  ease: Power0.easeNone,
  repeat: 3,
});

boxTlm.to(box, { opacity: 0});
boxTlm.to(Lorry, { x: 185, y: 100, opacity: 0, ease: Power1.easeIn, duration: 3});