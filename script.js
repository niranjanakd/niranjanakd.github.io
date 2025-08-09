// Create animated background particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = window.innerWidth > 768 ? 20 : 10;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Enhanced animation wrapper
function executeWithAnimation(functionName, buttonElement) {
  // Add loading animation
  buttonElement.classList.add('loading');
  buttonElement.style.color = 'transparent';
  
  // Get the output element
  const outputId = buttonElement.parentElement.querySelector('.output').id;
  const outputElement = document.getElementById(outputId);
  
  setTimeout(() => {
    // Execute the function
    window[functionName]();
    
    // Remove loading, add success animation
    buttonElement.classList.remove('loading');
    buttonElement.style.color = '';
    buttonElement.parentElement.classList.add('success-animation');
    
    // Style the output
    outputElement.classList.add('active');
    
    setTimeout(() => {
      buttonElement.parentElement.classList.remove('success-animation');
    }, 600);
  }, 800);
}

// Enhanced functions with more variety and humor
function escapeRoute() {
  const options = [
    "🚨 EMERGENCY: Your goldfish just texted you about an existential crisis involving bubble philosophy!",
    "🌱 Your houseplant is demanding immediate therapy - it caught you talking to other plants.",
    "🦙 Time to feed your imaginary alpaca, Mr. Whiskers is staging a hunger strike.",
    "🥷 You're due for a secret ninja mission... in your pajamas, at home, with snacks.",
    "📱 Your cat uploaded a TikTok and needs your management expertise to go viral.",
    "🌿 URGENT: Your houseplants are unionizing and demand better WiFi passwords immediately!",
    "📺 Breaking: Netflix released a documentary about competitive sock folding - you MUST see this!",
    "🍕 Your refrigerator is having trust issues and needs emotional support. It's a delicate situation.",
    "🐕 Someone reported a suspicious squirrel in your backyard. Immediate investigation required.",
    "📚 Emergency book reorganization - your novels are fighting with your textbooks again."
  ];
  document.getElementById("escape-output").innerText = random(options);
}

function energyMeter() {
  const energyLevels = [
    "🔋 Social Battery: CRITICALLY LOW (Used: 3 minutes, Recharge needed: 72 hours)",
    "⚡ Energy Status: MISSING IN ACTION (Last seen: Pre-pandemic era)",
    "🪫 Battery Warning: 0.0001% remaining (Emergency introvert mode activated)",
    "🔌 Social Power: SYSTEM OFFLINE (Please insert solitude and tea to continue)",
    "⚠ WARNING: Social capacity exceeded by 847%. Immediate isolation required.",
    "🔋 Battery Level: ERROR 404 - Social energy not found",
    "⚡ Power Status: Running on introvert fumes and caffeine prayers",
    "🪫 Warning: Social battery has entered hibernation mode. Do not disturb until spring.",
    "🔌 Energy Meter: Showing negative numbers. Physics is confused.",
    "⚠ ALERT: Social functions disabled to preserve remaining sanity."
  ];
  document.getElementById("energy-output").innerText = random(energyLevels);
}

function awkwardFact() {
  const facts = [
    "🐧 Penguins propose with pebbles... making them infinitely better at dating than most humans.",
    "🏂 Some penguins can't fly but toboggan at 15mph... still faster than escaping small talk.",
    "🦵 Penguins have hidden knees inside their bodies. Weird flex, but okay nature.",
    "👀 A group of penguins is called a 'waddle'... and they're probably judging your walk right now.",
    "💨 Emperor penguins hold their breath for 22 minutes... longer than most phone conversations.",
    "😴 Penguins sleep standing in groups... the ultimate introvert nightmare scenario achieved.",
    "🐧 Penguins recognize each other by voice... unlike humans who pretend not to see you at the store.",
    "❄️ Some penguins travel 6,000 miles annually... still less than your mom guilt-trips you to visit.",
    "🐧 Penguins huddle for warmth... basically prehistoric social distancing violations.",
    "🏊 Penguins can swim 22mph... perfect for escaping awkward beach conversations."
  ];
  document.getElementById("awkward-output").innerText = random(facts);
}

