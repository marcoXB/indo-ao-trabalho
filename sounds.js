<<<<<<< HEAD
// =====================
// SISTEMA DE ÁUDIO GLOBAL
// =====================

// Lista dos sons — só colocar novos aqui quando precisar
const Sounds = {
    engineFail: "audios/car-engine-ignition-fail-352768.mp3",
    doorOpen: "audios/door-opening-397990.mp3",
    electricity: "audios/electricity-101990.mp3",
    gameOver: "audios/game-over-401236.mp3",
    jetPump: "audios/jet-pump-cleaning-indoor-ac-unit-sound.mp3",
    kidCrying: "audios/kid-crying-32970.mp3",
    letterOpening: "audios/letter-opening-82825.mp3",
    mechanical: "audios/mechanical1-107614.mp3",
    victory: "audios/victory-chime-366449.mp3",
    walking: "audios/walking-on-concrete-ver-2-268513.mp3",
};

// Todos os objetos de áudio carregados
const AudioBank = {};

// Pré-carregar todos os sons
function preloadSounds() {
    for (const key in Sounds) {
        const audio = new Audio(Sounds[key]);
        audio.preload = "auto";
        AudioBank[key] = audio;
    }
}

// Tocar qualquer som por nome
function playSound(name) {
    const audio = AudioBank[name];
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}

// Chrome bloqueia autoplay → desbloqueamos após 1 clique
let audioUnlocked = false;
function unlockAudio() {
    if (audioUnlocked) return;

    for (const key in AudioBank) {
        const a = AudioBank[key];
        a.muted = true;
        a.play().then(() => {
            a.pause();
            a.muted = false;
        }).catch(() => {});
    }

    audioUnlocked = true;
}

// Tocar som automaticamente ao entrar na página
// Basta chamar: playOnLoad("engineFail")
function playOnLoad(name) {
    window.addEventListener("load", () => {
        // Se já desbloqueado, toca direto
        if (audioUnlocked) {
            playSound(name);
        } else {
            // Toca no primeiro clique (Chrome exige interação)
            document.body.addEventListener("click", () => {
                playSound(name);
            }, { once: true });
        }
    });
}

// Inicializa
document.addEventListener("DOMContentLoaded", () => {
    preloadSounds();

    // Qualquer clique libera áudio global no Chrome
    document.body.addEventListener("click", unlockAudio, { once: true });
});
=======
// =====================
// SISTEMA DE ÁUDIO GLOBAL
// =====================

// Lista dos sons — só colocar novos aqui quando precisar
const Sounds = {
    engineFail: "audios/car-engine-ignition-fail-352768.mp3",
    doorOpen: "audios/door-opening-397990.mp3",
    electricity: "audios/electricity-101990.mp3",
    gameOver: "audios/game-over-401236.mp3",
    jetPump: "audios/jet-pump-cleaning-indoor-ac-unit-sound.mp3",
    kidCrying: "audios/kid-crying-32970.mp3",
    letterOpening: "audios/letter-opening-82825.mp3",
    mechanical: "audios/mechanical1-107614.mp3",
    victory: "audios/victory-chime-366449.mp3",
    walking: "audios/walking-on-concrete-ver-2-268513.mp3",
};

// Todos os objetos de áudio carregados
const AudioBank = {};

// Pré-carregar todos os sons
function preloadSounds() {
    for (const key in Sounds) {
        const audio = new Audio(Sounds[key]);
        audio.preload = "auto";
        AudioBank[key] = audio;
    }
}

// Tocar qualquer som por nome
function playSound(name) {
    const audio = AudioBank[name];
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
}

// Chrome bloqueia autoplay → desbloqueamos após 1 clique
let audioUnlocked = false;
function unlockAudio() {
    if (audioUnlocked) return;

    for (const key in AudioBank) {
        const a = AudioBank[key];
        a.muted = true;
        a.play().then(() => {
            a.pause();
            a.muted = false;
        }).catch(() => {});
    }

    audioUnlocked = true;
}

// Tocar som automaticamente ao entrar na página
// Basta chamar: playOnLoad("engineFail")
function playOnLoad(name) {
    window.addEventListener("load", () => {
        // Se já desbloqueado, toca direto
        if (audioUnlocked) {
            playSound(name);
        } else {
            // Toca no primeiro clique (Chrome exige interação)
            document.body.addEventListener("click", () => {
                playSound(name);
            }, { once: true });
        }
    });
}

// Inicializa
document.addEventListener("DOMContentLoaded", () => {
    preloadSounds();

    // Qualquer clique libera áudio global no Chrome
    document.body.addEventListener("click", unlockAudio, { once: true });
});
>>>>>>> bd390cdfa151a138be0da223053d557b9111c260
