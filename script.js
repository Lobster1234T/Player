document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPause');
    const playPauseImage = document.getElementById('playPauseImage');
    const back15Button = document.getElementById('back15');
    const forward30Button = document.getElementById('forward30');

    // Функция переключения между воспроизведением и паузой
    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseImage.src = 'UI/Pause.png';  // Меняем изображение на "пауза"
        } else {
            audio.pause();
            playPauseImage.src = 'UI/play.png';  // Меняем изображение на "играть"
        }
    });

    // Функция перемотки назад на 15 секунд
    back15Button.addEventListener('click', function() {
        audio.currentTime -= 15;
    });

    // Функция перемотки вперед на 30 секунд
    forward30Button.addEventListener('click', function() {
        audio.currentTime += 30;
    });
});
