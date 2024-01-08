
const getSong = document.querySelector('#song')
const playPauseBtn = document.querySelector('#play--pause')
const progressBar = document.querySelector('#progress')

getSong.onloadedmetadata = function () {
    progressBar.max = getSong.duration;
    progressBar.value = getSong.currentTime;
}
function playOrPause() {
    if(playPauseBtn.classList.contains('pause')){
        getSong.pause();
        playPauseBtn.classList.add('play')
        playPauseBtn.classList.remove('pause')
    }
    else{
        getSong.play();
            playPauseBtn.classList.add('pause');
            playPauseBtn.classList.remove('play');
        }
    }

// to update progress value as song is playing for//
if(getSong.play()){
    setInterval(() => {
        progressBar.value = getSong.currentTime;
    }, 500);
}

// update song when click anywhere on the progress bar//
progressBar.onchange = function () {
    getSong.currentTime = progressBar.value
}