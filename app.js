const todayKey = toLocalDateKey(new Date());

const skills = [
  {
    id: "listening",
    label: "Listening",
    badge: "L",
    description: "Listen for the main idea, then replay once for details.",
    activity: "Play the passage in Practice and answer the question."
  },
  {
    id: "speaking",
    label: "Speaking",
    badge: "S",
    description: "Answer aloud with full sentences and one reason.",
    activity: "Use the speaking prompt, then write or record your answer."
  },
  {
    id: "reading",
    label: "Reading",
    badge: "R",
    description: "Read a short text and explain the main point simply.",
    activity: "Read the passage and write the main idea."
  },
  {
    id: "writing",
    label: "Writing",
    badge: "W",
    description: "Write a short answer and revise one sentence.",
    activity: "Complete the writing prompt or journal entry."
  },
  {
    id: "vocabulary",
    label: "Vocabulary",
    badge: "V",
    description: "Learn useful words in context and save the hard ones.",
    activity: "Study each word, example, and use one in your own sentence."
  },
  {
    id: "grammar",
    label: "Grammar",
    badge: "G",
    description: "Fix a sentence and notice why the correction works.",
    activity: "Correct the grammar sentence in Practice."
  }
];

const minutePlans = {
  60: { listening: 10, speaking: 10, reading: 10, writing: 12, vocabulary: 10, grammar: 8 },
  90: { listening: 15, speaking: 15, reading: 15, writing: 18, vocabulary: 14, grammar: 13 },
  120: { listening: 20, speaking: 20, reading: 20, writing: 25, vocabulary: 18, grammar: 17 }
};

const exerciseSets = [
  {
    words: [
      {
        word: "consistent",
        meaning: "doing something regularly and in the same reliable way",
        example: "Consistent practice helps new words stay in your memory."
      },
      {
        word: "improve",
        meaning: "to become better",
        example: "I want to improve my speaking confidence this month."
      },
      {
        word: "notice",
        meaning: "to see, hear, or become aware of something",
        example: "When you read slowly, you notice useful sentence patterns."
      }
    ],
    listening: {
      text: "Mina studies English for ninety minutes after work. She starts with listening because it helps her relax. Then she writes five sentences about her day and says them aloud. She does not study perfectly, but she studies consistently.",
      question: "What is the main idea?",
      options: [
        "Mina builds English with a steady daily routine.",
        "Mina studies only grammar after work.",
        "Mina wants to stop learning English."
      ],
      answer: 0
    },
    speaking: "Describe your normal day in English. Add one thing you want to improve.",
    reading: {
      text: "A good study routine does not need to be complicated. It should be easy to repeat, balanced across different skills, and flexible when life is busy. The most important thing is to return the next day.",
      answer: "A good routine should be simple, balanced, flexible, and repeatable."
    },
    grammar: {
      question: "Correct this sentence: She go to class every Monday.",
      answer: "She goes to class every Monday."
    },
    writing: "Write 80-120 words about why you want to learn English and how it can help your life."
  },
  {
    words: [
      {
        word: "confident",
        meaning: "feeling sure about your ability",
        example: "I feel more confident when I practice speaking every day."
      },
      {
        word: "challenge",
        meaning: "something difficult that helps you grow",
        example: "Listening to fast English is a challenge, but it gets easier."
      },
      {
        word: "explain",
        meaning: "to make something clear",
        example: "Can you explain your opinion in two simple sentences?"
      }
    ],
    listening: {
      text: "Jon was nervous when he spoke English with new people. He started recording short answers on his phone. After two weeks, he noticed fewer pauses and clearer sentences. The recordings helped him hear his progress.",
      question: "What helped Jon improve?",
      options: [
        "Recording short speaking answers.",
        "Memorizing a long grammar book.",
        "Avoiding conversations."
      ],
      answer: 0
    },
    speaking: "Talk about a challenge you had recently. What happened, and what did you learn?",
    reading: {
      text: "Speaking practice feels uncomfortable at first because it is active. You must choose words quickly, organize ideas, and accept small mistakes. That discomfort is normal, and it usually means your brain is learning.",
      answer: "Speaking feels hard because it is active, but the discomfort is normal and useful."
    },
    grammar: {
      question: "Correct this sentence: I have many informations about the course.",
      answer: "I have a lot of information about the course."
    },
    writing: "Write a short message asking a teacher or friend for advice about improving English."
  },
  {
    words: [
      {
        word: "priority",
        meaning: "something important that should be done first",
        example: "My priority is to speak clearly, not perfectly."
      },
      {
        word: "compare",
        meaning: "to look at two or more things and notice differences",
        example: "Compare your old writing with your new writing once a month."
      },
      {
        word: "summary",
        meaning: "a short explanation of the main points",
        example: "Write a summary after you read an article."
      }
    ],
    listening: {
      text: "Lina reads one short article each morning. She writes a three-sentence summary and saves five useful words. On Sunday, she compares her summaries and chooses one sentence to improve.",
      question: "What does Lina do on Sunday?",
      options: [
        "She compares her summaries and improves one sentence.",
        "She stops reading completely.",
        "She studies pronunciation for five hours."
      ],
      answer: 0
    },
    speaking: "Give a one-minute summary of a movie, show, book, or article you know.",
    reading: {
      text: "Summaries are powerful because they force you to choose what matters. When you summarize, you practice reading, vocabulary, grammar, and writing at the same time. A short summary can teach more than copying a long paragraph.",
      answer: "Summaries help you choose main ideas and practice several English skills together."
    },
    grammar: {
      question: "Correct this sentence: I am agree with this idea.",
      answer: "I agree with this idea."
    },
    writing: "Write a summary of something you watched, read, or learned this week."
  }
];

