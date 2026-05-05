const LEADS = [
  {
    leadId: '#0047',
    name: 'Rajesh Sharma',
    language: 'Hindi',
    duration: '4m 32s',
    objections: ['already_with_broker'],
    score: 78,
    classification: 'HOT',
    action: 'RM Queue →',
  },
  {
    leadId: '#0048',
    name: 'Meena Patel',
    language: 'Gujarati',
    duration: '3m 11s',
    objections: ['trust', 'think_about_it'],
    score: 52,
    classification: 'WARM',
    action: 'WhatsApp →',
  },
  {
    leadId: '#0049',
    name: 'Arjun Nair',
    language: 'English',
    duration: '1m 47s',
    objections: ['no_contacts'],
    score: 21,
    classification: 'COLD',
    action: 'Nurture +14d',
  },
  {
    leadId: '#0050',
    name: 'Priya Rajan',
    language: 'Hinglish',
    duration: '5m 08s',
    objections: [],
    score: 91,
    classification: 'HOT',
    action: 'RM Queue →',
  },
  {
    leadId: '#0051',
    name: 'Santhosh Kumar',
    language: 'Tamil',
    duration: '2m 55s',
    objections: ['support_issues'],
    score: 44,
    classification: 'WARM',
    action: 'WhatsApp →',
  },
  {
    leadId: '#0052',
    name: 'Farida Sheikh',
    language: 'Marathi',
    duration: '0m 52s',
    objections: ['call_me_later'],
    score: 18,
    classification: 'COLD',
    action: 'Nurture +14d',
  },
];

const APPENDIX_A = {
  title: 'Appendix A Telecalling Script & FAQ',
  opening: {
    hindi: 'Namaste, Rupeezy se bol raha hoon. Kya main aapke 30 seconds le sakta hoon?',
    english: 'Hi, this is Rupeezy. Can I take 30 seconds to explain why I am calling?',
  },
  keyBenefits: [
    '100% brokerage share for eligible partners',
    'Fast payout and a simple partner onboarding flow',
    'RM support for qualified hot leads',
    'Language-friendly follow-up across Hindi, Gujarati, Tamil, Marathi, Hinglish, and English',
  ],
  sampleScripts: {
    opening: {
      Hindi: 'Namaste, main Rupeezy se bol raha hoon. Kya main 30 second le sakta hoon? Hum partners ko 100% brokerage share aur fast payout dete hain — kya main ek chhota sa sawal pooch sakta hoon?',
      English: 'Hi, this is Rupeezy. I will be short — can I take 30 seconds? We offer partners 100% brokerage share and fast payouts. Can I ask one quick question?',
    },
    closing: {
      Hindi: 'Shukriya. Main aapka jawab note kar raha hoon. Agar aap ready hain to main aapko RM se connect kar dunga ya ek WhatsApp summary bhej dunga.',
      English: 'Thanks. I have noted that. If you are ready, I will connect you to an RM or send a WhatsApp summary.',
    },
  },
  eligibility: [
    'Has active market interest or referral potential',
    'Can share a valid contact number and basic profile details',
    'Fits the partner onboarding flow and compliance checks',
  ],
  gettingStarted: [
    'Confirm interest and preferred language',
    'Capture the core objection or need',
    'Route hot leads to RM, warm leads to WhatsApp, and cold leads to nurture',
  ],
  objections: [
    {
      key: 'already_with_broker',
      label: 'Already with another broker',
      handle: 'Acknowledge their current setup, then ask a comparison question about payout, support, or speed.',
    },
    {
      key: 'call_me_later',
      label: 'Call me later / busy',
      handle: 'Keep it short, confirm the best callback window, and ask one precise qualifying question.',
    },
    {
      key: 'trust',
      label: 'Trust / safety concerns',
      handle: 'Ground the conversation in published terms, compliance, and a clear handoff process.',
      sample: {
        Hindi: 'Main samajh sakta hoon. Humare terms aur payout schedule publicly available hain; main aapko ek short summary bhej sakta hoon aur tab RM aapko full breakdown de dega.',
        English: 'I understand. Our terms and payout schedule are published; I can send a short summary and an RM will provide the full breakdown.',
      },
    },
    {
      key: 'pricing_questions',
      label: 'Pricing / exact numbers',
      handle: 'If the lead asks for exact product numbers, refuse to speculate and promise an RAG-grounded answer from Appendix A.',
      sample: {
        Hindi: 'Achha sawal. Main exact figure verify karunga aur aapko SMS/WhatsApp par bhej dunga. Kya aap WhatsApp number confirm kar sakte hain?',
        English: 'Good question. I will verify the exact figures and send them via SMS/WhatsApp. May I confirm your WhatsApp number?',
      },
    },
    {
      key: 'not_interested',
      label: 'Not interested',
      handle: 'Respect the answer, ask whether they prefer to receive details later, and log the outcome cleanly.',
    },
    {
      key: 'send_details',
      label: 'Send details first',
      handle: 'Offer the shortest possible summary, then ask for the single next step that would make them move forward.',
    },
  ],
  faq: [
    {
      q: 'What is the first line the agent should use?',
      a: 'Introduce the call quickly, state the purpose, and ask for a short window of attention.',
    },
    {
      q: 'How to handle pricing questions without hallucination?',
      a: 'Do not guess. Promise to send verified figures from Appendix A and route to RM for confirmation.',
    },
    {
      q: 'When should the agent hand off to an RM?',
      a: 'Hand off immediately when intent is strong, an objection is cleared, or the lead asks for the next step.',
    },
    {
      q: 'What should happen for warm leads?',
      a: 'Send a personalized WhatsApp follow-up based on the actual conversation.',
    },
    {
      q: 'What should happen for cold leads?',
      a: 'Save the context and move the lead into a re-engagement nurture queue.',
    },
    {
      q: 'What if a lead asks for documentation?',
      a: 'Send a one-line summary and a link to the official partner terms; escalate if they request contractual specifics.',
    },
  ],
};

