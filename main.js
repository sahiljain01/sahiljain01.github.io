function matchImageHeightToText() {
  const textElement = document.getElementById('about-me'); // Get the text element
  const imageElement = document.getElementById('profile-pic'); // Get the image element

  // Get the EXACT height of the text block
  const textHeight = textElement.offsetHeight; 

  console.warn(textHeight);
  // Apply the height to the image
  imageElement.style.height = textHeight + "px";  
}

// Call on page Load
window.onload = matchImageHeightToText;

// Recalculate on window resize if text lines may change 
window.onresize = matchImageHeightToText; 