const vietnameseExerciseSets = [
  {
    words: [
      {
        word: "kiên trì",
        meaning: "continuing to do something even when it is difficult",
        example: "Tôi học tiếng Việt mỗi ngày vì tôi muốn kiên trì hơn."
      },
      {
        word: "cải thiện",
        meaning: "to make something better",
        example: "Tôi muốn cải thiện phát âm và vốn từ vựng."
      },
      {
        word: "thói quen",
        meaning: "a regular habit or routine",
        example: "Một thói quen nhỏ mỗi ngày có thể giúp bạn tiến bộ."
      }
    ],
    listening: {
      text: "Lan học tiếng Việt ba mươi phút mỗi buổi sáng. Cô ấy nghe một đoạn ngắn, đọc lại vài câu, rồi viết ba câu về ngày của mình. Lan không học quá lâu, nhưng cô ấy học đều đặn.",
      question: "Ý chính là gì?",
      options: [
        "Lan tiến bộ nhờ một thói quen học đều đặn.",
        "Lan chỉ học ngữ pháp vào buổi tối.",
        "Lan không thích học tiếng Việt."
      ],
      answer: 0
    },
    speaking: "Hãy nói về một ngày bình thường của bạn bằng tiếng Việt. Thêm một điều bạn muốn cải thiện.",
    reading: {
      text: "Một kế hoạch học tốt không cần quá phức tạp. Kế hoạch đó nên dễ lặp lại, có đủ kỹ năng khác nhau, và linh hoạt khi bạn bận. Điều quan trọng nhất là quay lại học vào ngày hôm sau.",
      answer: "Kế hoạch học tốt nên đơn giản, cân bằng, linh hoạt và dễ lặp lại."
    },
    grammar: {
      question: "Sửa câu này: Tôi là học tiếng Việt mỗi ngày.",
      answer: "Tôi học tiếng Việt mỗi ngày."
    },
    writing: "Viết 80-120 từ về lý do bạn muốn học tiếng Việt và tiếng Việt có thể giúp cuộc sống của bạn như thế nào."
  },
  {
    words: [
      {
        word: "tự tin",
        meaning: "feeling sure about your ability",
        example: "Tôi tự tin hơn khi luyện nói mỗi ngày."
      },
      {
        word: "thử thách",
        meaning: "a difficult task that helps you grow",
        example: "Nghe người bản xứ nói nhanh là một thử thách."
      },
      {
        word: "giải thích",
        meaning: "to make something clear",
        example: "Bạn có thể giải thích ý kiến của mình bằng hai câu không?"
      }
    ],
    listening: {
      text: "Minh hơi lo lắng khi nói tiếng Việt với người mới. Anh ấy bắt đầu ghi âm câu trả lời ngắn trên điện thoại. Sau hai tuần, Minh nghe lại và nhận thấy mình nói rõ hơn.",
      question: "Điều gì giúp Minh tiến bộ?",
      options: [
        "Ghi âm các câu trả lời ngắn.",
        "Tránh nói chuyện với người khác.",
        "Chỉ học một cuốn sách ngữ pháp."
      ],
      answer: 0
    },
    speaking: "Hãy nói về một thử thách gần đây. Chuyện gì đã xảy ra, và bạn học được gì?",
    reading: {
      text: "Luyện nói có thể khó lúc đầu vì bạn cần chọn từ nhanh, sắp xếp ý tưởng và chấp nhận lỗi nhỏ. Cảm giác không thoải mái là bình thường, và đó thường là dấu hiệu bạn đang học.",
      answer: "Luyện nói khó vì phải dùng ngôn ngữ chủ động, nhưng cảm giác khó chịu là bình thường và có ích."
    },
    grammar: {
      question: "Sửa câu này: Tôi có rất nhiều những thông tin về khóa học này.",
      answer: "Tôi có nhiều thông tin về khóa học này."
    },
    writing: "Viết một tin nhắn ngắn để hỏi giáo viên hoặc bạn bè lời khuyên về cách cải thiện tiếng Việt."
  }
];

const lessonTopics = [
  { id: "daily", label: "Daily mix", query: "daily life", wikiTitle: "" },
  { id: "communication", label: "Communication", query: "communication", wikiTitle: "Communication" },
  { id: "travel", label: "Travel", query: "travel", wikiTitle: "Travel" },
  { id: "food", label: "Food", query: "food", wikiTitle: "Food" },
  { id: "work", label: "Work", query: "work", wikiTitle: "Employment" },
  { id: "health", label: "Health", query: "health", wikiTitle: "Health" },
  { id: "technology", label: "Technology", query: "technology", wikiTitle: "Technology" },
  { id: "culture", label: "Culture", query: "culture", wikiTitle: "Culture" },
  { id: "education", label: "Education", query: "education", wikiTitle: "Education" },
  { id: "environment", label: "Environment", query: "environment", wikiTitle: "Natural_environment" },
  { id: "surprise", label: "Surprise article", query: "learning", wikiTitle: "random" }
];