function excuseGen() {
  const excuses = [
    "📚 I have to explain TikTok to my houseplants - they're very behind on millennial humor.",
    "🛏 My bed has separation anxiety and I'm the designated emotional support human.",
    "📺 Netflix released a documentary on competitive paint-drying - it's surprisingly gripping.",
    "😺 I pinky-promised my cat I'd stay in, and breaking cat promises causes bad karma.",
    "📊 My social interaction quota for this millennium has been exceeded - system overload.",
    "📖 I need to reorganize my bookshelf by emotional attachment levels... it's complicated.",
    "🧽 My dishes are staging an intervention about my lifestyle choices.",
    "🌱 I'm teaching my succulents advanced mathematics - they're struggling with algebra.",
    "📱 I have a very important appointment with my couch and a bag of chips.",
    "🧦 Emergency sock drawer reorganization - the argyles are rebelling against the stripes."
  ];
  document.getElementById("excuse-output").innerText = random(excuses);
}

function textRegret() {
  const regrets = [
    "🔥 Cringe Level: MAXIMUM OVERDRIVE — Future 3AM regret confirmed with 99.9% accuracy.",
    "😱 Regret Prediction: INEVITABLE — This screenshot will haunt your dreams forever.",
    "⏰ Analysis Complete: You'll delete this in 4.7 seconds... but the damage is eternal.",
    "🪦 Embarrassment Forecast: SEVERE — Recommend immediate phone burial ceremony with flowers.",
    "📈 Cringe Meter: BROKEN — Your text exceeded maximum awkwardness levels.",
    "💀 Future You says: 'Why did past me think this was a good idea?'",
    "🎭 Drama Level: Shakespeare would be impressed by this tragedy.",
    "🔮 Prediction: You'll analyze every word at 2:47 AM for the next three years."
  ];
  document.getElementById("regret-output").innerText = random(regrets);
}

function soundWeird() {
  const analyses = [
    "✅ CONFIRMED: That thing you said was indeed weird. But hey, authenticity is trendy!",
    "🎯 Weirdness Level: MAXIMUM — But normal people are overrated anyway, right? RIGHT?",
    "📈 Analysis: 10/10 would be awkward again. It's your personal brand now, own it!",
    "🤐 Verdict: Weird confirmed, but everyone was too polite to mention it... until now.",
    "🔍 Deep Analysis: Yes, very weird. But also surprisingly memorable!",
    "📊 Weirdness Scale: Off the charts. Congratulations, you've achieved legendary status.",
    "🎪 Assessment: So weird it's almost artistic. Frame it, put it in a museum.",
    "🏆 Achievement Unlocked: 'Most Creative Way to Kill a Conversation'"
  ];
  document.getElementById("weird-output").innerText = random(analyses);
}

function avoidPeople() {
  const routes = [
    "🗺 Route calculated: Optimal path planned. You'll still bump into the same person 5 times though.",
    "🧭 Navigation updated: Take 3 lefts, 2 rights, hide behind cereal, pray to grocery gods.",
    "📱 Anti-social GPS: Recalculating... recalculating... giving up. Just order online, friend.",
    "🚨 Human Detection: DANGEROUSLY HIGH — Tactical shopping cart deployment recommended.",
    "🛒 Stealth Mode: Activated. Avoid eye contact, move swiftly, trust no one.",
    "📍 Alternative Route: Through the pet food aisle - humans avoid it for some reason.",
    "🥷 Ninja Path: Use self-checkout, avoid all humans, escape through garden center.",
    "⚠️ WARNING: High concentration of chatty people near the free samples. Abort mission!"
  ];
  document.getElementById("avoid-output").innerText = random(routes);
}