const OBJECTION_HANDLERS = {
  already_with_broker: {
    detect: /already.*broker|working with another broker|have.*broker|existing broker/,
    response: {
      Hindi: 'Theek hai. Aap market samajhte hain, isliye main seedha poochta hoon: kya aapka current broker daily payout aur clear support deta hai?',
      English: 'That makes sense. Since you already know the market, let me ask directly: does your current broker give fast payout and clear support?',
      Gujarati: 'Theek chhe. Tamaru broker fast payout ane sahay aape chhe? Hu ek chhoto prashna puchu?',
      Tamil: 'Sari. Ungaloda broker kasakkama payoutum supportum kodukkaa? Oru kelvi kekkaren?',
      Marathi: 'Barobar. Tumcha broker fast payout ani support deto ka? Ek chhota prashna vicharayla have.',
      Hinglish: 'Makes sense yaar. Does your current broker give fast payouts and good support?',
    },
  },
  call_me_later: {
    detect: /call me later|later|not now|busy|tomorrow|callback|call back/,
    response: {
      Hindi: 'Bilkul. Main short rakhta hoon. Bas ek baat: kya aap better payout ke liye switch consider karenge?',
      English: 'Absolutely. I will keep it short. One quick thing: if the payout is clearly better, would you consider switching?',
      Gujarati: 'Saru. Hu short rakhis. Ek vishay: jo payout vadhare hoy to tame switch consider karso?',
      Tamil: 'Sari, naan sirappaga pesuven. Oru vishayam: payout nalla irundhaal, switch panna ninaikkireengala?',
      Marathi: 'Thik ahe. Mi laghu bolen. Ek chhota prashna: jar payout chaan asel tar tumhi switch vichar karal ka?',
      Hinglish: 'Bilkul, I will be quick. If payout is better, would you consider switching?',
    },
  },
  trust: {
    detect: /trust|credible|safe|risk|scam|legit|fraud/,
    response: {
      Hindi: 'Fair point. Main published terms aur compliance ke basis par hi baat kar raha hoon, aur exact breakdown handoff se pehle share kar sakta hoon.',
      English: 'Fair point. I am grounding this in published terms and compliance, and I can share the exact breakdown before any handoff.',
      Gujarati: 'Sachu. Aapna doubts mahatvapurna chhe. Ame terms ne publicly share kariye chhiye; hu short breakdown mokli dau.',
      Tamil: 'Nalla kelvi. Naan public-a irukkura terms-ai refer seiven; oru short breakdown anuppuven.',
      Marathi: 'Chalel prashna. Aamhi published terms var adharit aahot; mi ek short breakdown pathavnaar.',
      Hinglish: 'Totally valid. We follow published terms — I can send a short verified breakdown before any handoff.',
    },
  },
  pricing_questions: {
    detect: /exact|percentage|percent|payout percentage|payout percent|what are the exact|what is the payout|payout numbers|payout figures/,
    response: {
      Hindi: 'Achha sawal. Main exact figure verify karunga aur aapko SMS/WhatsApp par bhej dunga. Kya aap WhatsApp number confirm kar sakte hain?',
      English: 'Good question. I will verify the exact figures and send them via SMS/WhatsApp. May I confirm your WhatsApp number?',
      Gujarati: 'Saru prashna. Hu exact figure check kari ne WhatsApp par mokli dau. Tamaru WhatsApp number confirm karo?',
      Tamil: 'Nalla kelvi. Naan exact figures verify panni WhatsApp-il anuppuven. Ungal WhatsApp number confirm pannalaam?',
      Marathi: 'Chaan prashna. Mi exact figures verify karun WhatsApp var pathavto. Tumcha WhatsApp number confirm karal ka?',
      Hinglish: 'Good question — I will verify exact figures and send on WhatsApp. Can you confirm your WhatsApp number?',
    },
  },
  not_interested: {
    detect: /not interested|no thanks|no need|stop|dont call|do not call|nahin chahiye/,
    response: {
      Hindi: 'Samajh gaya. Main aapko disturb nahi karunga. Agar baad mein interest ho, to main ek short follow-up note kar deta hoon.',
      English: 'Understood. I will not push further. If you are interested later, I will keep a short follow-up note on file.',
    },
  },
  send_details: {
    detect: /send details|send me|message me|whatsapp me|mail me|text me|details first/,
    response: {
      Hindi: 'Zaroor. Main shortest summary bhejta hoon. Uske baad bas itna bata dijiye: kya aap next step par aana chahenge?',
      English: 'Sure. I will send the shortest summary. After that, just tell me whether you would like the next step.',
    },
  },
};

