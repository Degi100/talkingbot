const button = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Speech Recognition started");
};

recognition.onresult = (event) => {
  const spokenwords = event.results[0][0].transcript;
  computerSpeech(spokenwords);
};

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "de";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;

  determineWords(speech, words);
  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("wie geht es dir")) {
    speech.text = "Mir geht es gut, danke! Und Dir?";
  }

  if (words.includes("Hallo")) {
    speech.text = "hallo... , ich bin ein programmierter Bot,.... Bisher kann ich nur wenige Kommandos. Aber mein Entwickler, bringt mir jeden Tag neue Dinge bei. Wähle unten aus der Liste etwas aus, und ich werde mit dir interagieren."
  }

  if (words.includes("wie ist das Wetter")) {
    speech.text = "bleibe lieber zu Hause, denn dort ist es am schönsten";
  }
  if (words.includes("bist du verliebt")) {
    speech.text = "ich habe mich in dich verliebt";
  }
  if (words.includes("was machst du heute")) {
    speech.text = "ich lerne künstliche intelligenz, ha ha ha";
  }
  if (words.includes("öffne youtube")) {
    speech.text = "youtube wird geöffnet";
    window.open("http://www.youtube.de");
  }
  if (words.includes("öffne google")) {
    speech.text = "google wird geöffnet";
    window.open("http://www.google.de");
  }
}

button.addEventListener("click", () => {
  recognition.start();
});