function simulateCall() {
  const simulations = [
    "🤖 AI Response: 'Hello? Ugh, why do you sound nervous?' *immediately hangs up*",
    "📞 Call Simulation: 'Hi this is—' 'BEEP BEEP BEEP' — Even robots have standards.",
    "🔊 Phone AI: 'Your voice betrays social anxiety. Are you okay?' *existential crisis activated*",
    "🎵 Call Bot: 'Please hold while I judge your conversation skills...' *plays eternal muzak*",
    "🤖 Robo-caller: 'I'm a robot and even I find this awkward.'",
    "📱 AI Assistant: 'Call failed successfully. Would you like me to send a text instead?'",
    "🔌 System Message: 'Phone.exe has stopped working due to excessive awkwardness.'",
    "🎭 Bot Response: 'Your social skills need debugging. Please restart humanity.'"
  ];
  document.getElementById("call-output").innerText = random(simulations);
}

function chatOptimize() {
  const optimizations = [
    "⏰ Optimal reply time: 3 months after everyone forgot the original topic. Perfect!",
    "🎯 Timing optimization complete: Send when it's ironically funny in 2.7 years.",
    "📅 Algorithm suggests: Reply 'lol' to last Tuesday's serious philosophical debate.",
    "💡 Best strategy: React with confused emoji to everything. Universal translator.",
    "🕐 Perfect timing: Never. The conversation moved on 47 topics ago.",
    "📈 Analysis: Peak engagement achieved when everyone has left the chat.",
    "⌚ Recommendation: Reply to 'Good morning' at 11:47 PM for maximum confusion.",
    "🎪 Optimal strategy: Send random GIFs. Confusion is better than silence."
  ];
  document.getElementById("chat-output").innerText = random(optimizations);
}

function guiltCalc() {
  const calculations = [
    "📊 Calculation: Attending = 0.0002% beneficial. Calculator crashed from guilt overload.",
    "⚖ Guilt Level: MATHEMATICALLY IMPOSSIBLE — System cannot compute this paradox.",
    "❌ Analysis Error: Should go vs. Want to stay = Universe.exe has stopped working.",
    "🔢 Probability: 127% guilt if absent, 200% regret if present. Congratulations, you broke math!",
    "📈 Guilt Meter: ERROR - Numbers too high for standard measurement.",
    "🧮 Calculation Failed: The guilt-to-enjoyment ratio divided by zero.",
    "⚖️ Final Verdict: Staying home wins by a margin of 'infinite comfort.'",
    "📊 Analysis Complete: Maximum guilt achieved regardless of choice. Mission accomplished!"
  ];
  document.getElementById("guilt-output").innerText = random(calculations);
}

function weatherCheck() {
  const forecasts = [
    "🌟 Today's forecast: 100% perfect for indoor activities. Blanket fort weather confirmed.",
    "☁ Weather Update: Optimal hermit conditions detected. Cozy vibes at maximum levels.",
    "🌧 Introvert Forecast: Mysteriously rainy during all social events. Nature gets it.",
    "🏠 Atmospheric conditions: Ideal for Netflix, tea, and avoiding human interaction entirely.",
    "☀️ Sunshine Paradox: Too bright for outdoor socializing. Sunglasses recommended for grocery runs.",
    "❄️ Winter Advisory: Perfect excuse weather activated. Hot chocolate mandatory.",
    "🌈 Rainbow Forecast: Beautiful day to appreciate nature... from your window.",
    "⛈️ Storm Warning: 100% chance of 'I can't leave the house' conditions."
  ];
  document.getElementById("weather-output").innerText = random(forecasts);
}

