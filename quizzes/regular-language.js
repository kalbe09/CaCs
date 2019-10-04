quizRegularLanguage = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "Regular language",
        "level1":  "Excellent!",          // 80-100%
        "level2":  "Please re-try.",      // 60-79%
        "level3":  "Please re-try.",      // 40-59%
        "level4":  "Maybe ask for help?", // 20-39%
        "level5":  "Please ask for help." //  0-19%, no comma here
    },
    "questions": [
	{
            "q": "Select correct statements for E = (data|integration)*.",
            "a": [
                {"option": "ε ∊ L(E)", "correct": true},
                {"option": "data ∊ L(E)", "correct": true},
                {"option": "integration ∊ L(E)", "correct": true},
                {"option": "datadata ∊ L(E)", "correct": true},
                {"option": "dataintegration ∊ L(E)", "correct": true},
                {"option": "dataintegrationdata ∊ L(E)", "correct": true}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>No. (Hint: All statements are correct.)</span></p>" // no comma here
        }
    ]
};
