
let box = document.getElementById("box");
let pos = 0; // start position
function moveBox() {
  if (pos < 300) { // move until 300px
    pos++;
    box.style.left = pos + "px";
    requestAnimationFrame(moveBox); // smooth animation
  }
}
moveBox();