// Utility function
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Meme functionality
const memeData = {
  escape: {
    title: "Every Introvert's Emergency Plan",
    text: "That moment when someone asks 'So, tell me about yourself' and your brain.exe stops working",
    emoji: "🏃‍♂️💨"
  },
  energy: {
    title: "Social Battery Status",
    text: "Me after 5 minutes of human interaction: 'I need to recharge for the next 3 business days'",
    emoji: "🔋😴"
  },
  awkward: {
    title: "Conversation Killer Activated",
    text: "Nothing breaks awkward silence quite like sharing a random fact about penguin mating rituals",
    emoji: "🐧❄️"
  },
  excuse: {
    title: "Professional Event Avoider",
    text: "I've reached expert level in creative excuse generation. My houseplants have very complex emotional needs.",
    emoji: "🚪🏃"
  },
  regret: {
    title: "3 AM Overthinking Championship",
    text: "Me analyzing that text I sent 6 hours ago like it's the Rosetta Stone of social disasters",
    emoji: "📱😰"
  },
  weird: {
    title: "Social Interaction Analysis",
    text: "Brain: 'That was a perfectly normal thing to say'\nAlso Brain: 'But what if it wasn't?'",
    emoji: "🧠❓"
  },
  avoid: {
    title: "Grocery Store Ninja Mode",
    text: "Seeing someone you know at the store and immediately turning into a human-shaped shopping cart",
    emoji: "🛒🥷"
  },
  call: {
    title: "Phone Call Preparation Ritual",
    text: "Me before making a phone call: Writing a script, practicing 47 times, still saying 'You too' when they say 'Have a nice day'",
    emoji: "☎️😱"
  },
  chat: {
    title: "Group Chat Timing Master",
    text: "Me joining the conversation just as everyone decides to stop talking. Perfect timing, as always.",
    emoji: "💬⏰"
  },
  guilt: {
    title: "Party Mathematics",
    text: "The complex equation of 'I should go' vs 'But my couch is so comfortable' vs 'What if they think I'm antisocial?'",
    emoji: "🎉😔"
  },
  weather: {
    title: "Introvert Weather App",
    text: "Today's forecast: 100% chance of 'perfect weather to stay inside and avoid responsibilities'",
    emoji: "🌧️🏠"
  }
};

function showMeme(type) {
  const modal = document.getElementById('memeModal');
  const content = document.getElementById('memeContent');
  const meme = memeData[type];
  
  if (meme) {
    content.innerHTML = `
      <div class="meme-title">${meme.title}</div>
      <div style="font-size: 4rem; margin: 1rem 0;">${meme.emoji}</div>
      <div class="meme-text">${meme.text}</div>
      <div style="margin-top: 2rem; padding: 1rem; background: #f0f0f0; border-radius: 10px; font-style: italic;">
        "Why are we like this?" - Every introvert ever
      </div>
    `;
    
    modal.classList.add('active');
  }
}

function closeMeme() {
  document.getElementById('memeModal').classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('memeModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeMeme();
  }
});

// AI Assistant functionality
let aiResponses = {
  anxiety: [
    "🌱 Remember, anxiety is just excitement without breath. Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8. Your voice deserves to be heard!",
    "💪 Start small - even asking one question in a meeting is progress. Your unique perspective adds value that no one else can bring.",
    "🎯 Prepare 2-3 talking points beforehand. When you're prepared, confidence follows naturally. You've got this!",
    "✨ Reframe your thoughts: Instead of 'What if I sound stupid?' try 'What if my idea helps someone?' Your contribution matters!",
    "🧘 Ground yourself with the 5-4-3-2-1 technique: 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste. Present moment = power."
  ],
  
  conversation: [
    "🗣 Start with genuine compliments: 'I love your [item]' or 'That's an interesting point about [topic]'. People love talking about things they care about!",
    "🔍 Use the FORD method: Family, Occupation, Recreation, Dreams. Ask about these topics to keep conversations flowing naturally.",
    "👂 Be genuinely curious! Ask follow-up questions like 'How did that make you feel?' or 'What was that like?' People appreciate good listeners.",
    "🌟 Share something vulnerable about yourself - it creates connection. 'I used to be terrified of this too' opens hearts and minds.",
    "💡 Use the 'echo and expand' technique: Repeat their last point and add a question. 'So you mentioned traveling - what's been your favorite destination?'"
  ],
  
  motivation: [
    "🚀 Every extrovert was once terrified of speaking up. The difference? They did it scared. Courage isn't the absence of fear - it's action despite fear.",
    "🌈 Your introversion is a superpower, not a weakness. You observe, you think deeply, you create meaningful connections. The world needs your quiet wisdom!",
    "🎉 Celebrate tiny wins! Spoke up once today? That's HUGE! Sent that text? Amazing! Growth happens in small, consistent steps.",
    "💎 You have unique insights that extroverts often miss. Your thoughtful perspective can change minds and hearts. Don't rob the world of your gifts!",
    "🌱 Every oak tree was once an acorn that held its ground. Your quiet strength is building something amazing, even when you can't see it yet."
  ],
  
  smalltalk: [
    "☀ Weather and current events are safe starters: 'Beautiful day, isn't it?' or 'Did you see that [recent news]?' Then listen and build from their response.",
    "🏢 Context is king! At work: 'How's your project going?' At events: 'How do you know [host]?' At coffee shops: 'Is that drink good? I'm looking for something new.'",
    "🎵 Find common ground quickly - music, movies, food, travel. Once you find a shared interest, conversations become natural and engaging!",
    "😊 Remember: Most people are just as nervous about small talk as you are. They'll be grateful you started the conversation!",
    "🎯 Ask about their expertise: 'You seem to know a lot about [topic] - how did you get into that?' People love sharing their passions."
  ],
  
  general: [
    "🌟 Your voice matters more than you think. Someone out there needs to hear exactly what you have to say. Don't keep your light hidden!",
    "🔥 Comfort zones are cozy, but nothing grows there. Every time you speak up, you're watering the seeds of your future confident self.",
    "💝 Be patient with yourself. Social skills are like muscles - they need consistent, gentle exercise to grow stronger. You're already on the right path!",
    "🦋 What feels like a big scary leap to you might inspire someone else to take their own leap. Your courage creates ripple effects you'll never see.",
    "🎭 You don't have to be 'on' all the time. Authentic moments of quiet observation are just as valuable as animated conversation."
  ]
};

