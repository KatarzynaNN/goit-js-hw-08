import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = 'videoplayer-current-time';

const onTimeUpdate = function (data) {
  localStorage.setItem(timeKey, data.seconds);
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));

const timeSaved = localStorage.getItem(timeKey);
player.setCurrentTime(timeSaved);
