function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const isDisabled = true;
  let timeIntervalId = 0;
  
  const buttonStart = document.querySelector('[data-start]');
  const buttonStop = document.querySelector('[data-stop]');
  
  buttonStop.disabled = isDisabled;
  
  buttonStart.addEventListener('click', onStartClick);
  buttonStop.addEventListener('click', onStopClick);
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  
  function onStartClick() {
    buttonStart.disabled = isDisabled;
    buttonStop.disabled = !isDisabled;
    timeIntervalId = setInterval(changeBackgroundColor, 1000);
  }
  
  function onStopClick() {
    buttonStart.disabled = !isDisabled;
    buttonStop.disabled = isDisabled;
    clearInterval(timeIntervalId);
  }