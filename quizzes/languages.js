quizLanguages = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "Languages",
        "level1":  "Excellent!",          // 80-100%
        "level2":  "Please re-try.",      // 60-79%
        "level3":  "Please re-try.",      // 40-59%
        "level4":  "Maybe ask for help?", // 20-39%
        "level5":  "Please ask for help." //  0-19%, no comma here
    },
    "questions": [
	{
            "q": "Select correct statements for L₁ = {ε, ab, abb}, L₂= {b, ba}.",
            "a": [
                {"option": "ε ∊ L₁³", "correct": true},
                {"option": "ε ∊ L₂³", "correct": false},
                {"option": "abbabb ∊ L₁³", "correct": true},
                {"option": "abbababb ∊ L₁³", "correct": true},
                {"option": "L₁² has 6 elements", "correct": false},
                {"option": "L₁³ has 15 elements", "correct": true}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>No. (Hint: 4 statements are correct.)</span></p>" // no comma here
        }
    ]
};