const vietnameseLessonTopics = [
  { id: "daily", label: "Daily mix", query: "đời sống", wikiTitle: "" },
  { id: "communication", label: "Giao tiếp", query: "giao tiếp", wikiTitle: "Giao_tiếp" },
  { id: "travel", label: "Du lịch", query: "du lịch", wikiTitle: "Du_lịch" },
  { id: "food", label: "Ẩm thực", query: "ẩm thực", wikiTitle: "Ẩm_thực" },
  { id: "work", label: "Công việc", query: "công việc", wikiTitle: "Việc_làm" },
  { id: "health", label: "Sức khỏe", query: "sức khỏe", wikiTitle: "Sức_khỏe" },
  { id: "technology", label: "Công nghệ", query: "công nghệ", wikiTitle: "Công_nghệ" },
  { id: "culture", label: "Văn hóa", query: "văn hóa", wikiTitle: "Văn_hóa" },
  { id: "education", label: "Giáo dục", query: "giáo dục", wikiTitle: "Giáo_dục" },
  { id: "environment", label: "Môi trường", query: "môi trường", wikiTitle: "Môi_trường_tự_nhiên" },
  { id: "surprise", label: "Bài bất ngờ", query: "học tập", wikiTitle: "random" }
];

const grammarTemplates = [
  {
    question: "Correct this sentence: I am interested to learn new words.",
    answer: "I am interested in learning new words."
  },
  {
    question: "Correct this sentence: She can to explain her idea clearly.",
    answer: "She can explain her idea clearly."
  },
  {
    question: "Correct this sentence: There is many reasons to practice every day.",
    answer: "There are many reasons to practice every day."
  },
  {
    question: "Correct this sentence: I learned English since two years.",
    answer: "I have learned English for two years."
  },
  {
    question: "Correct this sentence: This topic is more easier than yesterday.",
    answer: "This topic is easier than yesterday."
  }
];

const vietnameseGrammarTemplates = [
  {
    question: "Sửa câu này: Tôi là học tiếng Việt mỗi ngày.",
    answer: "Tôi học tiếng Việt mỗi ngày."
  },
  {
    question: "Sửa câu này: Cô ấy là rất thích nghe nhạc Việt Nam.",
    answer: "Cô ấy rất thích nghe nhạc Việt Nam."
  },
  {
    question: "Sửa câu này: Hôm qua tôi đi đến chợ mua rau.",
    answer: "Hôm qua tôi đi chợ mua rau."
  },
  {
    question: "Sửa câu này: Tôi muốn nói tiếng Việt tốt hơn nhiều.",
    answer: "Tôi muốn nói tiếng Việt tốt hơn."
  },
  {
    question: "Sửa câu này: Anh ấy đang đọc sách ở trong thư viện.",
    answer: "Anh ấy đang đọc sách trong thư viện."
  }
];

const vietnameseWordBank = {
  communication: [
    ["giao tiếp", "communication", "Giao tiếp tốt giúp cuộc trò chuyện tự nhiên hơn."],
    ["lắng nghe", "to listen carefully", "Khi học ngôn ngữ, lắng nghe rất quan trọng."],
    ["diễn đạt", "to express an idea", "Tôi muốn diễn đạt ý kiến rõ ràng hơn."]
  ],
  travel: [
    ["hành trình", "journey or trip", "Hành trình này giúp tôi hiểu thêm về văn hóa Việt Nam."],
    ["địa điểm", "place or location", "Đà Nẵng là một địa điểm du lịch nổi tiếng."],
    ["khám phá", "to explore", "Tôi muốn khám phá nhiều thành phố mới."]
  ],
  food: [
    ["món ăn", "dish or food item", "Phở là một món ăn quen thuộc ở Việt Nam."],
    ["hương vị", "flavor", "Món này có hương vị rất đặc biệt."],
    ["nguyên liệu", "ingredient", "Rau thơm là nguyên liệu quan trọng trong nhiều món Việt."]
  ],
  work: [
    ["công việc", "work or job", "Công việc hôm nay khá bận nhưng thú vị."],
    ["kỹ năng", "skill", "Kỹ năng giao tiếp giúp tôi làm việc tốt hơn."],
    ["cuộc họp", "meeting", "Cuộc họp bắt đầu lúc chín giờ sáng."]
  ],
  health: [
    ["sức khỏe", "health", "Sức khỏe tốt giúp bạn học tập hiệu quả hơn."],
    ["nghỉ ngơi", "to rest", "Sau khi học, bạn nên nghỉ ngơi một chút."],
    ["thói quen", "habit", "Thói quen ngủ đủ rất quan trọng."]
  ],
  technology: [
    ["công nghệ", "technology", "Công nghệ giúp việc học ngôn ngữ dễ hơn."],
    ["ứng dụng", "application or app", "Tôi dùng một ứng dụng để luyện từ vựng."],
    ["thiết bị", "device", "Điện thoại là thiết bị tôi dùng mỗi ngày."]
  ],
  culture: [
    ["văn hóa", "culture", "Văn hóa Việt Nam rất đa dạng."],
    ["truyền thống", "tradition", "Tết là một truyền thống quan trọng."],
    ["lễ hội", "festival", "Lễ hội này có nhiều hoạt động thú vị."]
  ],
  education: [
    ["giáo dục", "education", "Giáo dục mở ra nhiều cơ hội mới."],
    ["bài học", "lesson", "Bài học hôm nay khá hữu ích."],
    ["kiến thức", "knowledge", "Tôi muốn mở rộng kiến thức của mình."]
  ],
  environment: [
    ["môi trường", "environment", "Chúng ta cần bảo vệ môi trường."],
    ["thiên nhiên", "nature", "Tôi thích đi bộ trong thiên nhiên."],
    ["bền vững", "sustainable", "Lối sống bền vững giúp giảm rác thải."]
  ],
  daily: [
    ["hằng ngày", "daily", "Tôi luyện nghe hằng ngày."],
    ["gia đình", "family", "Gia đình tôi thường ăn tối cùng nhau."],
    ["thời gian", "time", "Tôi cần quản lý thời gian tốt hơn."]
  ],
  surprise: [
    ["chủ đề", "topic", "Chủ đề hôm nay rất mới với tôi."],
    ["ý tưởng", "idea", "Tôi viết ba ý tưởng sau khi đọc."],
    ["tóm tắt", "summary", "Tôi viết một tóm tắt ngắn bằng tiếng Việt."]
  ]
};

