$(document).ready(function() {
   
window.addEventListener("beforeunload", () => {
  localStorage.setItem("musicTime", music.currentTime);
  localStorage.setItem("musicPlaying", !music.paused);
});

window.addEventListener("load", () => {
  const savedTime = localStorage.getItem("musicTime");
  const wasPlaying = localStorage.getItem("musicPlaying") === "true";
  
  if (savedTime) music.currentTime = savedTime;
  if (wasPlaying) music.play();
});

  const music = $("#bg-music")[0];
  const btn = $("#music-btn");

  btn.on("click", function() {
    if (music.paused) {
      music.play();
      btn.text("⏸ Pause Music");
      btn.addClass("playing");
    } else {
      music.pause();
      btn.text("🎵 Play Music");
      btn.removeClass("playing");
    }
  });
});
