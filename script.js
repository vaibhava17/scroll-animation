var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl3 = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.quote', .5, {x:200, opacity: 0});
tl.from('#robo-1', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl3.from('.quote2', .5, {x:500, opacity: 0});
// tl3.from('#robo-2', 1, {x:500, opacity: 0, ease: Power4.easeInOut}, "=-.7");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  // triggerElement: ".sticky2",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
  // .setPin(".sticky2")
  // .setTween(tl3)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".quote",
  // triggerElement: ".quote2"
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  // tl3.progress();
  console.log(tl.progress());
  // console.log(tl3.progress());
}