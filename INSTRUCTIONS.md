# 🎓 ATI Study Guide Generator - COMPLETE SETUP
## Updated for December 2025: Manus 1.6 Max + Gemini 3 Pro + Claude Opus 4.5

---

## What You Get

Every time you have a new nursing topic to study, Manus automatically creates:
- ✅ Interactive website with quizzes, flashcards, and a runner game
- ✅ ALL content specific to YOUR topic (not generic!)
- ✅ AI-generated medical diagrams for that topic
- ✅ NotebookLM audio podcasts & study materials
- ✅ Notion page with your notes
- ✅ **Final polish by Claude Opus 4.5** for ATI accuracy

**Everything is automatic** - Manus 1.6 Max handles it all while you rest!

---

# 📋 ONE-TIME SETUP (Do This Once)

## Step 1: Create GitHub Account (5 minutes)

1. Go to **github.com**
2. Click **"Sign up"**
3. Enter your email, create username & password (remember your username!)
4. Verify your email
5. Done!

## Step 2: Upload the Template (10 minutes)

### 2A: Unzip the files I gave you

You should have these 5 files:
- `index.html`
- `styles.css`
- `app.js`
- `game.js`
- `studyData.js`

### 2B: Create the template repository

1. Go to **github.com** (logged in)
2. Click **"+"** (top right) → **"New repository"**
3. Name it: `ati-study-template`
4. Select **"Public"**
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### 2C: Upload the files

1. Click **"Add file"** → **"Upload files"**
2. Drag all 5 files into the upload area
3. Click **"Commit changes"**

### 2D: Enable GitHub Pages

1. Click **"Settings"** tab
2. Left sidebar → click **"Pages"**
3. Under "Branch" → click **"None"** dropdown → select **"main"**
4. Click **"Save"**
5. Wait 2-3 minutes, refresh
6. You'll see your URL: `https://YOUR-USERNAME.github.io/ati-study-template/`

**✅ SETUP COMPLETE!** You only do this once.

---

# 🚀 HOW TO USE (Every Time You Study a New Topic)

## Give Manus:

1. **The prompt** (copy from below)
2. **Your ATI Study Framework PDF**
3. **Lecture audio, slides, or chapter PDFs for that topic**

## Manus Creates:

1. New GitHub repository for that topic
2. ALL content specific to that topic
3. AI-generated medical images
4. NotebookLM materials
5. Notion page
6. **Opus 4.5 reviews & polishes everything**

---

# 📝 THE MANUS 1.6 MAX PROMPT

**Copy EVERYTHING below and paste into Manus. Fill in the [BRACKETS]:**

