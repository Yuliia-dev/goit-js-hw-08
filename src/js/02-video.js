import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const PLAYER_KEY = 'videoplayer - current - time';

function onPlay(data) {
  const time = data.seconds;
  localStorage.setItem(PLAYER_KEY, time);
}
player.on('timeupdate', throttle(onPlay, 1000));

function getTime() {
  const saveTime = localStorage.getItem(PLAYER_KEY);

  player
    .setCurrentTime(saveTime)
    .then()
    .catch(function (error) {
      return error.name;
    });
}
player.on('play', throttle(getTime, 1000));