function toggleAI() {
  const aiChat = document.getElementById('aiChat');
  const aiToggle = document.getElementById('aiToggle');
  
  aiChat.classList.toggle('active');
  aiToggle.classList.toggle('active');
  
  if (aiChat.classList.contains('active')) {
    document.getElementById('aiInput').focus();
  }
}

function sendQuickMessage(message) {
  addMessage(message, 'user');
  setTimeout(() => {
    respondToMessage(message);
  }, 1000);
}

function sendMessage() {
  const input = document.getElementById('aiInput');
  const message = input.value.trim();
  
  if (message) {
    addMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
      respondToMessage(message);
    }, 1000);
  }
}

function addMessage(message, type) {
  const messagesContainer = document.getElementById('aiMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `ai-message ${type}`;
  messageDiv.textContent = message;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  if (type === 'user') {
    showTypingIndicator();
  }
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('aiMessages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = `
    <span>IntroBot is typing</span>
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function respondToMessage(message) {
  removeTypingIndicator();
  
  let responseCategory = 'general';
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('anxious') || lowerMessage.includes('nervous') || lowerMessage.includes('scared') || lowerMessage.includes('meeting')) {
    responseCategory = 'anxiety';
  } else if (lowerMessage.includes('conversation') || lowerMessage.includes('talk') || lowerMessage.includes('start')) {
    responseCategory = 'conversation';
  } else if (lowerMessage.includes('motivation') || lowerMessage.includes('help') || lowerMessage.includes('encourage')) {
    responseCategory = 'motivation';
  } else if (lowerMessage.includes('small talk') || lowerMessage.includes('casual')) {
    responseCategory = 'smalltalk';
  }
  
  const responses = aiResponses[responseCategory];
  const response = responses[Math.floor(Math.random() * responses.length)];
  
  addMessage(response, 'bot');
  
  // Add a follow-up question for engagement
  setTimeout(() => {
    const followUps = [
      "What's one small step you could take today? 🌱",
      "How are you feeling about trying this? 💭",
      "Would you like me to help you practice? 🎯",
      "What part feels most challenging for you? 🤔",
      "Have you tried anything like this before? 🔄",
      "What would success look like for you? ⭐"
    ];
    const followUp = followUps[Math.floor(Math.random() * followUps.length)];
    addMessage(followUp, 'bot');
  }, 2000);
}

// Enhanced particle system with performance optimization
function createAdvancedParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = window.innerWidth > 768 ? 25 : 12;
  
  // Clear existing particles
  particlesContainer.innerHTML = '';

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    const opacity = Math.random() * 0.3 + 0.1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.opacity = opacity;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
    
    // Add different particle types
    if (Math.random() > 0.7) {
      particle.style.borderRadius = '0';
      particle.style.transform = 'rotate(45deg)';
    }
    
    particlesContainer.appendChild(particle);
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Escape key to close meme modal
  if (e.key === 'Escape') {
    closeMeme();
  }
  
  // Alt + A to toggle AI assistant
  if (e.altKey && e.key === 'a') {
    e.preventDefault();
    toggleAI();
  }
});