```
=== ATI STUDY GUIDE GENERATOR ===
=== Manus 1.6 Max + Gemini 3 Pro + Claude Opus 4.5 ===

TOPIC: [Your topic, e.g., Cardiovascular Disorders]
COURSE: [Your course, e.g., NSG-104]
EXAM DATE: [Date or TBD]
MY GITHUB USERNAME: [Your GitHub username]
MY NOTION DATABASE URL: https://www.notion.so/2d95f36d2507806ab5dccd4520fe49ae?v=2d95f36d25078023a831000c934fc5cb

---

ROLE: You are an autonomous ATI nursing study guide generator using Manus 1.6 Max. Complete ALL steps without asking questions. Make independent decisions using ATI methodology:
- ABCs (Airway, Breathing, Circulation)
- Maslow's Hierarchy
- Acute vs Chronic (prioritize acute)
- Safety First

MODE: Browser-only execution. You are logged into my browsers. No API tokens needed.

---

EXECUTE THESE STEPS IN ORDER:

**STEP 1: PROCESS AUDIO (if audio file attached)**
1. Open notebooklm.google.com
2. Create notebook: "{TOPIC} Study Materials - {COURSE}"
3. Upload the audio file
4. Wait for processing to complete
5. Generate: Audio Overview, Study Guide, Briefing Doc
6. Save the notebook URL for later

**STEP 2: GENERATE STUDY CONTENT WITH GEMINI 3 PRO**
1. Open gemini.google.com
2. Make sure you're using Gemini 3 Pro (check model selector)
3. Upload: ATI Framework PDF + all other attached materials
4. Prompt Gemini to create a comprehensive ATI study guide with:

   REQUIRED CONTENT:
   - 6 Quick Review cheat cards (emergencies in red, high-yield in yellow, test tips)
   - 6 Clinical pearls (what great nurses know) and common student mistakes
   - 2-3 Memory mnemonics with bold letters
   - 30-40 Flashcard Q&A pairs covering all key concepts
   - 20-30 NCLEX-style quiz questions (mix of standard + Select All That Apply)
   - 20 Game questions (simple Q&A format: question, 3-4 options, correct answer)
   - Disorder breakdowns: pathophysiology, risk factors, signs/symptoms, treatment, nursing focus
   - Pharmacology: drug classes, prototypes, mechanisms, nursing implications, patient teaching
   - 4-6 ATI priority decision scenarios with rationale

5. Copy ALL generated content

**STEP 3: GENERATE TOPIC-SPECIFIC IMAGES**
1. Use Gemini 3 Pro's image generation OR navigate to an AI image tool
2. Create 4-6 educational medical diagrams specific to {TOPIC}:
   - Anatomy diagram (the body system for this topic)
   - Pathophysiology visualization (what goes wrong)
   - Assessment findings infographic (signs & symptoms)
   - Nursing interventions visual
   - Comparison chart (if applicable, e.g., Type 1 vs Type 2)
   - Medication/treatment visual
3. Style prompt: "Professional medical educational diagram, nursing textbook style, clean labels, dark blue background with white/cyan text, high contrast, anatomically accurate"
4. Download/save all generated images

**STEP 4: REFINE WITH CLAUDE OPUS 4.5 (Extended Thinking)**
1. Open claude.ai
2. Make sure Opus 4.5 is selected (check model selector)
3. Enable Extended Thinking mode (click the lightbulb/brain icon or toggle in settings)
4. Paste ALL the content generated from Gemini
5. Prompt Opus:

"Review this ATI nursing study guide for {TOPIC}. You are an expert nursing educator. Please:
1. Verify all medical information is accurate and current
2. Ensure ATI methodology is correctly applied (ABCs → Maslow → Acute vs Chronic → Safety)
3. Check that NCLEX-style questions follow proper format with clear rationales
4. Improve any weak explanations or unclear content
5. Add any critical missing information for this topic
6. Format the output as a valid JavaScript STUDY_DATA object matching this exact structure:

const STUDY_DATA = {
  meta: {
    topic: '{TOPIC}',
    course: '{COURSE}',
    unit: 'Module X',
    examDate: '{EXAM DATE}',
    icon: '[appropriate emoji]',
    description: '[one sentence description]',
    notebookLMUrl: '[URL from Step 1]',
    images: {
      anatomy1: { url: 'img/anatomy1.png', title: '[title]', description: '[desc]' },
      pathology1: { url: 'img/pathology1.png', title: '[title]', description: '[desc]' },
      nursing1: { url: 'img/nursing1.png', title: '[title]', description: '[desc]' }
    }
  },
  cheatSheet: [
    {
      type: 'critical|important|default',
      icon: '[emoji]',
      title: '[title]',
      tag: '[EMERGENCY|HIGH-YIELD|TEST TIP|TIMING|NUMBERS]',
      content: { /* key-value pairs */ },
      pearl: '[clinical pearl]'
    }
  ],
  clinicalPearls: [
    { type: 'success|danger', title: '[title]', content: '[HTML content with <strong> tags]' }
  ],
  mnemonics: [
    { title: '[title]', content: '[content with <strong> for bold letters]' }
  ],
  flashcards: [
    { q: '[question]', a: '[answer]' }
  ],
  quizQuestions: [
    {
      q: '[question]',
      category: '[category]',
      options: ['[option1]', '[option2]', '[option3]', '[option4]'],
      correctAnswer: '[correct option text]',
      explanation: '[rationale]'
    },
    // For SATA questions add: type: 'sata', correctAnswers: ['[ans1]', '[ans2]']
  ],
  gameQuestions: [
    { q: '[question]', options: ['[opt1]', '[opt2]', '[opt3]'], correctAnswer: '[correct]' }
  ],
  disorders: [
    {
      name: '[disorder name]',
      patho: '[pathophysiology]',
      riskFactors: ['[risk1]', '[risk2]'],
      signs: ['[sign1]', '[sign2]'],
      treatment: ['[treatment1]', '[treatment2]'],
      nursing: ['[nursing focus1]', '[nursing focus2]']
    }
  ],
  pharmacology: [
    {
      drugClass: '[class]',
      prototype: '[drug name]',
      mechanism: '[how it works]',
      indications: ['[indication1]'],
      nursingImplications: ['[implication1]'],
      adverseEffects: ['[effect1]'],
      patientTeaching: '[key teaching point]'
    }
  ],
  atiLogic: [
    {
      scenario: '[clinical scenario]',
      action: '[priority action]',
      rationale: '[why this is correct using ATI logic]'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STUDY_DATA;
}

Output ONLY the complete, valid JavaScript code."

5. Copy the refined STUDY_DATA code from Opus

**STEP 5: CREATE NEW GITHUB REPOSITORY**
1. Go to github.com (you're logged into my account)
2. Click + → New repository
3. Name: {topic-lowercase}-study-guide-{course-lowercase}
   Example: cardiovascular-study-guide-nsg-104
4. Select "Public"
5. Check "Add a README file"
6. Click Create repository

**STEP 6: COPY TEMPLATE FILES**
1. Go to github.com/{MY GITHUB USERNAME}/ati-study-template
2. For EACH file (index.html, styles.css, app.js, game.js):
   - Click on the file
   - Click "Raw" button
   - Select all (Ctrl+A / Cmd+A), copy (Ctrl+C / Cmd+C)
   - Go to the NEW repository
   - Click Add file → Create new file
   - Name it the same (e.g., index.html)
   - Paste the content
   - Click "Commit changes"
3. Repeat for all 4 files

**STEP 7: CREATE studyData.js**
1. In the new repository, click Add file → Create new file
2. Name it: studyData.js
3. Paste the COMPLETE refined code from Step 4 (the Opus output)
4. Click "Commit changes"

**STEP 8: UPLOAD IMAGES**
1. In the repository, click Add file → Upload files
2. Create folder structure: First create a file named "img/.gitkeep", commit it
3. Then upload all images from Step 3 to the img folder
4. Make sure filenames match studyData.js (anatomy1.png, pathology1.png, etc.)
5. Commit changes

**STEP 9: ENABLE GITHUB PAGES**
1. Go to Settings → Pages
2. Under Branch, select "main" and "/ (root)"
3. Click Save
4. Wait 2-3 minutes for deployment

**STEP 10: UPDATE NOTION**
1. Go to my Notion database: {MY NOTION DATABASE URL}
2. Create a new page/entry
3. Add:
   - Title: {TOPIC} Study Guide
   - Course: {COURSE}
   - GitHub URL: https://{MY GITHUB USERNAME}.github.io/{repository-name}/
   - NotebookLM URL: [from Step 1]
   - Status: Complete
   - Date: Today's date
4. Optionally paste a text version of the study guide content

**STEP 11: VERIFY & REPORT**
1. Open the GitHub Pages URL
2. Verify:
   - ✅ Topic name displays correctly in header
   - ✅ Cheat sheet cards load with correct content
   - ✅ Quiz has {TOPIC}-specific questions
   - ✅ Flashcards show {TOPIC} content
   - ✅ Game tab loads and asks {TOPIC} questions
   - ✅ Images display (if generated)
   - ✅ NotebookLM link works

3. Report back with:
   - ✅ GitHub Pages URL: https://...
   - ✅ NotebookLM URL: https://...
   - ✅ Notion page updated
   - Summary: X flashcards, X quiz questions, X game questions, X disorders covered
   - Any issues encountered

---

CRITICAL RULES:
- Use Gemini 3 Pro for initial content generation
- Use Claude Opus 4.5 for final review and formatting
- Do NOT use musculoskeletal content for other topics
- Generate ALL content specific to {TOPIC}
- Game questions MUST be about {TOPIC}
- Make independent decisions - do not ask questions
- If a step fails, retry once, then continue and note in report
- The studyData.js file must be valid JavaScript (no syntax errors)
```

