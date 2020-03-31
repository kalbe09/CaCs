// SPDX-FileCopyrightText: 2020 Jens Lechtenbörger
// SPDX-License-Identifier: CC-BY-SA-4.0

quizGitInstalled = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "To learn Git, one needs to use Git.",
        "level1":  "Excellent!",     // 80-100%
        "level2":  "Maybe ask for help?", // 60-79%
        "level3":  "Maybe ask for help?", // 40-59%
        "level4":  "Maybe ask for help?", // 20-39%
        "level5":  "Maybe ask for help?"  // 0-19%, no comma here
    },
    "questions": [
	{
            "q": "Did you install Git?",
            "a": [
                {"option": "Yes, I'm prepared for practical tasks.", "correct": true},
                {"option": "No.", "correct": false}
            ],
            "correct": "<p><span>Very good!  You should be in pretty good shape.</span></p>",
            "incorrect": "<p>Do you need help?  If you do not have time to install Git now, maybe place this presentation on your TODO list and come back later?</p>" // no comma here
        }
    ]
};
