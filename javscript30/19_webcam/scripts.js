const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// Get user's video
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

// Grab photo from user's camera
function paintToCanvas() {
  // Make sure canvas to paint on is same size as video
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  // Set the amount of times an image will be saved
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Take the pixels out 
    let pixels = ctx.getImageData(0, 0, width, height); 
    // Mess with them 
    // pixels = redEffect(pixels); 
    // pixels = rgbSplit(pixels); 
    // ctx.globalAlpha = 0.1; 
    pixels = greenScreen(pixels); 
    // Put them back 
    ctx.putImageData(pixels, 0, 0); 
  }, 16);
}

function takePhoto() {
  // Playing audio
  snap.currentTime = 0;
  snap.play();

  // Take data from canvas
  const data = canvas.toDataURL("images/jpeg");
  // Create HTML elements where we'll insert the data
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "photo");
  link.innerHTML = `<img src="${data}" alt="Test photo!" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // red 
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue 
    }
    return pixels; 
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // red 
        pixels.data[i + 500] = pixels.data[i + 1]; // green
        pixels.data[i - 150] = pixels.data[i + 2] * 0.5; // blue 
    }
    return pixels;  
}

function greenScreen(pixels) {
    // Blank levels 
    const levels = {};

    // Grabbed every input 
  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out! If r, g, b anywhere near alpha 
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
