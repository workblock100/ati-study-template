// ═══════════════════════════════════════════════════════════════════════════════
// ATI STUDY GUIDE - COMPLETE DATA FILE
// ═══════════════════════════════════════════════════════════════════════════════
// THIS FILE CONTAINS **ALL** CONTENT FOR THE STUDY GUIDE
// Manus generates this ENTIRE file for each new topic
// ═══════════════════════════════════════════════════════════════════════════════

const STUDY_DATA = {

  // ─────────────────────────────────────────────────────────────────────────────
  // METADATA
  // ─────────────────────────────────────────────────────────────────────────────
  meta: {
    topic: "Musculoskeletal",
    course: "NSG-104",
    unit: "Module 2",
    examDate: "TBD",
    icon: "🦴",
    description: "Master musculoskeletal concepts through active recall, spaced repetition, and clinical reasoning.",
    notebookLMUrl: "",
    // Topic-specific images (Manus generates these via AI for each topic)
    images: {
      anatomy1: { url: "img/anatomy1.png", title: "Synovial Joint", description: "Key to arthritis & synovitis" },
      anatomy2: { url: "img/anatomy2.png", title: "Bone Structure", description: "Understanding osteoporosis" },
      pathology1: { url: "img/pathology1.png", title: "Compartment Syndrome", description: "6 P's warning signs" },
      pathology2: { url: "img/pathology2.png", title: "Hip Fractures", description: "3 types with locations" },
      nursing1: { url: "img/nursing1.png", title: "DVT Prevention", description: "Post-op essentials" },
      nursing2: { url: "img/nursing2.png", title: "Traction Types", description: "Skeletal vs Skin" }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CHEAT SHEET CARDS
  // ─────────────────────────────────────────────────────────────────────────────
  cheatSheet: [
    {
      type: "critical",
      icon: "🚨",
      title: "Compartment Syndrome",
      tag: "EMERGENCY",
      content: {
        what: "Pressure buildup in muscle compartment → cuts off blood flow",
        signs: "6 P's (Pain out of proportion, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia)",
        action: "NOTIFY SURGEON NOW → Fasciotomy"
      },
      pearl: "Pain with passive stretch is the earliest sign!"
    },
    {
      type: "important",
      icon: "🔄",
      title: "OA vs RA",
      tag: "HIGH-YIELD",
      content: {
        oa: "Worse with activity, better with rest (wear & tear)",
        ra: "Morning stiffness that IMPROVES with movement (autoimmune)",
        key: "OA: Asymmetric | RA: Symmetric joints"
      },
      pearl: "RA = 'Rest is wrong!' - movement helps"
    },
    {
      type: "important",
      icon: "🦴",
      title: "Hip Replacement Positioning",
      tag: "HIGH-YIELD",
      content: {
        avoid: "Adduction past midline, crossing legs, flexion >90°",
        use: "Abduction pillow between legs",
        why: "Prevent prosthesis dislocation"
      },
      pearl: "Think 'legs APART, not crossed' = safe"
    },
    {
      type: "default",
      icon: "⚖️",
      title: "Traction Rules",
      tag: "TEST TIP",
      content: {
        weights: "Must hang freely at ALL times",
        never: "Remove, rest on floor, or adjust without order",
        check: "Ropes not frayed, pulleys aligned"
      },
      pearl: "If answer says 'remove weights' = WRONG"
    },
    {
      type: "default",
      icon: "🩸",
      title: "Fat Embolism",
      tag: "TIMING",
      content: {
        when: "24-72 hours after LONG BONE fracture",
        triad: "Respiratory distress + Petechial rash + Confusion",
        vitals: "Tachycardia (NOT bradycardia)"
      },
      pearl: "Petechial rash = pathognomonic sign!"
    },
    {
      type: "default",
      icon: "💊",
      title: "Pre-Op Arthroplasty",
      tag: "NUMBERS",
      content: {
        stop: "Stop 7 days before: NSAIDs, aspirin, fish oil",
        prep: "Hibiclens shower x2, NPO after midnight",
        goal: "Reduce bleeding and infection risk"
      },
      pearl: "'7 days' is the magic number for NSAIDs"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // CLINICAL PEARLS & MISTAKES
  // ─────────────────────────────────────────────────────────────────────────────
  clinicalPearls: [
    { type: "success", title: "The First Sign Matters Most", content: "In compartment syndrome, <strong>pain out of proportion</strong> — especially pain with passive stretch — is often the FIRST sign before other P's appear. Don't wait for all 6!" },
    { type: "danger", title: "Confusing Tendons & Ligaments", content: "<strong>Tendons</strong> = Muscle to bone (think 'T' for 'to')<br><strong>Ligaments</strong> = Bone to bone<br>Students often mix these up!" },
    { type: "success", title: "Cast Education Priority", content: "When teaching cast care, the #1 thing to emphasize: <strong>'Report numbness, tingling, or severe pain IMMEDIATELY.'</strong> These signal neurovascular compromise." },
    { type: "danger", title: "RA vs OA Pain Pattern", content: "Students often think rest helps RA because it's inflammatory. <strong>WRONG!</strong> RA improves with movement. This is a favorite NCLEX distractor." },
    { type: "success", title: "Phantom Pain is REAL", content: "Never dismiss phantom limb pain as 'imaginary.' It's caused by real nerve signals and requires actual treatment. Validate the patient's experience." },
    { type: "danger", title: "Elevating Too High", content: "For compartment syndrome, keep limb at <strong>heart level</strong>, NOT elevated. Elevation can reduce arterial flow to an already compromised extremity." }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // MNEMONICS
  // ─────────────────────────────────────────────────────────────────────────────
  mnemonics: [
    { title: "The 6 P's of Neurovascular Assessment", content: "<strong>P</strong>ain • <strong>P</strong>allor • <strong>P</strong>ulselessness • <strong>P</strong>aresthesia • <strong>P</strong>aralysis • <strong>P</strong>oikilothermia" },
    { title: "'SKIN CUPS' for Immobility Complications", content: "<strong>S</strong>kin (pressure ulcers) • <strong>K</strong>idney (stones) • <strong>I</strong>ntestines (constipation) • <strong>N</strong>ervous (depression) • <strong>C</strong>ardio (DVT) • <strong>U</strong>rinary (stasis) • <strong>P</strong>ulmonary (atelectasis) • <strong>S</strong>keletal (contractures)" }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // FLASHCARDS (25-50 recommended)
  // ─────────────────────────────────────────────────────────────────────────────
  flashcards: [
    { q: "What are the 6 P's of neurovascular assessment?", a: "Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia" },
    { q: "What connects muscle to bone?", a: "Tendons (remember: Tendons = To bone)" },
    { q: "What connects bone to bone?", a: "Ligaments" },
    { q: "What is compartment syndrome?", a: "Increased pressure within a muscle compartment that cuts off blood flow - surgical emergency requiring fasciotomy" },
    { q: "What is the DXA scan used for?", a: "Diagnoses osteoporosis by measuring bone density" },
    { q: "What causes osteoarthritis (OA)?", a: "'Wear and tear' - cartilage breakdown from use, injury, and age" },
    { q: "What causes rheumatoid arthritis (RA)?", a: "Autoimmune disease - the body attacks its own joints" },
    { q: "How does OA pain differ from RA pain?", a: "OA: worse with activity, better with rest. RA: morning stiffness that improves with movement" },
    { q: "What are the 3 types of hip fractures?", a: "Femoral head/neck, Intertrochanteric, Subtrochanteric" },
    { q: "What treatment is performed for compartment syndrome?", a: "Fasciotomy - surgical procedure to relieve pressure" },
    { q: "What is poikilothermia?", a: "Coolness/cold temperature of the extremity - one of the 6 P's" },
    { q: "What are signs of fat embolism?", a: "Respiratory distress, petechial rash, confusion (24-72 hrs after long bone fracture)" },
    { q: "How many days before surgery should NSAIDs be stopped?", a: "7 days" },
    { q: "What is skeletal traction?", a: "Traction using pins/wires inserted directly into bone" },
    { q: "What is skin traction?", a: "Traction using tape, straps, or foam applied to skin surface" },
    { q: "What position prevents hip dislocation after replacement?", a: "Legs abducted with pillow between them, no flexion >90°, no crossing legs" },
    { q: "What is phantom limb pain?", a: "Real pain sensation in an amputated limb caused by nerve signals - treatable" },
    { q: "What is the priority nursing action for compartment syndrome?", a: "Notify surgeon IMMEDIATELY, loosen/bivalve cast, keep limb at heart level" },
    { q: "What are complications of immobility on cardiovascular system?", a: "Orthostatic hypotension, DVT, VTE, increased cardiac workload" },
    { q: "What are the 4 types of bones?", a: "Short (carpals), Flat (skull, ribs), Irregular (vertebrae), Long (femur)" },
    { q: "What medication teaching is important for bisphosphonates?", a: "Take on empty stomach with full glass of water, remain upright 30 minutes" },
    { q: "What is arthroplasty?", a: "Surgical repair/replacement of damaged joints with artificial prosthesis" },
    { q: "What soap is used before joint replacement surgery?", a: "Hibiclens (chlorhexidine) - reduces skin bacteria" },
    { q: "What does a T-score of -2.5 or lower indicate?", a: "Osteoporosis" },
    { q: "What is the RICE protocol?", a: "Rest, Ice, Compression, Elevation - for sprains and strains" }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // QUIZ QUESTIONS (NCLEX-style, 15-30 recommended)
  // ─────────────────────────────────────────────────────────────────────────────
  quizQuestions: [
    {
      q: "A nurse is caring for a client with a new cast. Which finding requires immediate intervention?",
      category: "safety",
      options: ["Mild itching under the cast", "Cast feels warm 2 hours after application", "Client cannot move fingers and reports numbness", "Client says cast feels heavy"],
      correctAnswer: "Client cannot move fingers and reports numbness",
      explanation: "Inability to move fingers and numbness indicate neurovascular compromise - this is an emergency."
    },
    {
      q: "A client asks about DEXA scan results showing a T-score of -2.8. This indicates:",
      category: "diagnostics",
      options: ["Normal bone density", "Osteopenia", "Osteoporosis", "Severe osteomalacia"],
      correctAnswer: "Osteoporosis",
      explanation: "A T-score of -2.5 or lower indicates osteoporosis. Osteopenia is -1.0 to -2.5."
    },
    {
      q: "Which finding in a client 48 hours post femur fracture indicates fat embolism?",
      category: "disorders",
      options: ["Bradycardia and hypertension", "Petechial rash on chest and confusion", "Lower extremity edema and warmth", "Fever and localized bone pain"],
      correctAnswer: "Petechial rash on chest and confusion",
      explanation: "Fat embolism triad: respiratory distress, petechial rash (pathognomonic), and confusion. Occurs 24-72 hours post-fracture."
    },
    {
      q: "A nurse is caring for a client in skeletal traction. Which action is appropriate?",
      category: "interventions",
      options: ["Remove weights when repositioning", "Ensure weights hang freely at all times", "Rest weights on floor during bath", "Add extra weights if client has pain"],
      correctAnswer: "Ensure weights hang freely at all times",
      explanation: "Traction weights must hang freely at ALL times. Never remove, rest on floor, or adjust without order."
    },
    {
      q: "A client with rheumatoid arthritis reports severe morning stiffness. The nurse should teach:",
      category: "disorders",
      options: ["Rest in bed until stiffness resolves", "Apply ice packs to affected joints", "Perform gentle range of motion exercises", "Take NSAIDs only when pain is severe"],
      correctAnswer: "Perform gentle range of motion exercises",
      explanation: "In RA, movement IMPROVES symptoms. Morning stiffness gets better with gentle exercise."
    },
    {
      q: "Which position prevents hip dislocation after total hip arthroplasty?",
      category: "interventions",
      options: ["Legs adducted past midline", "Legs abducted with wedge pillow between them", "Hip flexion greater than 90 degrees", "Legs crossed while sitting"],
      correctAnswer: "Legs abducted with wedge pillow between them",
      explanation: "Maintain abduction with wedge pillow. Avoid adduction, crossing legs, and flexion >90°."
    },
    {
      q: "Post-arthroscopy care includes which interventions? (Select all that apply)",
      category: "diagnostics",
      type: "sata",
      options: ["Apply ice packs for first 24 hours", "Keep leg in dependent position", "Perform isometric exercises as prescribed", "Monitor incision for infection signs", "Avoid any movement for 48 hours"],
      correctAnswers: ["Apply ice packs for first 24 hours", "Perform isometric exercises as prescribed", "Monitor incision for infection signs"],
      explanation: "Ice for swelling, isometric exercises for strength, monitor for infection. Elevate (not dependent) and early movement is encouraged."
    },
    {
      q: "A client taking alendronate (Fosamax) should be taught to:",
      category: "pharmacology",
      options: ["Take with food to prevent GI upset", "Take with 8 oz water and remain upright 30 minutes", "Crush the tablet if difficulty swallowing", "Take at bedtime for best absorption"],
      correctAnswer: "Take with 8 oz water and remain upright 30 minutes",
      explanation: "Bisphosphonates cause esophageal irritation. Full glass of water and upright position prevent erosion."
    },
    {
      q: "Which assessment findings indicate complications of immobility? (Select all that apply)",
      category: "disorders",
      type: "sata",
      options: ["Diminished breath sounds in lung bases", "Redness over sacrum that blanches", "Calf swelling and warmth in one leg", "Blood pressure drop when sitting up", "Regular bowel movements every other day"],
      correctAnswers: ["Diminished breath sounds in lung bases", "Calf swelling and warmth in one leg", "Blood pressure drop when sitting up"],
      explanation: "Atelectasis, DVT (unilateral), and orthostatic hypotension are immobility complications. Blanching redness is normal."
    },
    {
      q: "A client reports burning pain in a 'missing' foot after below-knee amputation. The nurse understands this is:",
      category: "disorders",
      options: ["Incisional pain requiring opioids", "Phantom limb pain that can be treated", "Sign of infection requiring antibiotics", "Psychological disturbance needing psychiatry"],
      correctAnswer: "Phantom limb pain that can be treated",
      explanation: "Phantom pain is REAL, caused by nerve signals, and treatable with gabapentin, TENS, mirror therapy."
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // GAME QUESTIONS (for the runner game - 20-40 recommended)
  // ─────────────────────────────────────────────────────────────────────────────
  gameQuestions: [
    { q: "What are the 6 P's of neurovascular assessment?", options: ["Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia", "Pulse, Pressure, Pain, Pallor, Paralysis, Paresthesia", "Pain, Pulse, Perfusion, Paralysis, Paresthesia, Pressure"], correctAnswer: "Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia" },
    { q: "Compartment syndrome requires what emergency treatment?", options: ["Fasciotomy", "Cast application", "Elevation above heart", "Ice and rest"], correctAnswer: "Fasciotomy" },
    { q: "Tendons connect what to what?", options: ["Muscle to bone", "Bone to bone", "Muscle to muscle", "Cartilage to bone"], correctAnswer: "Muscle to bone" },
    { q: "Fat embolism typically occurs how long after long bone fracture?", options: ["24-72 hours", "Immediately", "1-2 weeks", "1-6 hours"], correctAnswer: "24-72 hours" },
    { q: "Hip replacement patients should avoid flexion greater than:", options: ["90 degrees", "45 degrees", "120 degrees", "60 degrees"], correctAnswer: "90 degrees" },
    { q: "T-score of -2.5 or lower indicates:", options: ["Osteoporosis", "Osteopenia", "Normal bone density", "Osteomalacia"], correctAnswer: "Osteoporosis" },
    { q: "NSAIDs should be stopped how many days before surgery?", options: ["7 days", "3 days", "14 days", "1 day"], correctAnswer: "7 days" },
    { q: "RA morning stiffness improves with:", options: ["Movement and exercise", "Rest and immobility", "Ice application", "Heat only"], correctAnswer: "Movement and exercise" },
    { q: "Traction weights should:", options: ["Hang freely at all times", "Rest on floor at night", "Be removed for bathing", "Be adjusted for comfort"], correctAnswer: "Hang freely at all times" },
    { q: "Petechial rash after fracture suggests:", options: ["Fat embolism", "Allergic reaction", "Infection", "DVT"], correctAnswer: "Fat embolism" },
    { q: "Bisphosphonates require patient to remain upright for:", options: ["30 minutes", "10 minutes", "2 hours", "5 minutes"], correctAnswer: "30 minutes" },
    { q: "First sign of compartment syndrome is usually:", options: ["Pain out of proportion", "Pulselessness", "Paralysis", "Pallor"], correctAnswer: "Pain out of proportion" },
    { q: "Ligaments connect:", options: ["Bone to bone", "Muscle to bone", "Cartilage to bone", "Tendon to muscle"], correctAnswer: "Bone to bone" },
    { q: "Phantom limb pain is:", options: ["Real and treatable", "Psychological only", "Untreatable", "Sign of infection"], correctAnswer: "Real and treatable" },
    { q: "OA pain pattern:", options: ["Worse with activity, better with rest", "Worse in morning, better with movement", "Constant regardless of activity", "Only at night"], correctAnswer: "Worse with activity, better with rest" },
    { q: "RICE protocol stands for:", options: ["Rest, Ice, Compression, Elevation", "Rest, Immobilize, Cold, Exercise", "Reduce, Ice, Cast, Evaluate", "Rest, Ibuprofen, Cast, Elevate"], correctAnswer: "Rest, Ice, Compression, Elevation" },
    { q: "Post hip replacement, use what between legs?", options: ["Abduction pillow", "Ice pack", "Heating pad", "Nothing"], correctAnswer: "Abduction pillow" },
    { q: "Skeletal traction uses:", options: ["Pins in bone", "Tape on skin", "Foam wraps", "Elastic bandages"], correctAnswer: "Pins in bone" },
    { q: "Hibiclens is used before surgery to:", options: ["Reduce skin bacteria", "Reduce anxiety", "Numb the area", "Improve circulation"], correctAnswer: "Reduce skin bacteria" },
    { q: "For suspected compartment syndrome, limb should be at:", options: ["Heart level", "Elevated high", "Dependent position", "Any position"], correctAnswer: "Heart level" }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // DISORDERS
  // ─────────────────────────────────────────────────────────────────────────────
  disorders: [
    {
      name: "Osteoarthritis (OA)",
      patho: "Degenerative 'wear and tear' - cartilage breakdown leading to bone-on-bone friction",
      riskFactors: ["Age", "Obesity", "Joint injury", "Repetitive stress"],
      signs: ["Joint pain worse with activity", "Stiffness <30 min morning", "Crepitus", "Heberden's/Bouchard's nodes"],
      treatment: ["NSAIDs", "Acetaminophen", "Weight loss", "PT", "Joint replacement"],
      nursing: ["Pain management", "Encourage mobility", "Weight management", "Joint protection"]
    },
    {
      name: "Rheumatoid Arthritis (RA)",
      patho: "Autoimmune - body attacks synovial membrane causing inflammation and joint destruction",
      riskFactors: ["Female", "Family history", "Smoking", "Age 40-60"],
      signs: ["Symmetric joints", "Morning stiffness >30 min", "Fatigue", "Swan neck deformity"],
      treatment: ["DMARDs", "Biologics", "NSAIDs", "Corticosteroids"],
      nursing: ["Encourage movement", "Manage fatigue", "Monitor drug side effects"]
    },
    {
      name: "Compartment Syndrome",
      patho: "Increased pressure within fascial compartment compromises circulation and nerve function",
      riskFactors: ["Fractures", "Crush injuries", "Tight casts", "Burns"],
      signs: ["Pain out of proportion", "Pain with passive stretch", "Paresthesia", "Pallor", "Pulselessness", "Paralysis"],
      treatment: ["Fasciotomy (emergency)", "Bivalve cast", "Keep at heart level"],
      nursing: ["Frequent neurovascular checks", "NEVER elevate above heart", "Notify surgeon IMMEDIATELY"]
    },
    {
      name: "Osteoporosis",
      patho: "Decreased bone density - osteoclast activity exceeds osteoblast activity",
      riskFactors: ["Postmenopausal", "Low calcium/Vitamin D", "Sedentary", "Smoking", "Corticosteroids"],
      signs: ["Often asymptomatic until fracture", "Kyphosis", "Height loss", "Fragility fractures"],
      treatment: ["Bisphosphonates", "Calcium/Vitamin D", "Weight-bearing exercise"],
      nursing: ["Fall prevention", "Medication teaching", "Diet education"]
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // PHARMACOLOGY
  // ─────────────────────────────────────────────────────────────────────────────
  pharmacology: [
    {
      drugClass: "Bisphosphonates",
      prototype: "Alendronate (Fosamax)",
      mechanism: "Inhibits osteoclast activity, slows bone resorption",
      indications: ["Osteoporosis", "Paget's disease"],
      nursingImplications: ["Empty stomach with full glass water", "Remain upright 30 min", "Take 30 min before food"],
      adverseEffects: ["Esophageal irritation", "Jaw osteonecrosis", "GI upset"],
      patientTeaching: "Do NOT lie down after taking - prevents esophageal erosion"
    },
    {
      drugClass: "DMARDs",
      prototype: "Methotrexate",
      mechanism: "Immunosuppressant - reduces autoimmune inflammation",
      indications: ["Rheumatoid arthritis", "Psoriatic arthritis"],
      nursingImplications: ["Monitor CBC, liver function", "Assess for infection", "Folic acid supplementation"],
      adverseEffects: ["Bone marrow suppression", "Hepatotoxicity", "Pulmonary toxicity"],
      patientTeaching: "Avoid alcohol, report signs of infection or bleeding"
    },
    {
      drugClass: "NSAIDs",
      prototype: "Ibuprofen (Motrin)",
      mechanism: "Inhibits COX enzymes, reduces prostaglandins → decreased inflammation/pain",
      indications: ["OA", "RA", "Acute pain"],
      nursingImplications: ["Take with food", "Monitor for GI bleeding", "Check renal function"],
      adverseEffects: ["GI bleeding", "Renal impairment", "Increased bleeding risk"],
      patientTeaching: "Stop 7 days before surgery, take with food"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // ATI PRIORITY LOGIC
  // ─────────────────────────────────────────────────────────────────────────────
  atiLogic: [
    {
      scenario: "Client with new cast reports increasing pain unrelieved by medication",
      action: "Assess neurovascular status immediately, prepare for cast removal",
      rationale: "Pain out of proportion is earliest sign of compartment syndrome - life/limb threatening"
    },
    {
      scenario: "Post-op hip replacement client found with legs crossed",
      action: "Immediately uncross legs and place abduction pillow",
      rationale: "Crossing legs causes adduction which can dislocate the hip prosthesis"
    },
    {
      scenario: "Client in traction - weights touching the floor",
      action: "Reposition client to allow weights to hang freely",
      rationale: "Traction requires continuous free-hanging weights - never remove or rest weights"
    },
    {
      scenario: "Client 48 hours post femur fracture develops confusion and chest petechiae",
      action: "Notify provider immediately, prepare for respiratory support",
      rationale: "Fat embolism triad - medical emergency"
    }
  ]
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = STUDY_DATA;
}