const languageConfigs = {
  english: {
    name: "English",
    mark: "EN",
    brandEyebrow: "Daily English",
    title: "Gia English Studio",
    dashboardTitle: "Learn all English skills every day",
    heroTitle: "One calm session, six skills, steady progress.",
    heroText: "Choose the time you have today and follow the blocks. Short days stay focused; longer days add deeper practice.",
    speechLang: "en-US",
    wikiHost: "en.wikipedia.org",
    topics: lessonTopics,
    offlineSets: exerciseSets,
    grammarTemplates,
    apiLabel: "public English APIs",
    useDictionaryApi: true
  },
  vietnamese: {
    name: "Vietnamese",
    mark: "VI",
    brandEyebrow: "Daily Vietnamese",
    title: "Gia Vietnamese Studio",
    dashboardTitle: "Learn all Vietnamese skills every day",
    heroTitle: "One balanced Vietnamese session, every day.",
    heroText: "Practice listening, speaking, reading, writing, vocabulary, and grammar with Vietnamese topics that can refresh online.",
    speechLang: "vi-VN",
    wikiHost: "vi.wikipedia.org",
    topics: vietnameseLessonTopics,
    offlineSets: vietnameseExerciseSets,
    grammarTemplates: vietnameseGrammarTemplates,
    apiLabel: "Vietnamese Wikipedia plus built-in Vietnamese practice",
    useDictionaryApi: false
  }
};

const defaultState = {
  minutes: 90,
  level: "intermediate",
  targetLanguage: "english",
  lessonSource: "online",
  topic: "daily",
  dynamicSet: null,
  dynamicSetDate: "",
  dynamicSetLanguage: "",
  completedByDate: {},
  savedWords: [],
  journals: [],
  currentSet: 0,
  currentWord: 0,
  streak: 0,
  lastCompletedDate: ""
};

let state = loadState();

const elements = {
  navButtons: document.querySelectorAll(".nav-button"),
  views: document.querySelectorAll(".view"),
  todayLabel: document.getElementById("todayLabel"),
  brandMark: document.getElementById("brandMark"),
  brandEyebrow: document.getElementById("brandEyebrow"),
  brandTitle: document.getElementById("brandTitle"),
  heroTitle: document.getElementById("heroTitle"),
  heroText: document.getElementById("heroText"),
  targetLanguage: document.getElementById("targetLanguage"),
  dailyMinutes: document.getElementById("dailyMinutes"),
  levelSelect: document.getElementById("levelSelect"),
  lessonSource: document.getElementById("lessonSource"),
  topicSelect: document.getElementById("topicSelect"),
  apiStatus: document.getElementById("apiStatus"),
  startSessionButton: document.getElementById("startSessionButton"),
  routeSummary: document.getElementById("routeSummary"),
  skillGrid: document.getElementById("skillGrid"),
  streakCount: document.getElementById("streakCount"),
  sideProgressBar: document.getElementById("sideProgressBar"),
  sideProgressText: document.getElementById("sideProgressText"),
  newSetButton: document.getElementById("newSetButton"),
  onlineLessonButton: document.getElementById("onlineLessonButton"),
  wordTitle: document.getElementById("wordTitle"),
  wordMeaning: document.getElementById("wordMeaning"),
  wordExample: document.getElementById("wordExample"),
  saveWordButton: document.getElementById("saveWordButton"),
  prevWordButton: document.getElementById("prevWordButton"),
  nextWordButton: document.getElementById("nextWordButton"),
  listeningText: document.getElementById("listeningText"),
  listeningOptions: document.getElementById("listeningOptions"),
  listeningFeedback: document.getElementById("listeningFeedback"),
  speakPassageButton: document.getElementById("speakPassageButton"),
  speakingPrompt: document.getElementById("speakingPrompt"),
  speechButton: document.getElementById("speechButton"),
  speechTranscript: document.getElementById("speechTranscript"),
  readingText: document.getElementById("readingText"),
  readingAnswer: document.getElementById("readingAnswer"),
  showReadingAnswerButton: document.getElementById("showReadingAnswerButton"),
  readingFeedback: document.getElementById("readingFeedback"),
  grammarQuestion: document.getElementById("grammarQuestion"),
  grammarAnswer: document.getElementById("grammarAnswer"),
  checkGrammarButton: document.getElementById("checkGrammarButton"),
  grammarFeedback: document.getElementById("grammarFeedback"),
  writingPrompt: document.getElementById("writingPrompt"),
  writingBox: document.getElementById("writingBox"),
  wordCount: document.getElementById("wordCount"),
  saveWritingButton: document.getElementById("saveWritingButton"),
  completePracticeButton: document.getElementById("completePracticeButton"),
  saveJournalButton: document.getElementById("saveJournalButton"),
  journalEntry: document.getElementById("journalEntry"),
  journalStatus: document.getElementById("journalStatus"),
  promptButtons: document.querySelectorAll(".prompt-button"),
  resetTodayButton: document.getElementById("resetTodayButton"),
  todayMinutes: document.getElementById("todayMinutes"),
  completedSkills: document.getElementById("completedSkills"),
  savedWordCount: document.getElementById("savedWordCount"),
  savedWords: document.getElementById("savedWords"),
  journalList: document.getElementById("journalList")
};