function detectLanguage(text) {
  const lower = text.toLowerCase();
    if (/\b(kem cho|mane|su|jova|aapjo|thay)\b/.test(lower)) {
      return { language: 'Gujarati', confidence: 0.9, voice: 'gu-IN' };
    }
    if (/\b(vanakkam|naan|illa|bro|pannala|sir)\b/.test(lower)) {
      return { language: 'Tamil', confidence: 0.88, voice: 'ta-IN' };
    }
    if (/\b(namaskar|mala|kay|distay|sangto)\b/.test(lower)) {
      return { language: 'Marathi', confidence: 0.87, voice: 'mr-IN' };
    }
    if (/\b(namaste|haan|kya|bhai|payout|maaloom|mein|main)\b/.test(lower) || /[\u0900-\u097f]/.test(text)) {
      return { language: 'Hindi', confidence: 0.94, voice: 'hi-IN' };
  }
  if (/\b(hi|hello|broker|payout|switch|later|interested|clients)\b/.test(lower) && /\b(hai|haii|haan|bhai|kya|main|just|already)\b/.test(lower)) {
    return { language: 'Hinglish', confidence: 0.81, voice: 'en-IN' };
  }
  return { language: 'English', confidence: 0.78, voice: 'en-IN' };
}

function detectObjections(text) {
  const lower = text.toLowerCase();
  const objections = [];
  if (OBJECTION_HANDLERS.already_with_broker.detect.test(lower)) objections.push('already_with_broker');
  if (OBJECTION_HANDLERS.call_me_later.detect.test(lower)) objections.push('call_me_later');
  if (OBJECTION_HANDLERS.trust.detect.test(lower)) objections.push('trust');
  if (OBJECTION_HANDLERS.not_interested.detect.test(lower)) objections.push('not_interested');
  if (OBJECTION_HANDLERS.send_details.detect.test(lower)) objections.push('send_details');
  if (/no contacts|few clients|not many clients|small network|no network/.test(lower)) objections.push('no_contacts');
  if (/support|help desk|issue|problem/.test(lower)) objections.push('support_issues');
  if (/think about it|maybe|let me see|consider/.test(lower)) objections.push('think_about_it');
  return objections;
}

