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
        word: "ki\u00ean tr\u00ec",
        meaning: "continuing even when something is difficult",
        example: "T\u00f4i h\u1ecdc ti\u1ebfng Vi\u1ec7t m\u1ed7i ng\u00e0y v\u00ec t\u00f4i mu\u1ed1n ki\u00ean tr\u00ec h\u01a1n."
      },
      {
        word: "c\u1ea3i thi\u1ec7n",
        meaning: "to make something better",
        example: "T\u00f4i mu\u1ed1n c\u1ea3i thi\u1ec7n ph\u00e1t \u00e2m v\u00e0 v\u1ed1n t\u1eeb v\u1ef1ng."
      },
      {
        word: "th\u00f3i quen",
        meaning: "a regular habit or routine",
        example: "M\u1ed9t th\u00f3i quen nh\u1ecf m\u1ed7i ng\u00e0y c\u00f3 th\u1ec3 gi\u00fap b\u1ea1n ti\u1ebfn b\u1ed9."
      }
    ],
    listening: {
      text: "Lan h\u1ecdc ti\u1ebfng Vi\u1ec7t ba m\u01b0\u01a1i ph\u00fat m\u1ed7i bu\u1ed5i s\u00e1ng. C\u00f4 \u1ea5y nghe m\u1ed9t \u0111o\u1ea1n ng\u1eafn, \u0111\u1ecdc l\u1ea1i v\u00e0i c\u00e2u, r\u1ed3i vi\u1ebft ba c\u00e2u v\u1ec1 ng\u00e0y c\u1ee7a m\u00ecnh. Lan kh\u00f4ng h\u1ecdc qu\u00e1 l\u00e2u, nh\u01b0ng c\u00f4 \u1ea5y h\u1ecdc \u0111\u1ec1u \u0111\u1eb7n.",
      question: "\u00dd ch\u00ednh l\u00e0 g\u00ec?",
      options: [
        "Lan ti\u1ebfn b\u1ed9 nh\u1edd m\u1ed9t th\u00f3i quen h\u1ecdc \u0111\u1ec1u \u0111\u1eb7n.",
        "Lan ch\u1ec9 h\u1ecdc ng\u1eef ph\u00e1p v\u00e0o bu\u1ed5i t\u1ed1i.",
        "Lan kh\u00f4ng th\u00edch h\u1ecdc ti\u1ebfng Vi\u1ec7t."
      ],
      answer: 0
    },
    speaking: "H\u00e3y n\u00f3i v\u1ec1 m\u1ed9t ng\u00e0y b\u00ecnh th\u01b0\u1eddng c\u1ee7a b\u1ea1n b\u1eb1ng ti\u1ebfng Vi\u1ec7t. Th\u00eam m\u1ed9t \u0111i\u1ec1u b\u1ea1n mu\u1ed1n c\u1ea3i thi\u1ec7n.",
    reading: {
      text: "M\u1ed9t k\u1ebf ho\u1ea1ch h\u1ecdc t\u1ed1t kh\u00f4ng c\u1ea7n qu\u00e1 ph\u1ee9c t\u1ea1p. K\u1ebf ho\u1ea1ch \u0111\u00f3 n\u00ean d\u1ec5 l\u1eb7p l\u1ea1i, c\u00f3 \u0111\u1ee7 k\u1ef9 n\u0103ng kh\u00e1c nhau, v\u00e0 linh ho\u1ea1t khi b\u1ea1n b\u1eadn. \u0110i\u1ec1u quan tr\u1ecdng nh\u1ea5t l\u00e0 quay l\u1ea1i h\u1ecdc v\u00e0o ng\u00e0y h\u00f4m sau.",
      answer: "K\u1ebf ho\u1ea1ch h\u1ecdc t\u1ed1t n\u00ean \u0111\u01a1n gi\u1ea3n, c\u00e2n b\u1eb1ng, linh ho\u1ea1t v\u00e0 d\u1ec5 l\u1eb7p l\u1ea1i."
    },
    grammar: {
      question: "S\u1eeda c\u00e2u n\u00e0y: T\u00f4i l\u00e0 h\u1ecdc ti\u1ebfng Vi\u1ec7t m\u1ed7i ng\u00e0y.",
      answer: "T\u00f4i h\u1ecdc ti\u1ebfng Vi\u1ec7t m\u1ed7i ng\u00e0y."
    },
    writing: "Vi\u1ebft 80-120 t\u1eeb v\u1ec1 l\u00fd do b\u1ea1n mu\u1ed1n h\u1ecdc ti\u1ebfng Vi\u1ec7t v\u00e0 ti\u1ebfng Vi\u1ec7t c\u00f3 th\u1ec3 gi\u00fap cu\u1ed9c s\u1ed1ng c\u1ee7a b\u1ea1n nh\u01b0 th\u1ebf n\u00e0o."
  },
  {
    words: [
      {
        word: "t\u1ef1 tin",
        meaning: "feeling sure about your ability",
        example: "T\u00f4i t\u1ef1 tin h\u01a1n khi luy\u1ec7n n\u00f3i m\u1ed7i ng\u00e0y."
      },
      {
        word: "th\u1eed th\u00e1ch",
        meaning: "a difficult task that helps you grow",
        example: "Nghe ng\u01b0\u1eddi b\u1ea3n x\u1ee9 n\u00f3i nhanh l\u00e0 m\u1ed9t th\u1eed th\u00e1ch."
      },
      {
        word: "gi\u1ea3i th\u00edch",
        meaning: "to make something clear",
        example: "B\u1ea1n c\u00f3 th\u1ec3 gi\u1ea3i th\u00edch \u00fd ki\u1ebfn c\u1ee7a m\u00ecnh b\u1eb1ng hai c\u00e2u kh\u00f4ng?"
      }
    ],
    listening: {
      text: "Minh h\u01a1i lo l\u1eafng khi n\u00f3i ti\u1ebfng Vi\u1ec7t v\u1edbi ng\u01b0\u1eddi m\u1edbi. Anh \u1ea5y b\u1eaft \u0111\u1ea7u ghi \u00e2m c\u00e2u tr\u1ea3 l\u1eddi ng\u1eafn tr\u00ean \u0111i\u1ec7n tho\u1ea1i. Sau hai tu\u1ea7n, Minh nghe l\u1ea1i v\u00e0 nh\u1eadn th\u1ea5y m\u00ecnh n\u00f3i r\u00f5 h\u01a1n.",
      question: "\u0110i\u1ec1u g\u00ec gi\u00fap Minh ti\u1ebfn b\u1ed9?",
      options: [
        "Ghi \u00e2m c\u00e1c c\u00e2u tr\u1ea3 l\u1eddi ng\u1eafn.",
        "Tr\u00e1nh n\u00f3i chuy\u1ec7n v\u1edbi ng\u01b0\u1eddi kh\u00e1c.",
        "Ch\u1ec9 h\u1ecdc m\u1ed9t cu\u1ed1n s\u00e1ch ng\u1eef ph\u00e1p."
      ],
      answer: 0
    },
    speaking: "H\u00e3y n\u00f3i v\u1ec1 m\u1ed9t th\u1eed th\u00e1ch g\u1ea7n \u0111\u00e2y. Chuy\u1ec7n g\u00ec \u0111\u00e3 x\u1ea3y ra, v\u00e0 b\u1ea1n h\u1ecdc \u0111\u01b0\u1ee3c g\u00ec?",
    reading: {
      text: "Luy\u1ec7n n\u00f3i c\u00f3 th\u1ec3 kh\u00f3 l\u00fac \u0111\u1ea7u v\u00ec b\u1ea1n c\u1ea7n ch\u1ecdn t\u1eeb nhanh, s\u1eafp x\u1ebfp \u00fd t\u01b0\u1edfng v\u00e0 ch\u1ea5p nh\u1eadn l\u1ed7i nh\u1ecf. C\u1ea3m gi\u00e1c kh\u00f4ng tho\u1ea3i m\u00e1i l\u00e0 b\u00ecnh th\u01b0\u1eddng, v\u00e0 \u0111\u00f3 th\u01b0\u1eddng l\u00e0 d\u1ea5u hi\u1ec7u b\u1ea1n \u0111ang h\u1ecdc.",
      answer: "Luy\u1ec7n n\u00f3i kh\u00f3 v\u00ec ph\u1ea3i d\u00f9ng ng\u00f4n ng\u1eef ch\u1ee7 \u0111\u1ed9ng, nh\u01b0ng c\u1ea3m gi\u00e1c kh\u00f3 ch\u1ecbu l\u00e0 b\u00ecnh th\u01b0\u1eddng v\u00e0 c\u00f3 \u00edch."
    },
    grammar: {
      question: "S\u1eeda c\u00e2u n\u00e0y: T\u00f4i c\u00f3 r\u1ea5t nhi\u1ec1u nh\u1eefng th\u00f4ng tin v\u1ec1 kh\u00f3a h\u1ecdc n\u00e0y.",
      answer: "T\u00f4i c\u00f3 nhi\u1ec1u th\u00f4ng tin v\u1ec1 kh\u00f3a h\u1ecdc n\u00e0y."
    },
    writing: "Vi\u1ebft m\u1ed9t tin nh\u1eafn ng\u1eafn \u0111\u1ec3 h\u1ecfi gi\u00e1o vi\u00ean ho\u1eb7c b\u1ea1n b\u00e8 l\u1eddi khuy\u00ean v\u1ec1 c\u00e1ch c\u1ea3i thi\u1ec7n ti\u1ebfng Vi\u1ec7t."
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
  { id: "daily", label: "Daily mix", query: "\u0111\u1eddi s\u1ed1ng", wikiTitle: "" },
  { id: "communication", label: "Giao ti\u1ebfp", query: "giao ti\u1ebfp", wikiTitle: "Giao_ti\u1ebfp" },
  { id: "travel", label: "Du l\u1ecbch", query: "du l\u1ecbch", wikiTitle: "Du_l\u1ecbch" },
  { id: "food", label: "\u1ea8m th\u1ef1c", query: "\u1ea9m th\u1ef1c", wikiTitle: "\u1ea8m_th\u1ef1c" },
  { id: "work", label: "C\u00f4ng vi\u1ec7c", query: "c\u00f4ng vi\u1ec7c", wikiTitle: "Vi\u1ec7c_l\u00e0m" },
  { id: "health", label: "S\u1ee9c kh\u1ecfe", query: "s\u1ee9c kh\u1ecfe", wikiTitle: "S\u1ee9c_kh\u1ecfe" },
  { id: "technology", label: "C\u00f4ng ngh\u1ec7", query: "c\u00f4ng ngh\u1ec7", wikiTitle: "C\u00f4ng_ngh\u1ec7" },
  { id: "culture", label: "V\u0103n h\u00f3a", query: "v\u0103n h\u00f3a", wikiTitle: "V\u0103n_h\u00f3a" },
  { id: "education", label: "Gi\u00e1o d\u1ee5c", query: "gi\u00e1o d\u1ee5c", wikiTitle: "Gi\u00e1o_d\u1ee5c" },
  { id: "environment", label: "M\u00f4i tr\u01b0\u1eddng", query: "m\u00f4i tr\u01b0\u1eddng", wikiTitle: "M\u00f4i_tr\u01b0\u1eddng_t\u1ef1_nhi\u00ean" },
  { id: "surprise", label: "B\u00e0i b\u1ea5t ng\u1edd", query: "h\u1ecdc t\u1eadp", wikiTitle: "random" }
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
    question: "S\u1eeda c\u00e2u n\u00e0y: T\u00f4i l\u00e0 h\u1ecdc ti\u1ebfng Vi\u1ec7t m\u1ed7i ng\u00e0y.",
    answer: "T\u00f4i h\u1ecdc ti\u1ebfng Vi\u1ec7t m\u1ed7i ng\u00e0y."
  },
  {
    question: "S\u1eeda c\u00e2u n\u00e0y: C\u00f4 \u1ea5y l\u00e0 r\u1ea5t th\u00edch nghe nh\u1ea1c Vi\u1ec7t Nam.",
    answer: "C\u00f4 \u1ea5y r\u1ea5t th\u00edch nghe nh\u1ea1c Vi\u1ec7t Nam."
  },
  {
    question: "S\u1eeda c\u00e2u n\u00e0y: H\u00f4m qua t\u00f4i \u0111i \u0111\u1ebfn ch\u1ee3 mua rau.",
    answer: "H\u00f4m qua t\u00f4i \u0111i ch\u1ee3 mua rau."
  },
  {
    question: "S\u1eeda c\u00e2u n\u00e0y: T\u00f4i mu\u1ed1n n\u00f3i ti\u1ebfng Vi\u1ec7t t\u1ed1t h\u01a1n nhi\u1ec1u.",
    answer: "T\u00f4i mu\u1ed1n n\u00f3i ti\u1ebfng Vi\u1ec7t t\u1ed1t h\u01a1n."
  },
  {
    question: "S\u1eeda c\u00e2u n\u00e0y: Anh \u1ea5y \u0111ang \u0111\u1ecdc s\u00e1ch \u1edf trong th\u01b0 vi\u1ec7n.",
    answer: "Anh \u1ea5y \u0111ang \u0111\u1ecdc s\u00e1ch trong th\u01b0 vi\u1ec7n."
  }
];