init();

function init() {
  elements.todayLabel.textContent = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).format(new Date());

  normalizeSavedSettings();
  updateLanguageCopy();
  populateTopics();
  elements.targetLanguage.value = state.targetLanguage;
  elements.dailyMinutes.value = String(state.minutes);
  elements.levelSelect.value = state.level;
  elements.lessonSource.value = state.lessonSource;
  elements.topicSelect.value = state.topic;

  bindEvents();
  renderAll();
  loadDailyOnlineLesson();
}

function normalizeSavedSettings() {
  if (!languageConfigs[state.targetLanguage]) {
    state.targetLanguage = "english";
  }

  if (!["online", "offline"].includes(state.lessonSource)) {
    state.lessonSource = "online";
  }

  if (!getLanguageConfig().topics.some((topic) => topic.id === state.topic)) {
    state.topic = "daily";
  }

  if (!minutePlans[state.minutes]) {
    state.minutes = 90;
  }
}

function getLanguageConfig() {
  return languageConfigs[state.targetLanguage] || languageConfigs.english;
}

function updateLanguageCopy() {
  const config = getLanguageConfig();
  document.title = config.title;
  elements.brandMark.textContent = config.mark;
  elements.brandEyebrow.textContent = config.brandEyebrow;
  elements.brandTitle.textContent = config.title;
  elements.dashboardTitle.textContent = config.dashboardTitle;
  elements.heroTitle.textContent = config.heroTitle;
  elements.heroText.textContent = config.heroText;
}

function bindEvents() {
  elements.navButtons.forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.target));
  });

  elements.targetLanguage.addEventListener("change", () => {
    state.targetLanguage = elements.targetLanguage.value;
    state.topic = "daily";
    state.dynamicSet = null;
    state.dynamicSetDate = "";
    state.dynamicSetLanguage = "";
    updateLanguageCopy();
    populateTopics();
    elements.topicSelect.value = state.topic;
    persistAndRender();
    loadDailyOnlineLesson(true);
  });

  elements.dailyMinutes.addEventListener("change", () => {
    state.minutes = Number(elements.dailyMinutes.value);
    persistAndRender();
  });

  elements.levelSelect.addEventListener("change", () => {
    state.level = elements.levelSelect.value;
    persistAndRender();
  });

  elements.lessonSource.addEventListener("change", () => {
    state.lessonSource = elements.lessonSource.value;
    persistAndRender();
    loadDailyOnlineLesson(true);
  });

  elements.topicSelect.addEventListener("change", () => {
    state.topic = elements.topicSelect.value;
    state.dynamicSet = null;
    state.dynamicSetDate = "";
    persistAndRender();
    loadDailyOnlineLesson(true);
  });

  elements.startSessionButton.addEventListener("click", () => showView("practice"));
  elements.newSetButton.addEventListener("click", nextExerciseSet);
  elements.onlineLessonButton.addEventListener("click", () => loadFreshOnlineLesson(true));
  elements.nextWordButton.addEventListener("click", () => changeWord(1));
  elements.prevWordButton.addEventListener("click", () => changeWord(-1));
  elements.saveWordButton.addEventListener("click", saveCurrentWord);
  elements.speakPassageButton.addEventListener("click", speakListeningText);
  elements.speechButton.addEventListener("click", startSpeechRecognition);
  elements.showReadingAnswerButton.addEventListener("click", checkReading);
  elements.checkGrammarButton.addEventListener("click", checkGrammar);
  elements.writingBox.addEventListener("input", updateWritingWordCount);
  elements.saveWritingButton.addEventListener("click", saveWriting);
  elements.completePracticeButton.addEventListener("click", completePractice);
  elements.saveJournalButton.addEventListener("click", saveJournal);
  elements.resetTodayButton.addEventListener("click", resetToday);

  elements.promptButtons.forEach((button) => {
    button.addEventListener("click", () => {
      elements.journalEntry.value = button.textContent + "\n\n";
      elements.journalEntry.focus();
    });
  });
}

function showView(targetId) {
  elements.views.forEach((view) => view.classList.toggle("active", view.id === targetId));
  elements.navButtons.forEach((button) => button.classList.toggle("active", button.dataset.target === targetId));
}

function renderAll() {
  renderSkillGrid();
  renderPractice();
  renderProgress();
}

function populateTopics() {
  elements.topicSelect.innerHTML = getLanguageConfig().topics
    .map((topic) => `<option value="${topic.id}">${topic.label}</option>`)
    .join("");
}

