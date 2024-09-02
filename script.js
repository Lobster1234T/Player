const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const playPauseImage = document.getElementById('playPauseImage');
const back15Button = document.getElementById('back15');
const forward30Button = document.getElementById('forward30');

// ���������� ������� ��� ������ ���������������/�����
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseImage.src = 'pause.png'; // ��������� ����������� �� "�����"
    } else {
        audio.pause();
        playPauseImage.src = 'play.png'; // ��������� ����������� �� "������"
    }
});

// ���������� ������� ��� ������ ��������� ����� �� 15 ������
back15Button.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 15);
});

// ���������� ������� ��� ������ ��������� ������ �� 30 ������
forward30Button.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 30);
});
