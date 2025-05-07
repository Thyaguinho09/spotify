function playMusic(path, name) {
    const audio = document.getElementById("audio-player");
    const trackInfo = document.getElementById("track-info");

    audio.src = path;
    audio.play();
    trackInfo.textContent = `Tocando agora: ${name}`;
}
