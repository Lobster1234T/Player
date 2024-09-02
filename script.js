const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const playPauseImage = document.getElementById('playPauseImage');
const back15Button = document.getElementById('back15');
const forward30Button = document.getElementById('forward30');

// Обработчик события для кнопки воспроизведения/паузы
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseImage.src = 'pause.png'; // Изменение изображения на "пауза"
    } else {
        audio.pause();
        playPauseImage.src = 'play.png'; // Изменение изображения на "играть"
    }
});

// Обработчик события для кнопки перемотки назад на 15 секунд
back15Button.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 15);
});

// Обработчик события для кнопки перемотки вперед на 30 секунд
forward30Button.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 30);
});
