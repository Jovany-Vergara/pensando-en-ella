document.querySelector('.heart').addEventListener('click', function () {
    let audio = document.getElementById('myAudio');
    audio.play();
  
    let container = document.querySelector('.container');
    container.classList.remove('hidden');
  
    let clickHeartText = document.getElementById('clickHeartText');
    clickHeartText.classList.add('hidden');
  });