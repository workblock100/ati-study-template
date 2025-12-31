# 🎓 ATI Study Guide - SUPER SIMPLE SETUP

## What You Get

Every time you have a new nursing topic to study, you'll get:
- ✅ Interactive website with quizzes, flashcards, and a game
- ✅ All questions/content specific to YOUR topic
- ✅ AI-generated images for that topic
- ✅ NotebookLM audio podcasts
- ✅ Notion page with notes

**Everything is automatic** - Manus does all the work!

---

# 📋 STEP 1: Create GitHub Account (5 minutes, one time only)

1. Go to **github.com**
2. Click the big **"Sign up"** button
3. Enter your email, pick a password, pick a username (remember this!)
4. Click through the verification steps
5. Done! You now have a GitHub account.

---

# 📤 STEP 2: Upload the Template (10 minutes, one time only)

### 2A: Download the ZIP file I gave you and unzip it

You should have these files:
- `index.html`
- `styles.css`
- `app.js`
- `game.js`
- `studyData.js`

### 2B: Create your first repository

1. Go to **github.com** (make sure you're logged in)
2. Click the **"+"** button in the top right corner
3. Click **"New repository"**
4. For "Repository name" type: `ati-study-template`
5. Make sure **"Public"** is selected (the circle is filled)
6. ✅ Check the box that says **"Add a README file"**
7. Click the green **"Create repository"** button

### 2C: Upload the files

1. On your new repository page, click **"Add file"** (dropdown button)
2. Click **"Upload files"**
3. Drag ALL 5 files from the unzipped folder into the upload area
4. Scroll down and click **"Commit changes"**
5. Wait for it to finish uploading

### 2D: Turn it into a website

1. Click **"Settings"** (tab at the top of your repository)
2. On the left sidebar, scroll down and click **"Pages"**
3. Under "Source", click the dropdown that says "None"
4. Select **"main"**
5. Click **"Save"**
6. Wait 2-3 minutes
7. Refresh the page
8. You'll see a green box with a link like: `https://YOUR-USERNAME.github.io/ati-study-template/`
9. Click that link - you should see the Musculoskeletal study guide!

**✅ SETUP COMPLETE!** You only do this once. Now Manus can create new guides automatically.

---

# 🚀 STEP 3: How to Use (Every Time You Study a New Topic)

## Give Manus These Things:

1. **The prompt** (copy from below)
2. **Your ATI Study Framework PDF**
3. **Any lecture audio, slides, or chapter PDFs for that topic**

## What Manus Does Automatically:

1. Creates a NEW repository for that topic (like `cardiovascular-study-guide`)
2. Generates ALL the content specific to that topic
3. Creates AI images for that topic (hearts, EKGs, etc. - NOT bone images!)
4. The game asks questions about YOUR topic
5. The flashcards are about YOUR topic
6. Everything is customized!

---

# 📝 THE MANUS PROMPT

**Copy everything below and paste into Manus. Fill in the [BRACKETS]:**

```
=== ATI STUDY GUIDE GENERATOR ===

TOPIC: [Your topic, e.g., Cardiovascular Disorders]
COURSE: [Your course, e.g., NSG-104]
EXAM DATE: [Date or TBD]
MY GITHUB USERNAME: [Your GitHub username you created]

---

You are an autonomous ATI nursing study guide generator. Complete ALL steps without asking me questions. Make decisions using ATI methodology (ABCs → Maslow → Acute vs Chronic → Safety).

Browser-only mode. No API tokens needed.

---

COMPLETE THESE STEPS IN ORDER:

**STEP 1: PROCESS AUDIO (if I attached an audio file)**
1. Open notebooklm.google.com
2. Create notebook named "{TOPIC} Study Materials"
3. Upload the audio file
4. Wait for it to process and generate outputs
5. Copy the notebook URL for later

**STEP 2: GENERATE ALL STUDY CONTENT**
1. Open gemini.google.com (use Gemini 2.0 Flash or Pro)
2. Upload my ATI Framework PDF and any other files I attached
3. Tell Gemini to create a complete ATI study guide with:
   - 6 Quick Review cheat cards (emergencies, high-yield facts, test tips)
   - 6 Clinical pearls and common student mistakes
   - 2-3 Memory mnemonics
   - 25-40 Flashcard Q&A pairs
   - 15-25 NCLEX-style quiz questions (include some Select All That Apply)
   - 20 Game questions (simple Q&A format for the runner game)
   - Disorder breakdowns (patho, signs, treatment, nursing care)
   - Pharmacology (drug classes, nursing implications, patient teaching)
   - ATI priority decision scenarios
4. Save all this content

**STEP 3: GENERATE TOPIC-SPECIFIC IMAGES**
1. Use Gemini's image generation OR go to an AI image tool
2. Create 4-6 educational medical diagrams for {TOPIC}:
   - Main anatomy diagram (heart, lungs, brain, etc. - whatever fits the topic)
   - Pathophysiology visual (what goes wrong)
   - Assessment/signs infographic
   - Key interventions or nursing actions visual
3. Style: "medical educational diagram, professional nursing textbook style, clean labels, dark blue background"
4. Download/save the images

**STEP 4: CREATE NEW GITHUB REPOSITORY**
1. Go to github.com and sign in as {MY GITHUB USERNAME}
2. Click + → New repository
3. Name it: {topic-in-lowercase}-study-guide-{course-in-lowercase}
   Example: cardiovascular-study-guide-nsg-104
4. Select "Public"
5. Check "Add a README file"
6. Click Create repository

**STEP 5: COPY TEMPLATE FILES**
1. Go to github.com/{MY GITHUB USERNAME}/ati-study-template
2. Open each file (index.html, styles.css, app.js, game.js) and copy the contents
3. Go to the NEW repository you just created
4. Create each file with the same content (Add file → Create new file)

**STEP 6: CREATE THE DATA FILE**
1. In the new repository, click Add file → Create new file
2. Name it: studyData.js
3. Create a STUDY_DATA object with ALL the content from Step 2:

const STUDY_DATA = {
  meta: {
    topic: "{TOPIC}",
    course: "{COURSE}",
    unit: "Module X",
    examDate: "{EXAM DATE}",
    icon: "[emoji for this topic]",
    description: "[one sentence description]",
    notebookLMUrl: "[URL from Step 1]",
    images: {
      anatomy1: { url: "img/anatomy1.png", title: "[title]", description: "[desc]" },
      // ... more images
    }
  },
  cheatSheet: [ /* 6 cards */ ],
  clinicalPearls: [ /* 6 items */ ],
  mnemonics: [ /* 2-3 items */ ],
  flashcards: [ /* 25-40 Q&A pairs */ ],
  quizQuestions: [ /* 15-25 NCLEX questions */ ],
  gameQuestions: [ /* 20 simple Q&A for game */ ],
  disorders: [ /* condition breakdowns */ ],
  pharmacology: [ /* drug info */ ],
  atiLogic: [ /* priority scenarios */ ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STUDY_DATA;
}

4. Commit the file

**STEP 7: UPLOAD IMAGES**
1. In the repository, create a folder called "img"
2. Upload all the AI-generated images from Step 3
3. Make sure the filenames match what you put in studyData.js

**STEP 8: ENABLE GITHUB PAGES**
1. Go to Settings → Pages
2. Under Source, select "main" branch
3. Click Save
4. Wait 2-3 minutes for deployment

**STEP 9: VERIFY EVERYTHING WORKS**
1. Go to https://{MY GITHUB USERNAME}.github.io/{repository-name}/
2. Check that:
   - The topic name shows correctly
   - Cheat sheet cards load
   - Quiz has topic-specific questions
   - Flashcards work
   - Game asks questions about THIS topic (not musculoskeletal!)
   - Images display (if generated)

**STEP 10: REPORT BACK**
Give me:
- ✅ GitHub Pages URL: https://...
- ✅ NotebookLM URL: https://...
- Summary of what was created

---

IMPORTANT RULES:
- Do NOT use musculoskeletal content for other topics
- Generate ALL content specific to {TOPIC}
- Game questions MUST be about {TOPIC}
- Make your own decisions - don't ask me questions
- If something fails, retry once, then move on and note it in the report
```

---

# ❓ FAQ

**Q: Do I need to pay for GitHub?**
A: No! The free account works perfectly.

**Q: What if the website doesn't load?**
A: Wait 5 minutes and try again. GitHub Pages takes a bit to deploy.

**Q: Can I edit the study guide after Manus creates it?**
A: Yes! Go to your repository, click on `studyData.js`, click the pencil icon to edit.

**Q: What if Manus makes a mistake?**
A: You can tell Manus to fix it, or edit `studyData.js` yourself.

**Q: Why do I need a template repository?**
A: It has all the code that makes the website work (styling, quiz logic, game, etc.). Manus copies this for each new topic so it doesn't have to recreate it every time.

---

# 🆘 If You Get Stuck

1. Make sure you're logged into GitHub
2. Make sure the repository is set to "Public"
3. Make sure GitHub Pages is enabled (Settings → Pages → Source: main)
4. Wait 5 minutes after any changes before checking the website
5. Try refreshing the page with Ctrl+Shift+R (or Cmd+Shift+R on Mac)

---

That's it! Once setup is done, just give Manus the prompt + your files and it handles everything! 🎉