function renderSkillGrid() {
  const plan = minutePlans[state.minutes];
  const completed = getCompletedSet();
  const sourceLabel = state.lessonSource === "online" ? "online daily lessons" : "offline examples";
  elements.routeSummary.textContent = `${state.minutes} minutes planned for ${getLanguageConfig().name} at ${state.level} level with ${sourceLabel}`;

  elements.skillGrid.innerHTML = skills
    .map((skill) => {
      const isComplete = completed.has(skill.id);
      const buttonText = isComplete ? "Completed" : "Mark complete";
      return `
        <article class="skill-card ${isComplete ? "completed" : ""}">
          <div class="skill-top">
            <span class="skill-badge" aria-hidden="true">${skill.badge}</span>
            <span class="skill-time">${plan[skill.id]} min</span>
          </div>
          <div>
            <h4>${skill.label}</h4>
            <p>${skill.description}</p>
            <p class="muted">${skill.activity}</p>
          </div>
          <button class="secondary-action" data-complete-skill="${skill.id}">${buttonText}</button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-complete-skill]").forEach((button) => {
    button.addEventListener("click", () => toggleSkill(button.dataset.completeSkill));
  });
}

function renderPractice() {
  const set = getActiveSet();
  if (state.currentWord >= set.words.length) state.currentWord = 0;
  const word = set.words[state.currentWord];

  elements.wordTitle.textContent = word.word;
  elements.wordMeaning.textContent = word.meaning;
  elements.wordExample.textContent = word.example;
  elements.listeningText.textContent = set.listening.text;
  elements.speakingPrompt.textContent = set.speaking;
  elements.readingText.textContent = set.reading.text;
  elements.grammarQuestion.textContent = set.grammar.question;
  elements.writingPrompt.textContent = set.writing;
  elements.listeningFeedback.textContent = "";
  elements.readingFeedback.textContent = "";
  elements.grammarFeedback.textContent = "";
  elements.grammarAnswer.value = "";
  elements.readingAnswer.value = "";

  elements.listeningOptions.innerHTML = set.listening.options
    .map((option, index) => {
      return `
        <label>
          <input type="radio" name="listeningAnswer" value="${index}">
          ${option}
        </label>
      `;
    })
    .join("");

  elements.listeningOptions.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => checkListening(Number(input.value)));
  });

  updateWritingWordCount();
}

function renderProgress() {
  const completed = getCompletedSet();
  const completedCount = completed.size;
  const percent = Math.round((completedCount / skills.length) * 100);

  elements.streakCount.textContent = String(state.streak);
  elements.sideProgressBar.style.width = `${percent}%`;
  elements.sideProgressText.textContent = `${completedCount} of ${skills.length} skills complete`;
  elements.todayMinutes.textContent = String(state.minutes);
  elements.completedSkills.textContent = `${completedCount}/${skills.length}`;
  elements.savedWordCount.textContent = String(state.savedWords.length);

  elements.savedWords.innerHTML = state.savedWords.length
    ? state.savedWords
        .slice()
        .reverse()
        .map((item) => `
          <article class="saved-word">
            <strong>${escapeHtml(item.word)}</strong>
            <p>${escapeHtml(item.meaning)}</p>
            <p class="muted">${escapeHtml(item.example)}</p>
          </article>
        `)
        .join("")
    : `<p class="muted">No saved words yet. Save difficult words from Practice.</p>`;

  elements.journalList.innerHTML = state.journals.length
    ? state.journals
        .slice()
        .reverse()
        .slice(0, 5)
        .map((entry) => `
          <article class="journal-item">
            <strong>${formatDate(entry.date)}</strong>
            <p>${escapeHtml(entry.text)}</p>
          </article>
        `)
        .join("")
    : `<p class="muted">Your saved journal entries will appear here.</p>`;
}

function getActiveSet() {
  if (state.lessonSource === "online" && state.dynamicSet && state.dynamicSetLanguage === state.targetLanguage) {
    return state.dynamicSet;
  }

  const offlineSets = getLanguageConfig().offlineSets;
  return offlineSets[state.currentSet % offlineSets.length];
}

function loadDailyOnlineLesson(force = false) {
  if (state.lessonSource !== "online") {
    setApiStatus("Offline examples are active.");
    return;
  }

  if (!force && state.dynamicSet && state.dynamicSetDate === todayKey && state.dynamicSetLanguage === state.targetLanguage) {
    setApiStatus(`Today's online lesson is ready: ${state.dynamicSet.topicLabel}.`);
    return;
  }

  loadFreshOnlineLesson(force);
}

async function loadFreshOnlineLesson(force = false) {
  if (state.lessonSource !== "online") return;

  if (!navigator.onLine) {
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
    setApiStatus("The online lesson could not load, so the app is using saved examples.");
  } finally {
    elements.onlineLessonButton.disabled = false;
    elements.newSetButton.disabled = false;
  }
}

function selectTopic(force) {
  if (state.topic !== "daily") {
    return getLanguageConfig().topics.find((topic) => topic.id === state.topic) || getLanguageConfig().topics[0];
  }

  const pool = getLanguageConfig().topics.filter((topic) => topic.id !== "daily");
  const seed = force ? Date.now() : hashString(todayKey);
  return pool[seed % pool.length];
}

async function fetchReadingPassage(topic) {
  const wikiPath =
    topic.wikiTitle === "random"
      ? "random/summary"
      : `summary/${encodeURIComponent(topic.wikiTitle || topic.query)}`;
  const response = await fetch(`https://${getLanguageConfig().wikiHost}/api/rest_v1/page/${wikiPath}`);

  if (!response.ok) {
    throw new Error("Wikipedia summary request failed.");
  }

  const data = await response.json();
  const extract = cleanText(data.extract || "");

  if (extract.split(/\s+/).length < 35) {
    throw new Error("Wikipedia summary was too short for practice.");
  }

  return {
    title: data.title || topic.label,
    text: limitWords(extract, state.level === "advanced" ? 135 : state.level === "beginner" ? 75 : 105)
  };
}

async function fetchVocabularyWords(topic) {
  if (state.targetLanguage === "vietnamese") {
    return vietnameseWordsForTopic(topic);
  }

  const datamuseUrl = `https://api.datamuse.com/words?topics=${encodeURIComponent(topic.query)}&md=d&max=24`;
  const response = await fetch(datamuseUrl);

  if (!response.ok) {
    throw new Error("Datamuse request failed.");
  }

  const candidates = (await response.json())
    .filter((item) => item.word && /^[a-z -]+$/i.test(item.word))
    .filter((item) => item.word.length > 3 && item.word.length < 16)
    .filter((item) => !item.word.includes(" "))
    .slice(0, 12);

  const words = [];

  for (const candidate of candidates) {
    const dictionaryWord = await fetchDictionaryWord(candidate.word);
    if (dictionaryWord) {
      words.push(dictionaryWord);
    } else if (candidate.defs && candidate.defs.length) {
      words.push(wordFromDatamuse(candidate, topic));
    }

    if (words.length === 3) break;
  }

  if (words.length < 3) {
    return fallbackWords(topic);
  }

  return words;
}

async function fetchDictionaryWord(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!response.ok) return null;

    const entries = await response.json();
    const firstEntry = entries[0];
    const meaning = firstEntry?.meanings?.find((item) => item.definitions?.length);
    const definition = meaning?.definitions?.[0];
    if (!definition?.definition) return null;

    return {
      word: firstEntry.word || word,
      meaning: definition.definition,
      example: definition.example || makeExample(word, firstEntry.word || word)
    };
  } catch {
    return null;
  }
}

