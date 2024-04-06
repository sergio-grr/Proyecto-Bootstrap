const jumpHeight = 50; // Adjust this value to control jump height (in pixels)
const character = document.getElementById("personajedino");
const container = document.getElementById("personajedino-container");

document.addEventListener("keydown", function(event) {
  if (event.key === " " || event.code === "Space") { // Check for space key press
    jump();
  }
});

function jump() {
  let currentTop = container.offsetTop; // Get the current top position of the container
  let jumpInterval = setInterval(function() {
    if (currentTop > container.offsetTop - jumpHeight) { 
      // Jump upwards (decrease top position)
      currentTop--;
      container.style.top = currentTop + "px";
    } else {
      clearInterval(jumpInterval); // Stop jumping after reaching peak
      fall(); // Start falling back down
    }
  }, 10); // Adjust this value to control jump speed (lower for faster jump)
}

function fall() {
  let currentTop = container.offsetTop;
  let fallInterval = setInterval(function() {
    if (currentTop < container.offsetTop) { // Fall back down to original position
      currentTop++;
      container.style.top = currentTop + "px";
    } else {
      clearInterval(fallInterval);
    }
  }, 10); // Adjust this value to control fall speed
}