// Enhanced scroll effects
function handleScroll() {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  
  if (document.getElementById('particles')) {
    document.getElementById('particles').style.transform = `translateY(${rate}px)`;
  }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, options);

  document.querySelectorAll('.tool').forEach(tool => {
    observer.observe(tool);
  });
}

// Performance optimization for mobile
function optimizeForDevice() {
  const isMobile = window.innerWidth <= 768;
  const isLowEnd = navigator.hardwareConcurrency <= 2;
  
  if (isMobile || isLowEnd) {
    // Reduce particles
    createParticles();
    
    // Disable some animations on low-end devices
    if (isLowEnd) {
      document.body.classList.add('low-performance');
    }
  } else {
    createAdvancedParticles();
  }
}

// Fun Easter eggs
let clickCount = 0;
function addEasterEggs() {
  // Secret click counter on header
  document.querySelector('h1').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
      document.querySelector('h1').style.animation = 'glow 0.5s ease-in-out, bounce 0.5s ease-in-out';
      setTimeout(() => {
        addMessage("🎉 You found the secret! You're officially an honorary member of the Introvert Elite Society!", 'bot');
        if (!document.getElementById('aiChat').classList.contains('active')) {
          toggleAI();
        }
      }, 500);
    }
  });

  // Konami code easter egg
  let konamiCode = [];
  const targetCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  
  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > targetCode.length) {
      konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(targetCode)) {
      document.body.style.filter = 'hue-rotate(180deg)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 3000);
      
      addMessage("🎮 Konami Code activated! You've unlocked... absolutely nothing special, but you're awesome for trying!", 'bot');
      if (!document.getElementById('aiChat').classList.contains('active')) {
        toggleAI();
      }
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  optimizeForDevice();
  setupIntersectionObserver();
  addEasterEggs();
  
  // Add scroll listener with throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
  

  window.addEventListener('resize', () => {
    setTimeout(optimizeForDevice, 250);
  });
  
  // Add some motivational messages to AI on first load
  setTimeout(() => {
    if (Math.random() > 0.7) { // 30% chance
      const motivationalMessages = [
        "💡 Tip: Did you know that many successful leaders are introverts? You're in great company!",
        "🌟 Remember: Your quiet observations often lead to the most insightful contributions!",
        "🎯 Fun fact: Studies show introverts are excellent listeners - a superpower in today's world!",
        "💪 You've got this! Even opening this toolkit shows you're ready to grow!"
      ];
      
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setTimeout(() => {
        addMessage(randomMessage, 'bot');
      }, 3000);
    }
  }, 5000);
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Add some fun hover effects for tools
document.querySelectorAll('.tool').forEach(tool => {
  tool.addEventListener('mouseenter', function() {
    // Add random sparkle effect
    if (Math.random() > 0.7) {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.style.position = 'absolute';
      sparkle.style.top = Math.random() * 50 + '%';
      sparkle.style.left = Math.random() * 50 + '%';
      sparkle.style.fontSize = '1.5rem';
      sparkle.style.animation = 'sparkle 1s ease-out forwards';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '10';
      
      this.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.remove();
        }
      }, 1000);
    }
  });
});

// Add some CSS for the sparkle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes sparkle {
    0% { 
      opacity: 0; 
      transform: scale(0) rotate(0deg); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1.2) rotate(180deg); 
    }
    100% { 
      opacity: 0; 
      transform: scale(0) rotate(360deg); 
    }
  }
  
  .low-performance * {
    animation-duration: 0.1s !important;
  }
  
  .low-performance .particle {
    display: none;
  }
`;
document.head.appendChild(style);