function wordFromDatamuse(candidate, topic) {
  const rawDefinition = candidate.defs[0].replace(/^[a-z]+\t/i, "");
  return {
    word: candidate.word,
    meaning: rawDefinition,
    example: makeExample(topic.query, candidate.word)
  };
}

function fallbackWords(topic) {
  if (state.targetLanguage === "vietnamese") {
    return vietnameseWordsForTopic(topic);
  }

  return [
    {
      word: "context",
      meaning: "the situation or information around an idea that helps you understand it",
      example: `Context helps you understand new words about ${topic.query}.`
    },
    {
      word: "summary",
      meaning: "a short explanation of the main points",
      example: `Write a summary after reading about ${topic.query}.`
    },
    {
      word: "detail",
      meaning: "a small fact or piece of information",
      example: `Choose one detail from the article and explain it.`
    }
  ];
}

function buildOnlineLesson(topic, reading, words) {
  if (state.targetLanguage === "vietnamese") {
    return buildVietnameseOnlineLesson(topic, reading, words);
  }

  const title = reading.title || topic.label;
  const grammar = grammarTemplates[hashString(`${todayKey}-${title}`) % grammarTemplates.length];
  const mainIdea = `The passage gives basic information about ${title}.`;

  return {
    topicLabel: title,
    words,
    listening: {
      text: reading.text,
      question: "What is the main idea?",
      options: [
        mainIdea,
        "The passage is mainly a personal diary about yesterday.",
        "The passage gives cooking instructions from start to finish."
      ],
      answer: 0
    },
    speaking: `Give a one-minute explanation of ${title}. Include one fact and one opinion.`,
    reading: {
      text: reading.text,
      answer: mainIdea
    },
    grammar,
    writing: `Write 90-130 words about ${title}. Explain the main idea, then add your opinion.`
  };
}

function vietnameseWordsForTopic(topic) {
  const bank = vietnameseWordBank[topic.id] || vietnameseWordBank.daily;
  return bank.map(([word, meaning, example]) => ({ word, meaning, example }));
}

function buildVietnameseOnlineLesson(topic, reading, words) {
  const title = reading.title || topic.label;
  const grammar = vietnameseGrammarTemplates[hashString(`${todayKey}-${title}`) % vietnameseGrammarTemplates.length];
  const mainIdea = `Đoạn văn cung cấp thông tin cơ bản về ${title}.`;

  return {
    topicLabel: title,
    words,
    listening: {
      text: reading.text,
      question: "Ý chính là gì?",
      options: [
        mainIdea,
        "Đoạn văn chủ yếu là nhật ký cá nhân về ngày hôm qua.",
        "Đoạn văn chủ yếu hướng dẫn nấu ăn từng bước."
      ],
      answer: 0
    },
    speaking: `Hãy giải thích ${title} trong một phút. Nói một sự thật và một ý kiến của bạn.`,
    reading: {
      text: reading.text,
      answer: mainIdea
    },
    grammar,
    writing: `Viết 90-130 từ bằng tiếng Việt về ${title}. Trình bày ý chính, sau đó thêm ý kiến của bạn.`
  };
}

function toggleSkill(skillId) {
  const completed = getCompletedSet();
  completed.has(skillId) ? completed.delete(skillId) : completed.add(skillId);
  state.completedByDate[getCompletionKey()] = Array.from(completed);
  updateStreak();
  persistAndRender();
}