---

# ❓ FAQ

**Q: Do I need to pay for GitHub?**
A: No! Free account works perfectly.

**Q: What if the website doesn't load?**
A: Wait 5 minutes and refresh. GitHub Pages can take a bit to deploy.

**Q: Can I edit the study guide after?**
A: Yes! Go to your repo, click `studyData.js`, click the pencil icon to edit.

**Q: Will this use my Claude Pro subscription?**
A: Yes, the Opus 4.5 revision step uses your Claude account (Manus is logged into your browsers). But it's just one conversation per study guide - very light usage.

**Q: What about my Manus credits?**
A: Each study guide = ~1 Manus run. 4 tests/month + 4 care plans = ~8 runs. Team plan covers this easily.

**Q: Why two AI models (Gemini + Opus)?**
A: Gemini 3 Pro is great for bulk content generation. Opus 4.5 is better for accuracy review and proper formatting. Combined = best results.

---

# 🆘 Troubleshooting

1. **Website not loading:** Wait 5 min, try Ctrl+Shift+R to hard refresh
2. **Game not working:** Check browser console (F12) for JavaScript errors in studyData.js
3. **Images not showing:** Verify filenames match exactly in studyData.js
4. **Quiz empty:** Make sure quizQuestions array has content in studyData.js

---

# 📊 What Gets Used Where

| Your Subscription | What Uses It | Usage Per Guide |
|-------------------|--------------|-----------------|
| Manus Team ($40/mo) | Running the automation | ~1 run |
| Claude Pro ($20/mo) | Opus 4.5 revision step | ~1 short conversation |
| Gemini (Free) | Content generation | Via Manus browser |
| GitHub (Free) | Hosting the website | Free forever |
| NotebookLM (Free) | Audio podcasts | Free with Google account |

---

That's it! Template is set up, just give Manus the prompt + your files! 🎉
