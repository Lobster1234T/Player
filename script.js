document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPause');
    const playPauseImage = document.getElementById('playPauseImage');
    const back15Button = document.getElementById('back15');
    const forward30Button = document.getElementById('forward30');

    // ������� ������������ ����� ���������������� � ������
    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseImage.src = 'UI/Pause.png';  // ������ ����������� �� "�����"
        } else {
            audio.pause();
            playPauseImage.src = 'UI/play.png';  // ������ ����������� �� "������"
        }
    });

    // ������� ��������� ����� �� 15 ������
    back15Button.addEventListener('click', function() {
        audio.currentTime -= 15;
    });

    // ������� ��������� ������ �� 30 ������
    forward30Button.addEventListener('click', function() {
        audio.currentTime += 30;
    });
});
