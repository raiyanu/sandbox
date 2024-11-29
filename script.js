let myvideo = document.getElementById("myvideo");
let play = document.getElementById("PLAY");
let stop = document.getElementById("STOP");
let fwd = document.getElementById("FWD");
let bwd = document.getElementById("BWD");
let mute = document.getElementById("MUTE");
console.log(play);
play.addEventListener("click", function () {
  if (myvideo.paused) {
    myvideo.play();
    myvideo.pause();
  };
});
stop.addEventListener("click", function () {
  myvideo.currentTime = 0;
  myvideo.pause();
});
fwd.addEventListener("click", function () {
  myvideo.currentTime += 3;
});
bwd.addEventListener("click", function () {
  myvideo.currentTime -= 3;
});
mute.addEventListener("click", function () {
  myvideo.muted = myvideo.muted ? true : false;
});
