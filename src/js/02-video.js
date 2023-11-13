import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const updateLocalStorage = throttle((currentTime) => {
  localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000);


player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    
player.on('timeupdate', function (e) {
    updateLocalStorage(e.seconds)
});

