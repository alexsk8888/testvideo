var video = document.getElementById("video");
var video_play = document.getElementById("video-play");

function autoplayer() {
  video.muted = false;
  if (video.paused) {
    video_play.style.display = "block";
  }
}
setTimeout(autoplayer, 3000);

video_play.addEventListener(
  "click",
  function (e) {
    if (video.paused) {
      video.play();
      video_play.style.display = "none";
    } else {
      video.pause();
      video_play.style.display = "block";
    }
  },
  false
);

video.addEventListener(
  "click",
  function (e) {
    if (!video.paused) {
      video.pause();
      video_play.style.display = "block";
    }
  },
  false
);
