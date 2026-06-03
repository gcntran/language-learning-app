async function loadFreshOnlineLesson(force = false) {
  if (state.lessonSource !== "online") return;

  if (!navigator.onLine) {
    // Force clear the dynamic set so the app drops back to offline arrays safely
    state.dynamicSet = null; 
    renderAll();
    setApiStatus("You appear to be offline, so the app is using saved examples.");
    return;
  }

  setApiStatus("Loading a fresh online lesson...");
  elements.onlineLessonButton.disabled = true;
  elements.newSetButton.disabled = true;

  try {
    const topic = selectTopic(force);
    const [reading, words] = await Promise.all([
      fetchReadingPassage(topic),
      fetchVocabularyWords(topic)
    ]);
    const lesson = buildOnlineLesson(topic, reading, words);
    state.dynamicSet = lesson;
    state.dynamicSetDate = todayKey;
    state.dynamicSetLanguage = state.targetLanguage;
    state.currentWord = 0;
    saveState();
    renderAll();
    setApiStatus(`Online lesson loaded from ${getLanguageConfig().apiLabel}: ${lesson.topicLabel}.`);
  } catch {
    // Force a re-render so the active UI drops back to offline data rather than hanging on old state
    state.dynamicSet = null; 
    renderAll();
    setApiStatus("The online lesson could not load, so the app is using saved examples.");
  } finally {
    elements.onlineLessonButton.disabled = false;
    elements.newSetButton.disabled = false;
  }
}

function speakListeningText() {
  if (!("speechSynthesis" in window)) {
    elements.listeningFeedback.textContent = "Speech playback is not available in this browser.";
    return;
  }

  const lang = getLanguageConfig().speechLang;
  const voices = window.speechSynthesis.getVoices();
  
  // Check if the required language pack actually exists to warn the user, instead of failing silently
  if (voices.length > 0) {
    const hasVoice = voices.some(voice => voice.lang.startsWith(lang) || voice.lang.startsWith(lang.split('-')[0]));
    if (!hasVoice) {
      elements.listeningFeedback.textContent = `Note: Your browser may not have a ${lang} voice installed.`;
    } else {
      elements.listeningFeedback.textContent = "";
    }
  }

  const utterance = new SpeechSynthesisUtterance(getActiveSet().listening.text);
  utterance.lang = lang;
  utterance.rate = state.level === "beginner" ? 0.82 : state.level === "advanced" ? 1 : 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}