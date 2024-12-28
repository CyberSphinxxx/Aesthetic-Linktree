$(function () {
    const message = "Come Back!";
    let original;
  
    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      const title = $('title').text();
      if (title !== message) {
        original = title;
      }
      document.title = message;
    });
  });
  
  const startTime = Date.now();
  
  function updateTimer() {
    const timerElement = document.getElementById('timer');
    const elapsedTime = Date.now() - startTime;
  
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  setInterval(updateTimer, 1000);
  
  function toggleAccessory(accessoryUrl) {
    const existingAccessory = document.querySelector(`.accessory[style*="${accessoryUrl}"]`);
    
    if (existingAccessory) {
      existingAccessory.remove();
    } else {
      const accessory = document.createElement('div');
      accessory.className = 'accessory';
      accessory.style.backgroundImage = `url('${accessoryUrl}')`;
      document.querySelector('.profile-container').appendChild(accessory);
    }
  }
  
  const volumeBtn = document.getElementById('volumeBtn');
  const video = document.getElementById('myVideo');
  const bgMusic = document.getElementById('bgMusic');
  
  function toggleMute() {
    if (video.muted) {
      video.muted = false;
      bgMusic.play();
      volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      video.muted = true;
      bgMusic.pause();
      volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  }
  
  volumeBtn.addEventListener('click', toggleMute);
  
  // Preload audio
  bgMusic.load();
  
  // Initialize volume button state
  toggleMute();