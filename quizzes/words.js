quizWords = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "Building words",
        "level1":  "Excellent!",          // 80-100%
        "level2":  "Please re-try.",      // 60-79%
        "level3":  "Please re-try.",      // 40-59%
        "level4":  "Maybe ask for help?", // 20-39%
        "level5":  "Please ask for help." //  0-19%, no comma here
    },
    "questions": [
	{
            "q": "Select correct statements, starting from words d=data and b=base.",
            "a": [
                {"option": "d=base", "correct": false},
                {"option": "d=data", "correct": true},
                {"option": "d¹=data", "correct": true},
                {"option": "d⁰=1", "correct": false},
                {"option": "dεεd=data²", "correct": true}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>No. (Hint: 3 statements are correct.)</span></p>" // no comma here
        }
    ]
};