const vietnameseWordBank = {
  communication: [
    ["giao ti\u1ebfp", "communication", "Giao ti\u1ebfp t\u1ed1t gi\u00fap cu\u1ed9c tr\u00f2 chuy\u1ec7n t\u1ef1 nhi\u00ean h\u01a1n."],
    ["l\u1eafng nghe", "to listen carefully", "Khi h\u1ecdc ng\u00f4n ng\u1eef, l\u1eafng nghe r\u1ea5t quan tr\u1ecdng."],
    ["di\u1ec5n \u0111\u1ea1t", "to express an idea", "T\u00f4i mu\u1ed1n di\u1ec5n \u0111\u1ea1t \u00fd ki\u1ebfn r\u00f5 r\u00e0ng h\u01a1n."]
  ],
  travel: [
    ["h\u00e0nh tr\u00ecnh", "journey or trip", "H\u00e0nh tr\u00ecnh n\u00e0y gi\u00fap t\u00f4i hi\u1ec3u th\u00eam v\u1ec1 v\u0103n h\u00f3a Vi\u1ec7t Nam."],
    ["\u0111\u1ecba \u0111i\u1ec3m", "place or location", "\u0110\u00e0 N\u1eb5ng l\u00e0 m\u1ed9t \u0111\u1ecba \u0111i\u1ec3m du l\u1ecbch n\u1ed5i ti\u1ebfng."],
    ["kh\u00e1m ph\u00e1", "to explore", "T\u00f4i mu\u1ed1n kh\u00e1m ph\u00e1 nhi\u1ec1u th\u00e0nh ph\u1ed1 m\u1edbi."]
  ],
  food: [
    ["m\u00f3n \u0103n", "dish or food item", "Ph\u1edf l\u00e0 m\u1ed9t m\u00f3n \u0103n quen thu\u1ed9c \u1edf Vi\u1ec7t Nam."],
    ["h\u01b0\u01a1ng v\u1ecb", "flavor", "M\u00f3n n\u00e0y c\u00f3 h\u01b0\u01a1ng v\u1ecb r\u1ea5t \u0111\u1eb7c bi\u1ec7t."],
    ["nguy\u00ean li\u1ec7u", "ingredient", "Rau th\u01a1m l\u00e0 nguy\u00ean li\u1ec7u quan tr\u1ecdng trong nhi\u1ec1u m\u00f3n Vi\u1ec7t."]
  ],
  work: [
    ["c\u00f4ng vi\u1ec7c", "work or job", "C\u00f4ng vi\u1ec7c h\u00f4m nay kh\u00e1 b\u1eadn nh\u01b0ng th\u00fa v\u1ecb."],
    ["k\u1ef9 n\u0103ng", "skill", "K\u1ef9 n\u0103ng giao ti\u1ebfp gi\u00fap t\u00f4i l\u00e0m vi\u1ec7c t\u1ed1t h\u01a1n."],
    ["cu\u1ed9c h\u1ecdp", "meeting", "Cu\u1ed9c h\u1ecdp b\u1eaft \u0111\u1ea7u l\u00fac ch\u00edn gi\u1edd s\u00e1ng."]
  ],
  health: [
    ["s\u1ee9c kh\u1ecfe", "health", "S\u1ee9c kh\u1ecfe t\u1ed1t gi\u00fap b\u1ea1n h\u1ecdc t\u1eadp hi\u1ec7u qu\u1ea3 h\u01a1n."],
    ["ngh\u1ec9 ng\u01a1i", "to rest", "Sau khi h\u1ecdc, b\u1ea1n n\u00ean ngh\u1ec9 ng\u01a1i m\u1ed9t ch\u00fat."],
    ["th\u00f3i quen", "habit", "Th\u00f3i quen ng\u1ee7 \u0111\u1ee7 r\u1ea5t quan tr\u1ecdng."]
  ],
  technology: [
    ["c\u00f4ng ngh\u1ec7", "technology", "C\u00f4ng ngh\u1ec7 gi\u00fap vi\u1ec7c h\u1ecdc ng\u00f4n ng\u1eef d\u1ec5 h\u01a1n."],
    ["\u1ee9ng d\u1ee5ng", "application or app", "T\u00f4i d\u00f9ng m\u1ed9t \u1ee9ng d\u1ee5ng \u0111\u1ec3 luy\u1ec7n t\u1eeb v\u1ef1ng."],
    ["thi\u1ebft b\u1ecb", "device", "\u0110i\u1ec7n tho\u1ea1i l\u00e0 thi\u1ebft b\u1ecb t\u00f4i d\u00f9ng m\u1ed7i ng\u00e0y."]
  ],
  culture: [
    ["v\u0103n h\u00f3a", "culture", "V\u0103n h\u00f3a Vi\u1ec7t Nam r\u1ea5t \u0111a d\u1ea1ng."],
    ["truy\u1ec1n th\u1ed1ng", "tradition", "T\u1ebft l\u00e0 m\u1ed9t truy\u1ec1n th\u1ed1ng quan tr\u1ecdng."],
    ["l\u1ec5 h\u1ed9i", "festival", "L\u1ec5 h\u1ed9i n\u00e0y c\u00f3 nhi\u1ec1u ho\u1ea1t \u0111\u1ed9ng th\u00fa v\u1ecb."]
  ],
  education: [
    ["gi\u00e1o d\u1ee5c", "education", "Gi\u00e1o d\u1ee5c m\u1edf ra nhi\u1ec1u c\u01a1 h\u1ed9i m\u1edbi."],
    ["b\u00e0i h\u1ecdc", "lesson", "B\u00e0i h\u1ecdc h\u00f4m nay kh\u00e1 h\u1eefu \u00edch."],
    ["ki\u1ebfn th\u1ee9c", "knowledge", "T\u00f4i mu\u1ed1n m\u1edf r\u1ed9ng ki\u1ebfn th\u1ee9c c\u1ee7a m\u00ecnh."]
  ],
  environment: [
    ["m\u00f4i tr\u01b0\u1eddng", "environment", "Ch\u00fang ta c\u1ea7n b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng."],
    ["thi\u00ean nhi\u00ean", "nature", "T\u00f4i th\u00edch \u0111i b\u1ed9 trong thi\u00ean nhi\u00ean."],
    ["b\u1ec1n v\u1eefng", "sustainable", "L\u1ed1i s\u1ed1ng b\u1ec1n v\u1eefng gi\u00fap gi\u1ea3m r\u00e1c th\u1ea3i."]
  ],
  daily: [
    ["h\u1eb1ng ng\u00e0y", "daily", "T\u00f4i luy\u1ec7n nghe h\u1eb1ng ng\u00e0y."],
    ["gia \u0111\u00ecnh", "family", "Gia \u0111\u00ecnh t\u00f4i th\u01b0\u1eddng \u0103n t\u1ed1i c\u00f9ng nhau."],
    ["th\u1eddi gian", "time", "T\u00f4i c\u1ea7n qu\u1ea3n l\u00fd th\u1eddi gian t\u1ed1t h\u01a1n."]
  ],
  surprise: [
    ["ch\u1ee7 \u0111\u1ec1", "topic", "Ch\u1ee7 \u0111\u1ec1 h\u00f4m nay r\u1ea5t m\u1edbi v\u1edbi t\u00f4i."],
    ["\u00fd t\u01b0\u1edfng", "idea", "T\u00f4i vi\u1ebft ba \u00fd t\u01b0\u1edfng sau khi \u0111\u1ecdc."],
    ["t\u00f3m t\u1eaft", "summary", "T\u00f4i vi\u1ebft m\u1ed9t t\u00f3m t\u1eaft ng\u1eafn b\u1eb1ng ti\u1ebfng Vi\u1ec7t."]
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
  dashboardTitle: document.getElementById("dashboardTitle"),
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
  const mainIdea = `o¡n vn cung c¥p thông tin c¡ b£n vÁ ${title}.`;

  return {
    topicLabel: title,
    words,
    listening: {
      text: reading.text,
      question: "Ý chính là gì?",
      options: [
        mainIdea,
        "o¡n vn chç y¿u là nh­t ký cá nhân vÁ ngày hôm qua.",
        "o¡n vn chç y¿u h°Ûng d«n n¥u n tëng b°Ûc."
      ],
      answer: 0
    },
    speaking: `Hãy gi£i thích ${title} trong mÙt phút. Nói mÙt sñ th­t và mÙt ý ki¿n cça b¡n.`,
    reading: {
      text: reading.text,
      answer: mainIdea
    },
    grammar,
    writing: `Vi¿t 90-130 të b±ng ti¿ng ViÇt vÁ ${title}. Trình bày ý chính, sau ó thêm ý ki¿n cça b¡n.`
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