function getCompletedSet() {
  return new Set(state.completedByDate[getCompletionKey()] || []);
}

function getCompletionKey() {
  return `${todayKey}:${state.targetLanguage}`;
}

function completePractice() {
  state.completedByDate[getCompletionKey()] = Array.from(new Set([...getCompletedSet(), ...skills.map((skill) => skill.id)]));
  updateStreak();
  persistAndRender();
  showView("progress");
}

function updateStreak() {
  const completed = getCompletedSet();
  if (completed.size < skills.length) return;

  if (state.lastCompletedDate === todayKey) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = toLocalDateKey(yesterday);
  state.streak = state.lastCompletedDate === yesterdayKey ? state.streak + 1 : 1;
  state.lastCompletedDate = todayKey;
}

function nextExerciseSet() {
  if (state.lessonSource === "online") {
    loadFreshOnlineLesson(true);
    return;
  }

  state.currentSet = (state.currentSet + 1) % getLanguageConfig().offlineSets.length;
  state.currentWord = 0;
  persistAndRender();
}

function changeWord(direction) {
  const words = getActiveSet().words;
  state.currentWord = (state.currentWord + direction + words.length) % words.length;
  persistAndRender();
}

function saveCurrentWord() {
  const word = getActiveSet().words[state.currentWord];
  const exists = state.savedWords.some((item) => item.word === word.word);
  if (!exists) {
    state.savedWords.push({ ...word, date: todayKey });
    persistAndRender();
  }
  elements.saveWordButton.textContent = exists ? "Saved" : "Saved";
  window.setTimeout(() => {
    elements.saveWordButton.textContent = "Save";
  }, 1000);
}

function speakListeningText() {
  if (!("speechSynthesis" in window)) {
    elements.listeningFeedback.textContent = "Speech playback is not available in this browser.";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(getActiveSet().listening.text);
  utterance.lang = getLanguageConfig().speechLang;
  utterance.rate = state.level === "beginner" ? 0.82 : state.level === "advanced" ? 1 : 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function checkListening(selectedIndex) {
  const correct = getActiveSet().listening.answer === selectedIndex;
  elements.listeningFeedback.textContent = correct
    ? "Correct. You found the main idea."
    : "Try again. Listen for what the whole passage is mostly about.";
}

function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    elements.speechTranscript.placeholder = "Speech recognition is not available here. Type your answer instead.";
    elements.speechTranscript.focus();
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = getLanguageConfig().speechLang;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  elements.speechButton.textContent = "Listening";
  recognition.start();

  recognition.addEventListener("result", (event) => {
    elements.speechTranscript.value = event.results[0][0].transcript;
  });

  recognition.addEventListener("end", () => {
    elements.speechButton.textContent = "Speak";
  });
}

function checkReading() {
  const answer = elements.readingAnswer.value.trim();
  if (!answer) {
    elements.readingFeedback.textContent = "Write one sentence first.";
    return;
  }
  elements.readingFeedback.textContent = `Model answer: ${getActiveSet().reading.answer}`;
}

function checkGrammar() {
  const userAnswer = normalize(elements.grammarAnswer.value);
  const correctAnswer = normalize(getActiveSet().grammar.answer);
  elements.grammarFeedback.textContent =
    userAnswer === correctAnswer
      ? "Correct. Nice clean sentence."
      : `Model answer: ${getActiveSet().grammar.answer}`;
}

function updateWritingWordCount() {
  const words = elements.writingBox.value.trim().split(/\s+/).filter(Boolean);
  elements.wordCount.textContent = `${words.length} ${words.length === 1 ? "word" : "words"}`;
}

function saveWriting() {
  const text = elements.writingBox.value.trim();
  if (!text) {
    updateWritingWordCount();
    return;
  }
  state.journals.push({ date: todayKey, text });
  elements.writingBox.value = "";
  updateWritingWordCount();
  persistAndRender();
}

function saveJournal() {
  const text = elements.journalEntry.value.trim();
  if (!text) {
    elements.journalStatus.textContent = "Write a few sentences first.";
    return;
  }
  state.journals.push({ date: todayKey, text });
  elements.journalEntry.value = "";
  elements.journalStatus.textContent = "Saved. Your writing is in Progress.";
  persistAndRender();
}

function resetToday() {
  state.completedByDate[getCompletionKey()] = [];
  if (state.lastCompletedDate === todayKey) {
    state.lastCompletedDate = "";
    state.streak = Math.max(0, state.streak - 1);
  }
  persistAndRender();
}

function persistAndRender() {
  saveState();
  renderAll();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("giaEnglishStudio"));
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem("giaEnglishStudio", JSON.stringify(state));
}

function setApiStatus(message) {
  elements.apiStatus.textContent = message;
}

function cleanText(value) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\([^)]*\)/g, "")
    .trim();
}

function limitWords(value, maxWords) {
  const words = value.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return value;
  return `${words.slice(0, maxWords).join(" ")}.`;
}

function makeExample(topic, word) {
  return `The word "${word}" can help you discuss ${topic} in clearer English.`;
}

function hashString(value) {
  return String(value).split("").reduce((total, character) => {
    return (total * 31 + character.charCodeAt(0)) >>> 0;
  }, 7);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${dateString}T12:00:00`));
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/[.!?]+$/g, "");
}

function toLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
