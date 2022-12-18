function displayTime() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const session = hrs > 12 ? 'PM' : 'AM';
    const hours = hrs < 10 ? `0${hrs}` : hrs;
    const minutes = min < 10 ? `0${min}` : min;
    const seconds = sec < 10 ? `0${sec}` : sec;
  
    document.getElementById('session').innerHTML = session;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }
  
  setInterval(displayTime, 1000);
  