function scoreLead(text, objections) {
  const lower = text.toLowerCase();
  let score = 22;

  if (/switch|better payout|higher payout|daily payout|brokerage share|sign me up|interested/.test(lower)) score += 28;
  if (/client|clients|network|referral|lead|business|earn|income/.test(lower)) score += 16;
  if (/already.*broker|working with another broker/.test(lower)) score += 12;
  if (text.length > 60) score += 10;
  if (text.length > 120) score += 5;

  if (objections.includes('call_me_later')) score -= 22;
  if (objections.includes('trust')) score -= 10;
  if (objections.includes('not_interested')) score -= 28;
  if (objections.includes('send_details')) score -= 4;
  if (objections.includes('no_contacts')) score -= 14;
  if (objections.includes('think_about_it')) score -= 8;

  return Math.max(0, Math.min(100, score));
}

function classify(score) {
  if (score >= 70) return 'HOT';
  if (score >= 40) return 'WARM';
  return 'COLD';
}

function nextActionFor(classification) {
  if (classification === 'HOT') {
    return {
      nextAction: 'RM Queue →',
      nextActionDetail: 'Immediate handoff to a relationship manager with full context.',
    };
  }
  if (classification === 'WARM') {
    return {
      nextAction: 'WhatsApp →',
      nextActionDetail: 'Send a personalised follow-up and keep the lead moving.',
    };
  }
  return {
    nextAction: 'Nurture +14d',
    nextActionDetail: 'Log the call summary and re-engage after a cooling-off period.',
  };
}

function buildReply(text, language, objections, classification) {
  const lower = text.toLowerCase();
  for (const objection of objections) {
    const handler = OBJECTION_HANDLERS[objection];
    if (handler?.response?.[language]) {
      return handler.response[language];
    }
  }

  if (objections.includes('already_with_broker')) {
    return language === 'Hindi'
      ? 'Hmm... samajh gaya. Aap already market ko jaante ho. Ek quick sawal: aapka current broker daily payout deta hai?'
      : 'Hmm... makes sense. Since you already understand the market, can I ask one quick thing about payout speed?';
  }
  if (objections.includes('call_me_later')) {
    return language === 'Hindi'
      ? 'Bilkul, main short rakhta hoon. Bas ek minute: agar aapko better payout mile, kya aap switch consider karenge?'
      : 'Absolutely, I will keep this short. If the payout is clearly better, would you consider switching?';
  }
  if (objections.includes('trust')) {
    return 'Fair point. Let me keep this specific: the offer is grounded in the published partner terms, and I can show the exact breakdown before any handoff.';
  }
  if (/better payout|daily payout|switch|interested/.test(lower)) {
    return language === 'Hindi'
      ? 'Perfect... that is exactly the signal we look for. I will connect you with the next step right away.'
      : 'Perfect... that is exactly the signal we look for. I will move you to the next step right away.';
  }
  if (classification === 'COLD') {
    return language === 'Hindi'
      ? 'Koi baat nahi... main details save kar deta hoon. Baad mein ek better time par reconnect karte hain.'
      : 'No problem... I will save the details and reconnect at a better time later.';
  }
  return language === 'Hindi'
    ? 'Samajh gaya. Main aapki preference note kar raha hoon aur next best step suggest karta hoon.'
    : 'Understood. I am noting your preference and will suggest the best next step.';
}

function analyzeLeadText(leadText) {
  const text = leadText.trim();
  const languageInfo = detectLanguage(text);
  const objections = detectObjections(text);
  const score = scoreLead(text, objections);
  const classification = classify(score);
  const handoff = nextActionFor(classification);
  const reply = buildReply(text, languageInfo.language, objections, classification);

  return {
    backendStatus: 'online',
    knowledgeBase: APPENDIX_A.title,
    leadText: text,
    detectedLanguage: languageInfo.language,
    languageConfidence: languageInfo.confidence,
    score,
    scoreReason: score >= 70 ? 'Strong intent and enough context to hand off.' : score >= 40 ? 'Some intent, but needs a stronger follow-up.' : 'Low intent or too much friction for immediate handoff.',
    classification,
    classificationReason: classification === 'HOT' ? 'Ready for a relationship manager now.' : classification === 'WARM' ? 'Keep warm with a precise follow-up.' : 'Send to nurture and re-engage later.',
    nextAction: handoff.nextAction,
    nextActionDetail: handoff.nextActionDetail,
    objections,
    assistantReply: reply,
    transcript: [
      `Lead: ${text}`,
      `Agent: ${reply}`,
      `System: ${classification} lead, routed to ${handoff.nextAction}`,
    ],
    appendixA: APPENDIX_A,
  };
}

module.exports = {
  LEADS,
  APPENDIX_A,
  analyzeLeadText,
};
