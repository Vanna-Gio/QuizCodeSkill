

// Game Data - Moved to separate object for better organization
const gameData = {
    vocab: [
        { word: "unordered list", meaning: "creates an unordered list (stands for unordered list (bullets))", khmer: "", audio: "audio/unordered list.mp3" },
        { word: "ordered (numbered) list", meaning: "creates an ordered (numbered) list(stands for ordered list (numbers))", khmer: "", audio: "audio/ordered (numbered) list.mp3" },
        { word: "behave like", meaning: "to act or behave like someone or something.", khmer: "ប្រព្រឹត្តដូចជា", audio: "audio/.mp3" },
        { word: "Block-level elements", meaning: "Block-level elements take up full width and begin on a new line. ", khmer: "", audio: "audio/Block-level elements.mp3" },
        { word: "Inline elements", meaning: "Inline elements stay in the same line with surrounding content.", khmer: "", audio: "audio/Inline elements.mp3" },
        { word: "default", meaning: "as the original or initial setting that is automatically selected when no other choice is made", khmer: "លំនាំដើម", audio: "audio/default.mp3" },
       
      { word: "Default (preset setting)<br>✅ Example: This app uses the default language.<br>→ កម្មវិធីនេះប្រើភាសាលំនាំដើម។", meaning: "Used in computers or technology to mean the preset or automatic setting.", khmer: "ឧបករណ៍លំនាំដើម", audio: "audio/Default (preset setting).mp3" },
      { word: "Default (failure to act, e.g., fail to pay a loan)✅ Example:<br>He was in default on his loan.<br>→ គាត់បានខកខានក្នុងការសងប្រាក់កម្ចី។", meaning: "Means to fail to do something required, like repaying a loan or appearing in court.", khmer: "", audio: "audio/Default (failure to act, e.g., fail to pay a loan).mp3" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    // { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    // { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    //     { word: "", meaning: "", khmer: "", audio: "" },
    // 
    ],
    
    grammar: {
        tenses: {
            "Present Simple": {
                description: "Used for habits, routines, facts, and general truths.",
                structure: "Subject + Base Form of Verb (add -s/-es for he/she/it)",
                examples: [
                    { type: "correct", sentence: "She reads a book every night.", explanation: "Habit: 'reads' (she + verb-s)" },
                    { type: "correct", sentence: "They work in a factory.", explanation: "General truth: 'work' (they + base verb)" },
                    { type: "incorrect", sentence: "He go to school.", correct: "He goes to school.", explanation: "Incorrect: 'go' should be 'goes' for 'he'." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which sentence uses the Present Simple correctly?",
                        options: [
                            { text: "They are playing soccer now.", correct: false },
                            { text: "She usually goes to bed early.", correct: true, explanation: "Correct: 'usually goes' shows a habit." },
                            { text: "I will visit my grandparents tomorrow.", correct: false }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Every morning, the sun ______ (rise) in the east.",
                        correctAnswer: "rises",
                        explanation: "This is a general truth, so we use Present Simple. For 'the sun' (it), we add '-es' to 'rise'."
                    }
                ]
            },
            "Present Continuous": {
                description: "Used for actions happening now, temporary actions, or planned future actions.",
                structure: "Subject + am/is/are + Verb-ing",
                examples: [
                    { type: "correct", sentence: "I am studying English right now.", explanation: "Action happening now: 'am studying'." },
                    { type: "correct", sentence: "They are building a new hospital.", explanation: "Temporary action: 'are building'." }
                ],
                quizQuestions: [
                    {
                        type: "multiple-choice",
                        question: "Which action is happening at the moment of speaking?",
                        options: [
                            { text: "She walks to work every day.", correct: false },
                            { text: "He is watching TV.", correct: true, explanation: "Correct: 'is watching' indicates an action happening now." }
                        ]
                    },
                    {
                        type: "fill-in-blank",
                        question: "Look! The cat ______ (sleep) on the sofa.",
                        correctAnswer: "is sleeping",
                        explanation: "This describes an action happening now, so we use Present Continuous: 'is sleeping'."
                    }
                ]
            }
        },
        
        structureQuiz: [
            {
                question: "Choose the correct verb form: 'She usually ______ (study) at night.'",
                type: "fill-in-blank",
                correctAnswer: "studies",
                explanation: "For habitual actions with 'she', we use Present Simple: 'studies'."
            },
            {
                question: "Complete the sentence: 'We ______ (go) to the beach next weekend.' (Hint: future plan)",
                type: "fill-in-blank",
                correctAnswer: "are going",
                explanation: "For planned future actions, we often use Present Continuous: 'are going'."
            }
        ]
    },
    
    shadowing: {
        "Beginner Sentences": [
            { sentence: "&lt;ul&gt; stands for unordered list (bullets), and &lt;ol&gt; stands for ordered list (numbers). Both use &lt;li&gt; for list items", khmer: "" },
            { sentence: "HTML stands for HyperText Markup Language. It's the standard language used to create and structure content on the web. ", khmer: "" },
            { sentence: "HTML is not a programming or styling language—it's a markup language that defines the structure of web content. It works with CSS and JavaScript to build modern websites. ", khmer: "" },
            { sentence: "What are common tags in HTML?->&lt;h1&gt; to &lt;h6&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;", khmer: "Common HTML tags include &lt;h1&gt; for headings, &lt;p&gt; for paragraphs, &lt;a&gt; for links, and &lt;img&gt; for images. The other choices contain tags from programming or graphics contexts, not HTML." },
            { sentence: " How are the &lt;h1&gt; to &lt;h6&gt; tags used in HTML?", khmer: "They define heading levels, from the largest (&lt;h1&gt;) to the smallest (&lt;h6&gt;)." },
            { sentence: " They define heading levels, from the largest (&lt;h1&gt;) to the smallest (&lt;h6&gt;).", khmer: "How are the &lt;h1&gt; to &lt;h6&gt; tags used in HTML?" },
            { sentence: "What is the difference between &lt;ul&gt; and &lt;ol&gt; in HTML? ", khmer: "&lt;ul&gt; creates an unordered list, while &lt;ol&gt; creates an ordered (numbered) list." },
            { sentence: " How do you create a hyperlink in HTML?", khmer: "Using the &lt;a&gt; tag with an href attribute pointing to the URL." },
            { sentence: " The &lt;a&gt; (anchor) tag creates hyperlinks. The href attribute defines the destination URL.", khmer: "" },
            { sentence: " What is the &lt;head&gt; tag used for in HTML?", khmer: "It contains metadata, such as the page title, links to CSS, and scripts." },
            { sentence: " The &lt;head&gt; tag includes metadata that isn’t visible on the page, such as the title, character encoding, linked stylesheets, and JavaScript files.", khmer: "What is the &lt;head&gt; tag used for in HTML?" },
            { sentence: "What is the difference between &lt;div&gt; and &lt;span&gt; in HTML? ", khmer: "&lt;div&gt; is a block-level element, and &lt;span&gt; is an inline-level element." },
            { sentence: " &lt;div&gt; creates a block container that starts on a new line, while &lt;span&gt; is used for inline grouping of text without breaking the flow. Both are often used for layout or styling purposes", khmer: "&lt;div&gt; is a block-level element, and &lt;span&gt; is an inline-level element." },
            { sentence: "By default, &lt;div&gt; elements are block-level, so they start on a new line and stack vertically. ", khmer: "What happens when you place two &lt;div&gt; elements next to each other in HTML?" },
            { sentence: "Which of the following is TRUE about &lt;span&gt; in HTML? ", khmer: "It is an inline element used for styling parts of text." },
            { sentence: " &lt;span&gt; is used to apply styles or scripts to small portions of text without breaking the flow of content.", khmer: "Which of the following is TRUE about &lt;span&gt; in HTML?" },
            { sentence: " How can you make a &lt;span&gt; behave like a block element?", khmer: "Add display: block; in CSS." },
            { sentence: "You can change the default display of any HTML element using CSS. Setting display: block; makes a &lt;span&gt; behave like a block. ", khmer: "How can you make a &lt;span&gt; behave like a block element?" },
            { sentence: "What is a key visual difference between block and inline elements? ", khmer: "Block elements break onto a new line; inline elements do not." },
            { sentence: " Block-level elements take up full width and begin on a new line. Inline elements stay in the same line with surrounding content.", khmer: "What is a key visual difference between block and inline elements?" },
            { sentence: "The term default is most commonly used in technology and computer contexts in modern Khmer, especially when referring to default settings in software or devices. ", khmer: "" },
            { sentence: " to behave, to act, to conduct oneself", khmer: "ប្រព្រឹត្ត " },
            { sentence: " like, as if, similar to", khmer: "ដូចជា" },
            { sentence: " act like(more casual)", khmer: "ធ្វើដូច " },
            { sentence: "become like(when behavior changes to resemble something) ", khmer: "ក្លាយជា" },
            { sentence: " similar to (when comparing behavior)", khmer: "ស្រដៀងនឹង" },
            { sentence: " Don't behave like a child", khmer: "កុំប្រព្រឹត្តដូចជាកុមារ" },
            { sentence: "He behaves like his father ", khmer: "គាត់ប្រព្រឹត្តដូចជាឪពុករបស់គាត់" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" }, 
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },
            { sentence: " ", khmer: "" },                         
            { sentence: "&lt;div&gt; is a block-level element, which means it starts on a new line and takes up the full width of its parent container by default. &lt;span&gt; is an inline-level element, so it only takes up as much width as its content requires and does not break to a new line. Both are commonly used for grouping elements for styling with CSS.", khmer: "" },
            { sentence: "What happens when you place two &lt;div&gt; elements next to each other in HTML?", khmer: "They stack vertically because &lt;div&gt; is a block-level element." }
        ],
        "Intermediate Sentences": [
            { sentence: "I love learning English. It's so rewarding!", khmer: "ខ្ញុំស្រលាញ់ការសិក្សាភាសាអង់គ្លេស។ វាពិតជាមានប្រយោជន៍ណាស់!" },
            { sentence: "Could you please repeat that?", khmer: "សូមអ្នកជួយនិយាយម្ដងទៀតបានទេ?" },
            { sentence: "The weather is beautiful today.", khmer: "អាកាសធាតុថ្ងៃនេះស្រស់ស្អាតណាស់។" }
        ],
        "Idioms": [
            { sentence: "It's raining cats and dogs.", khmer: "ភ្លៀងខ្លាំងណាស់។", explanation: "Meaning: Raining very heavily." },
            { sentence: "Break a leg!", khmer: "សូមសំណាងល្អ!", explanation: "Meaning: Good luck! (Used especially in theater)." }
        ]
    },
    
    qnacss: [
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            correctAnswer: "Cascading Style Sheets",
            explanation: "CSS stands for Cascading Style Sheets, which is used to style the layout of web pages."
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["color", "background-color", "bgcolor", "background"],
            correctAnswer: "background-color",
            explanation: "The 'background-color' property is used to set the background color of an element."
        },
        {
            question: "How do you make text bold in CSS?",
            options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;", "text-weight: bold;"],
            correctAnswer: "font-weight: bold;",
            explanation: "The 'font-weight' property is used to make text bold by setting it to 'bold'."
        },
        {
            question: "Which CSS property is used to control the spacing between lines of text?",
            options: ["line-height", "letter-spacing", "text-spacing", "spacing"],
            correctAnswer: "line-height",
            explanation: "The 'line-height' property is used to control the spacing between lines of text."
        },
        {
            question: "What is the correct syntax for adding a comment in CSS?",
            options: ["// This is a comment", "/* This is a comment */", "", "# This is a comment"],
            correctAnswer: "/* This is a comment */",
            explanation: "CSS comments are written inside '/*' and '*/'."
        },
        {
            question: "Which property is used to change the font of an element?",
            options: ["font-family", "font-style", "font-weight", "font-size"],
            correctAnswer: "font-family",
            explanation: "The 'font-family' property is used to specify the font of an element."
        },
        {
            question: "How do you select an element with the id 'header' in CSS?",
            options: ["#header", ".header", "header", "id=header"],
            correctAnswer: "#header",
            explanation: "In CSS, the '#' symbol is used to select an element by its id."
        },
        {
            question: "Which property is used to add space inside an element, between the content and the border?",
            options: ["margin", "padding", "border-spacing", "spacing"],
            correctAnswer: "padding",
            explanation: "The 'padding' property is used to add space inside an element, between the content and the border."
        },
        {
            question: "What is the default position value of an HTML element in CSS?",
            options: ["static", "relative", "absolute", "fixed"],
            correctAnswer: "static",
            explanation: "The default position value of an HTML element in CSS is 'static'."
        },
        {
            question: "Which property is used to align text to the center in CSS?",
            options: ["text-align: center;", "align: center;", "text-center: true;", "horizontal-align: center;"],
            correctAnswer: "text-align: center;",
            explanation: "The 'text-align' property is used to align text horizontally, and 'center' aligns it to the center."
        }
    ],
    
    qnajs: [
        {
            question: "What does 'var' keyword do in JavaScript?",
            options: [
                "Declares a block-scoped variable",
                "Declares a function-scoped variable",
                "Declares a constant variable",
                "Declares a private variable"
            ],
            correctAnswer: "Declares a function-scoped variable",
            explanation: "'var' declares a variable that is function-scoped or globally scoped if declared outside a function."
        },
        {
            question: "Which method is used to parse a JSON string into a JavaScript object?",
            options: [
                "JSON.stringify()",
                "JSON.parse()",
                "JSON.objectify()",
                "JSON.convert()"
            ],
            correctAnswer: "JSON.parse()",
            explanation: "JSON.parse() is used to convert a JSON string into a JavaScript object."
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "Refers to the global object",
                "Refers to the current object",
                "Refers to the parent object",
                "Refers to the previous object"
            ],
            correctAnswer: "Refers to the current object",
            explanation: "The 'this' keyword refers to the object it belongs to, depending on the context in which it is used."
        },
        {
            question: "Which of the following is NOT a JavaScript data type?",
            options: [
                "String",
                "Number",
                "Boolean",
                "Character"
            ],
            correctAnswer: "Character",
            explanation: "JavaScript does not have a 'Character' data type; single characters are represented as strings."
        },
        {
            question: "What is the output of 'typeof null' in JavaScript?",
            options: [
                "'null'",
                "'object'",
                "'undefined'",
                "'string'"
            ],
            correctAnswer: "'object'",
            explanation: "In JavaScript, 'typeof null' returns 'object' due to a historical bug in the language."
        },
        {
            question: "Which function is used to delay the execution of code in JavaScript?",
            options: [
                "setTimeout()",
                "setInterval()",
                "delay()",
                "wait()"
            ],
            correctAnswer: "setTimeout()",
            explanation: "setTimeout() is used to execute a function after a specified delay in milliseconds."
        },
        {
            question: "What is the difference between '==' and '===' in JavaScript?",
            options: [
                "'==' checks value only, '===' checks value and type",
                "'==' checks type only, '===' checks value and type",
                "'==' checks value and type, '===' checks value only",
                "'==' and '===' are the same"
            ],
            correctAnswer: "'==' checks value only, '===' checks value and type",
            explanation: "'==' performs type coercion, while '===' checks both value and type without coercion."
        },
        {
            question: "Which keyword is used to define a constant in JavaScript?",
            options: [
                "let",
                "var",
                "const",
                "static"
            ],
            correctAnswer: "const",
            explanation: "The 'const' keyword is used to declare variables that cannot be reassigned."
        },
        {
            question: "What is the purpose of the 'map()' method in JavaScript?",
            options: [
                "Iterates over an array and modifies its elements",
                "Creates a new array by applying a function to each element",
                "Filters elements of an array based on a condition",
                "Sorts the elements of an array"
            ],
            correctAnswer: "Creates a new array by applying a function to each element",
            explanation: "The 'map()' method creates a new array by applying a provided function to each element of the original array."
        },
        {
            question: "What is the output of 'console.log(0.1 + 0.2 === 0.3)'?",
            options: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            correctAnswer: "false",
            explanation: "Due to floating-point precision issues, 0.1 + 0.2 does not exactly equal 0.3 in JavaScript."
        }
    ],
    // Added Q&A PHP based on user's original data structure.
    qnaphp: [
        {
            question: "What does PHP stand for?",
            options: ["Personal Home Page", "Hypertext Preprocessor", "Pre-programmed Hypertext", "Public Home Page"],
            correctAnswer: "Hypertext Preprocessor",
            explanation: "PHP originally stood for Personal Home Page, but now it officially stands for PHP: Hypertext Preprocessor."
        },
        {
            question: "Which symbol is used to start a variable in PHP?",
            options: ["$", "@", "#", "%"],
            correctAnswer: "$",
            explanation: "All variables in PHP start with a dollar sign ($)."
        },
        {
            question: "How do you display output in PHP?",
            options: ["print()", "echo()", "both print() and echo()", "display()"],
            correctAnswer: "both print() and echo()",
            explanation: "Both `echo` and `print` are language constructs used to output strings in PHP."
        },
        {
            question: "Which superglobal variable is used to collect data from an HTML form with method='POST'?",
            options: ["$_GET", "$_REQUEST", "$_POST", "$_SESSION"],
            correctAnswer: "$_POST",
            explanation: "The `$_POST` superglobal array is used to collect form data after submitting an HTML form with `method='post'`."
        },
        {
            question: "What is the correct way to include a file in PHP?",
            options: ["include 'file.php';", "require 'file.php';", "both include and require", "import 'file.php';"],
            correctAnswer: "both include and require",
            explanation: "Both `include` and `require` statements are used to embed the content of another PHP file into the current file. `require` will produce a fatal error if the file is not found, while `include` will only produce a warning."
        }
    ],
   qnahtml: [
        {
            question: "What is HTML?",
            options: [
                "A programming language used to build mobile apps.",
                "HTML stands for HyperText Markup Language. It's the standard language used to create and structure content on the web.",
                "A styling language used for making web pages look attractive.",
                "A database query language used for fetching web data."
            ],
            correctAnswer: "HTML stands for HyperText Markup Language. It's the standard language used to create and structure content on the web.",
            explanation: "HTML is not a programming or styling language—it's a markup language that defines the structure of web content. It works with CSS and JavaScript to build modern websites."
        },
        {
            question: "What are common tags in HTML?",
            options: [
               "&lt;h1&gt; to &lt;h6&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;",
                "&lt;run&gt;, &lt;print&gt;, &lt;main&gt;, &lt;loop&gt;",
                "&lt;define&gt;, &lt;module&gt;, &lt;class&gt;, &lt;import&gt;",
                "&lt;move&gt;, &lt;draw&gt;, &lt;box&gt;, &lt;line&gt;"
            ],
            correctAnswer: "&lt;h1&gt; to &lt;h6&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;",
            explanation: "Common HTML tags include &lt;h1&gt; for headings, &lt;p&gt; for paragraphs, &lt;a&gt; for links, and &lt;img&gt; for images. The other choices contain tags from programming or graphics contexts, not HTML.",
        },
        {
            question: "How are the &lt;h1&gt; to &lt;h6&gt; tags used in HTML?",
            options: [
                "They are used to style buttons with hover effects.",
                "They define heading levels, from the largest (&lt;h1&gt;) to the smallest (&lt;h6&gt;).",
                "They control page layout and grid alignment.",
                "They are used to create hyperlinks."
            ],
            correctAnswer: "They define heading levels, from the largest (&lt;h1&gt;) to the smallest (&lt;h6&gt;).",
            explanation: "The &lt;h1&gt; to &lt;h6&gt; tags are used for headings, with &lt;h1&gt; being the most important and largest, and &lt;h6&gt; being the least important and smallest. They help define the structure of content."
        },
        {
            question: "What is the difference between &lt;ul&gt; and &lt;ol&gt; in HTML?",
            options: [
                "&lt;ul&gt; creates an ordered list, while &lt;ol&gt; creates an unordered list.",
                "&lt;ul&gt; is used for headings, while &lt;ol&gt; is used for links.",
                "&lt;ul&gt; creates an unordered list, while &lt;ol&gt; creates an ordered (numbered) list.",
                "&lt;ul&gt; displays images, while &lt;ol&gt; embeds videos."
            ],
            correctAnswer: "&lt;ul&gt; creates an unordered list, while &lt;ol&gt; creates an ordered (numbered) list.",
            explanation: "&lt;ul&gt; stands for unordered list (bullets), and &lt;ol&gt; stands for ordered list (numbers). Both use &lt;li&gt; for list items."
        },
        {
            question: "How do you create a hyperlink in HTML?",
            options: [
                "Using the &lt;link&gt; tag with an href attribute.",
                "Using the &lt;a&gt; tag with an href attribute pointing to the URL.",
                "Using the &lt;url&gt; tag with a src attribute.",
                "Using the &lt;src&gt; tag inside a paragraph."
            ],
            correctAnswer: "Using the &lt;a&gt; tag with an href attribute pointing to the URL.",
            explanation: "The &lt;a&gt; (anchor) tag creates hyperlinks. The href attribute defines the destination URL."
        },
        {
            question: "What is the &lt;head&gt; tag used for in HTML?",
            options: [
                "It displays content directly on the web page.",
                "It is used to store the main body text and headings.",
                "It contains metadata, such as the page title, links to CSS, and scripts.",
                "It holds images and videos for the homepage."
            ],
            correctAnswer: "It contains metadata, such as the page title, links to CSS, and scripts.",
            explanation: "The &lt;head&gt; tag includes metadata that isn’t visible on the page, such as the title, character encoding, linked stylesheets, and JavaScript files."
        },
        {
            question: "What is the difference between &lt;div&gt; and &lt;span&gt; in HTML?",
            options: [
                "&lt;div&gt; is used for small inline elements, while &lt;span&gt; is used for large block elements.",
                "&lt;div&gt; and &lt;span&gt; are both used for links.",
                "&lt;div&gt; is a block-level element, and &lt;span&gt; is an inline-level element.",
                "&lt;div&gt; automatically adds styling, while &lt;span&gt; does not."
            ],
            correctAnswer: "&lt;div&gt; is a block-level element, and &lt;span&gt; is an inline-level element.",
            explanation: "&lt;div&gt; is a block-level element, which means it starts on a new line and takes up the full width of its parent container by default. &lt;span&gt; is an inline-level element, so it only takes up as much width as its content requires and does not break to a new line. Both are commonly used for grouping elements for styling with CSS."

        },
        {
            question: "What happens when you place two &lt;div&gt; elements next to each other in HTML?",
            options: [
                "They appear on the same line side-by-side by default.",
                "They stack vertically because &lt;div&gt; is a block-level element.",
                "They become inline unless styled with CSS.",
                "They collapse into one element."
            ],
            correctAnswer: "They stack vertically because &lt;div&gt; is a block-level element.",
            explanation: "By default, &lt;div&gt; elements are block-level, so they start on a new line and stack vertically."
        },
        {
            question: "Which of the following is TRUE about &lt;span&gt; in HTML?",
            options: [
                "It creates a new block of content.",
                "It stretches to fill the entire width of its container.",
                "It is an inline element used for styling parts of text.",
                "It is used to create line breaks."
            ],
            correctAnswer: "It is an inline element used for styling parts of text.",
            explanation: "&lt;span&gt; is used to apply styles or scripts to small portions of text without breaking the flow of content."
        },
        {
            question: "How can you make a &lt;span&gt; behave like a block element?",
            options: [
                "Add display: block; in CSS.",
                "Use a &lt;div&gt; instead.",
                "Wrap it in a &lt;p&gt; tag.",
                "It's not possible to change span behavior."
            ],
            correctAnswer: "Add display: block; in CSS.",
            explanation: "You can change the default display of any HTML element using CSS. Setting display: block; makes a &lt;span&gt; behave like a block."
        },
        {
            question: "What is a key visual difference between block and inline elements?",
            options: [
                "Inline elements always have borders by default.",
                "Block elements are hidden unless styled.",
                "Block elements break onto a new line; inline elements do not.",
                "Inline elements can contain block elements inside them."
            ],
            correctAnswer: "Block elements break onto a new line; inline elements do not.",
            explanation: "Block-level elements take up full width and begin on a new line. Inline elements stay in the same line with surrounding content."
        },
        {
            question: "What is a list tag in HTML?",
            options: [
                "A tag used to create buttons on a page.",
                "A tag used to define JavaScript functions.",
                "Tags like &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt; used to create lists.",
                "Tags for linking external files."
            ],
            correctAnswer: "Tags like &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt; used to create lists.",
            explanation: "HTML provides &lt;ul&gt; (unordered list), &lt;ol&gt; (ordered list), and &lt;li&gt; (list item) to create different types of lists."
        },
        {
            question: "How do you embed an image in HTML?",
            options: [
                "Using the &lt;image&gt; tag with a source attribute.",
                "Using the &lt;img&gt; tag with the src attribute.",
                "Using the &lt;src&gt; tag inside a &lt;div&gt;.",
                "Using CSS only."
            ],
            correctAnswer: "Using the &lt;img&gt; tag with the src attribute.",
            explanation: "The &lt;img&gt; tag is used to display images. The src attribute specifies the image URL."
        },
        {
            question: "What is the purpose of the alt attribute in an image tag?",
            options: [
                "To style the image with alternative colors.",
                "To define the size of the image.",
                "To provide alternative text if the image cannot load.",
                "To create animations for the image."
            ],
            correctAnswer: "To provide alternative text if the image cannot load.",
            explanation: "The alt attribute helps screen readers and is displayed if the image fails to load, improving accessibility."
        },
        {
            question: "When do we use action and method in HTML?",
            options: [
                "They are used in JavaScript loops.",
                "Inside the &lt;img&gt; tag to control image size.",
                "In the &lt;form&gt; tag to define how and where to send form data.",
                "To create animations in HTML."
            ],
            correctAnswer: "In the &lt;form&gt; tag to define how and where to send form data.",
            explanation: "The action attribute defines the URL where the form data is sent, and method (GET or POST) specifies how it's sent."
        },
        {
            question: "What is a hyperlink in HTML?",
            options: [
                "A clickable link created using the &lt;a&gt; tag with an href attribute.",
                "A tool to run scripts on a page.",
                "A visual layout element.",
                "A tag to create an image slider."
            ],
            correctAnswer: "A clickable link created using the &lt;a&gt; tag with an href attribute.",
            explanation: "The &lt;a&gt; tag (anchor tag) creates hyperlinks, allowing users to navigate to other pages or resources."
        },
        {
            question: "Why do we use values like target='_blank', '_self', '_top', and '_parent' in HTML?",
            options: [
                "To set how the page should be styled using CSS.",
                "To define the structure of a web form.",
                "To control where a link or form result is opened (e.g., same tab, new tab, parent frame).",
                "To validate user input in forms."
            ],
            correctAnswer: "To control where a link or form result is opened (e.g., same tab, new tab, parent frame).",
            explanation: "The target attribute specifies where to open the linked document. For example, '_blank' opens in a new tab, while '_self' opens in the same tab."
        },
        {
            question: "What does target='_blank' do in an HTML link?",
            options: [
                "Opens the link in the same tab or window.",
                "Opens the link in a new tab or window.",
                "Opens the link in a popup alert.",
                "Redirects to a new website silently."
            ],
            correctAnswer: "Opens the link in a new tab or window.",
            explanation: "target='_blank' is used to open the link in a new browser tab or window."
        },
        {
            question: "What is the effect of using target='_self' in an HTML link?",
            options: [
                "Opens the link in a popup.",
                "Opens the link in the same tab or window.",
                "Opens the link in a new tab.",
                "Blocks the link from opening."
            ],
            correctAnswer: "Opens the link in the same tab or window.",
            explanation: "target='_self' is the default behavior — it loads the linked document in the same browsing context."
        },
        {
            question: "What does target='_parent' do when used in a link or form?",
            options: [
                "It opens the link in a popup window.",
                "It opens the link in a new browser tab.",
                "It opens the link in the parent frame, if the page is inside a frame.",
                "It refreshes the current frame only."
            ],
            correctAnswer: "It opens the link in the parent frame, if the page is inside a frame.",
            explanation: "target='_parent' opens the linked document in the immediate parent frame — useful when working with nested iframes."
        },
        {
            question: "What is the purpose of target='_top' in HTML?",
            options: [
                "To open a link in the current inline element.",
                "To close all tabs and open a new one.",
                "To open the link in the top-level window, removing any frames.",
                "To prevent the page from refreshing."
            ],
            correctAnswer: "To open the link in the top-level window, removing any frames.",
            explanation: "target='_top' breaks out of all frames and loads the link in the full browser window — useful for exiting iframes."
        },
        {
            question: "Which of the following are valid input types in HTML?",
            options: [
                "text, password, email, checkbox, submit",
                "inputText, secureText, mail, check, go",
                "textbox, passwordBox, inputField, send, choose",
                "string, numberString, checkfield, click, type"
            ],
            correctAnswer: "text, password, email, checkbox, submit",
            explanation: "HTML supports various input types like 'text', 'password', 'email', 'checkbox', and 'submit', which define how the input field behaves and what data it collects."
        },
        {
            question: "What is the purpose of a &lt;form&gt; in HTML?",
            options: [
                "To style a webpage with CSS.",
                "To define scripts in a webpage.",
                "To collect user input and send it to a server.",
                "To display images and videos responsively."
            ],
            correctAnswer: "To collect user input and send it to a server.",
            explanation: "The &lt;form&gt; tag is used to gather input from users, such as text, checkboxes, radio buttons, and then submit that data to a server using an action URL."
        },
        {
    question: "What does &lt;input type='text'&gt; do in HTML?",
    options: [
        "It creates a password-protected field.",
        "It creates a button to submit a form.",
        "It creates a single-line text field for user input.",
        "It creates a dropdown menu."
    ],
    correctAnswer: "It creates a single-line text field for user input.",
    explanation: "The 'text' type is the default input type in HTML, used to enter plain, single-line text."
},
{
    question: "What is the purpose of &lt;input type='password'&gt;?",
    options: [
        "To store session data.",
        "To hide the input characters while typing.",
        "To create clickable buttons.",
        "To display encrypted messages."
    ],
    correctAnswer: "To hide the input characters while typing.",
    explanation: "The 'password' input type masks characters with dots or asterisks to protect sensitive data."
},
{
    question: "What does &lt;input type='email'&gt; do?",
    options: [
        "It creates a messaging form.",
        "It validates that the user enters a properly formatted email address.",
        "It encrypts the email entered.",
        "It connects the form directly to email services."
    ],
    correctAnswer: "It validates that the user enters a properly formatted email address.",
    explanation: "The 'email' input type helps ensure that users enter a value that matches email address format before submission."
},
{
    question: "What is the function of &lt;input type='checkbox'&gt; in a form?",
    options: [
        "To let users pick one option from a group.",
        "To add a signature field.",
        "To allow users to select multiple options from a list.",
        "To upload a file."
    ],
    correctAnswer: "To allow users to select multiple options from a list.",
    explanation: "Checkboxes are used when you want the user to be able to choose zero or more options from a set."
},
{
    question: "What does &lt;input type='submit'&gt; do in a form?",
    options: [
        "It resets all form fields.",
        "It opens a new tab.",
        "It sends the form data to the server.",
        "It saves the data locally only."
    ],
    correctAnswer: "It sends the form data to the server.",
    explanation: "The 'submit' input type creates a button that triggers the form's action, submitting the collected data."
}










    ],

    };

// Game State Management
const gameState = {
    mode: null,
    currentIndex: 0,
    score: 0,
    currentPool: [],
    currentRule: null, // For grammar rules
    currentLevel: null, // For shadowing levels
    recognition: null, // Web Speech API SpeechRecognition object
    audioRecorder: null, // MediaRecorder object
    audioChunks: [],
    synth: window.speechSynthesis, // SpeechSynthesisUtterance for text-to-speech
    voices: [],
    timerInterval: null, // To hold the timer interval
    timeLeft: 15, // Initial time for vocabulary questions
    recognitionActive: false // Track if speech recognition is active
};


// DOM Elements
const elements = {
    modeSelection: document.getElementById("modeSelection"),
    gameArea: document.getElementById("gameArea"),
    homeLink: document.getElementById("homeLink"),
    aboutLink: document.getElementById("aboutLink"),
    contactLink: document.getElementById("contactLink"),
    resourcesLink: document.getElementById("resourcesLink"),
    navContainer: document.querySelector(".nav-container") // Added for profile image insertion
};

// Initialize SpeechSynthesis voices
window.speechSynthesis.onvoiceschanged = () => {
    gameState.voices = gameState.synth.getVoices();
};

// Event Listeners (using delegated events for mode selection for efficiency)
elements.homeLink.addEventListener("click", goHome);
elements.aboutLink.addEventListener("click", () => showInfoModal("About Us", "This is an interactive English learning game designed to help you improve your language skills through various challenges: Vocabulary, Grammar, Shadowing, and Q&A."));

// Add profile image dynamically
const profileImage = document.createElement("img");
profileImage.src = "image/AnnaRa.png"; // Replace with the actual path to your image
profileImage.alt = "Profile Image";
profileImage.className = "profile-image"; // Apply defined styles
profileImage.addEventListener("click", () => {
    showInfoModal("Profile", "Sovanna!, Are ready to imporve yourselft sep by step! Let's start now! <br> Tommorow you will see progress!");
});
elements.navContainer.prepend(profileImage); // Use prepend to place it before other nav items

elements.contactLink.addEventListener("click", () => showInfoModal("Contact", "For support or feedback, please email us at: <a href='mailto:rasovanna785@gmail.com'>rasovanna785@gmail.com</a>"));
elements.resourcesLink.addEventListener("click", () => showInfoModal("Resources", "Check out these helpful resources:<br><ul><li><a href='https://dictionary.cambridge.org/' target='_blank'>Cambridge Dictionary</a></li><li><a href='https://www.bbc.co.uk/learningenglish/' target='_blank'>BBC Learning English</a></li><li><a href='https://www.duolingo.com/' target='_blank'>Duolingo</a></li></ul>"));

// Use event delegation for mode selection buttons
elements.modeSelection.addEventListener('click', (event) => {
    if (event.target.classList.contains('sub-menu-btn')) {
        const mode = event.target.dataset.mode;
        if (mode) {
            selectMode(mode);
        }
    }
});

// Utility Functions
function showInfoModal(title, content) {
    clearInterval(gameState.timerInterval); // Stop any active timer
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>${title}</h2>
            <div class="question-box" style="text-align: left;">
                <p>${content}</p>
            </div>
            <button class="btn btn-primary" onclick="goHome()">Back to Home</button>
        </div>
    `;
    elements.modeSelection.style.display = "none";
}

function shuffleArray(array) {
    return [...array].sort(() => 0.5 - Math.random());
}

function createButton(text, onClick, className = "btn btn-primary") {
    const button = document.createElement("button");
    button.className = className;
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

function speakText(text, lang = 'en-US') {
    if (!gameState.synth) {
        console.warn("SpeechSynthesis not supported or not ready.");
        return;
    }
    // Cancel any ongoing speech
    gameState.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    const englishVoices = gameState.voices.filter(voice => voice.lang.startsWith('en')); // Filter for English voices
    if (englishVoices.length > 0) {
        utterance.voice = englishVoices[0]; // Pick the first English voice
    }
    gameState.synth.speak(utterance);
}

function playAudio(path) {
    const audio = new Audio(path);
    audio.play().catch(e => console.error("Error playing audio:", e));
}

function startTimer(duration, onTick, onComplete) {
    clearInterval(gameState.timerInterval); // Clear any existing timer
    gameState.timeLeft = duration;
    onTick(gameState.timeLeft); // Initial call

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        onTick(gameState.timeLeft);
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            onComplete();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
}

// Core Game Functions
function goHome() {
    resetGameState();
    elements.modeSelection.style.display = "block";
    elements.gameArea.innerHTML = "";
    document.querySelector('h1').textContent = "Master English: Your Interactive Learning Journey";
}

function resetGameState() {
    stopTimer(); // Ensure timer is stopped
    if (gameState.recognition && gameState.recognitionActive) {
        gameState.recognition.stop();
        gameState.recognitionActive = false;
    }
    if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
        gameState.audioRecorder.stop();
    }
    gameState.audioChunks = []; // Clear recorded audio
    gameState.mode = null;
    gameState.currentIndex = 0;
    gameState.score = 0;
    gameState.currentPool = [];
    gameState.currentRule = null;
    gameState.currentLevel = null;
    gameState.synth.cancel(); // Stop any ongoing speech
}
////////=============================
function selectMode(mode) {
    resetGameState(); // Reset state when a new mode is selected
    gameState.mode = mode;
    elements.modeSelection.style.display = "none";
    document.querySelector('h1').textContent = `Master English: ${event.target.textContent.trim()}`; // Update H1
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Loading ${mode.replace('qna', 'Q&A ')}...</h2>
            <p class="info-text">Prepare for your challenge!</p>
        </div>
    `;
    setTimeout(() => { // Small delay for visual transition
        if (mode === "vocab") {
            initVocabGame();
        } else if (mode === "grammar") {
            initGrammarGame();
        } else if (mode === "shadowing") {
            initShadowingGame();
        } else if (mode.startsWith("qna")) {
            initQnAGame(mode);
        }
    }, 500);
}

function displayGameEndScreen() {
    stopTimer(); // Ensure timer is stopped
    elements.gameArea.innerHTML = `
        <div class="container text-center">
            <h2>Game Over!</h2>
            <p class="feedback feedback-info">You completed all questions in this section!</p>
            <p class="score-display">Your final score: ${gameState.score}</p>
            <button class="btn btn-primary" onclick="goHome()">Back to Main Menu</button>
            <button class="btn btn-secondary" onclick="restartCurrentMode()">Play Again</button>
        </div>
    `;
}

function restartCurrentMode() {
    const mode = gameState.mode; // Get the current mode before resetting
    resetGameState(); // Reset game state
    selectMode(mode); // Re-initialize the game mode
}

function renderScoreAndButtons() {
    return `
        <div class="score-display">Score: ${gameState.score}</div>
        <div class="text-center" style="margin-top: 1.5rem;">
            <button class="btn btn-secondary" onclick="goHome()">Back to Menu</button>
        </div>
    `;
}

// --- Vocabulary Game ---
function initVocabGame() {
    gameState.currentPool = shuffleArray(gameData.vocab);
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderVocabQuestion();
}
///vocab
function renderVocabQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const currentWord = gameState.currentPool[gameState.currentIndex];
    const incorrectOptions = shuffleArray(gameData.vocab.filter(w => w.word !== currentWord.word))
        .slice(0, 3)
        .map(w => w.meaning);
    const options = shuffleArray([currentWord.meaning, ...incorrectOptions]);

    let timerBarHtml = '';
    if (gameState.mode === 'vocab') { // Only show timer for vocab
        timerBarHtml = `<div class="timer-bar-container"><div id="timerBar" class="timer-bar"></div></div>`;
    }

    elements.gameArea.innerHTML = `
        <div class="container">
            ${timerBarHtml}
            <div class="question-box">
                <p>What does "<span style="color: var(--primary-color);">${currentWord.word}</span>" mean?</p>
                <button class="btn btn-primary" onclick="speakText('${currentWord.word}')">🔊 Listen</button>
            </div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${options.map(option => `<button class="btn btn-block" data-answer="${option}">${option}</button>`).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById('optionsContainer').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-block')) {
            checkVocabAnswer(event.target.dataset.answer, currentWord.meaning, currentWord.word);
        }
    });

    if (gameState.mode === 'vocab') {
        startTimer(15, updateTimerBar, () => {
            document.getElementById('feedback').className = 'feedback feedback-error';
            document.getElementById('feedback').textContent = "Time's up! The correct meaning was: " + currentWord.meaning;
            showExplanation(currentWord.explanation || `The word "${currentWord.word}" means "${currentWord.meaning}" (${currentWord.khmer}).`);
            disableOptions();
            setTimeout(nextVocabQuestion, 3000);
        });
    }
    speakText(`What does "${currentWord.word}" mean?`); // Speak the question
}

function updateTimerBar(timeLeft) {
    const timerBar = document.getElementById('timerBar');
    if (timerBar) {
        const percentage = (timeLeft / 15) * 100; // 15 is the initial time
        timerBar.style.width = `${percentage}%`;
        timerBar.style.backgroundColor = percentage > 50 ? varCSSValue('--success-color') : (percentage > 20 ? varCSSValue('--accent-color') : varCSSValue('--error-color'));
    }
}

function varCSSValue(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

function checkVocabAnswer(selectedAnswer, correctAnswer, word) {
    stopTimer(); // Stop timer immediately on answer
    const feedbackElement = document.getElementById('feedback');
    const explanationElement = document.getElementById('explanation');
    const options = document.querySelectorAll('#optionsContainer .btn-block');

    disableOptions(); // Disable all options after selection

    if (selectedAnswer === correctAnswer) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Well done!";
        gameState.score++;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Correct! Well done!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct meaning of "${word}" is: "${correctAnswer}"`;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-incorrect');
            }
            if (btn.dataset.answer === correctAnswer) {
                btn.classList.add('btn-correct'); // Highlight correct answer
            }
        });
        speakText("Incorrect. Try again next time.");
    }
    showExplanation(gameState.currentPool[gameState.currentIndex].explanation || `The word "${word}" means "${correctAnswer}" (${gameState.currentPool[gameState.currentIndex].khmer}).`);
    updateScoreDisplay();
    setTimeout(nextVocabQuestion, 5000); // Wait 2 seconds before next question
}

function disableOptions() {
    document.querySelectorAll('#optionsContainer .btn-block').forEach(btn => {
        btn.disabled = true;
    });
}

function nextVocabQuestion() {
    gameState.currentIndex++;
    renderVocabQuestion();
}

function updateScoreDisplay() {
    const scoreElement = document.querySelector('.score-display');
    if (scoreElement) {
        scoreElement.textContent = `Score: ${gameState.score}`;
    }
}

function showExplanation(explanationText) {
    const explanationElement = document.getElementById('explanation');
    if (explanationElement) {
        explanationElement.innerHTML = `<strong>Explanation:</strong> ${explanationText}`;
        explanationElement.style.display = 'block';
    }
}

// --- Grammar Game ---
function initGrammarGame() {
    gameState.currentRule = null;
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderGrammarMenu();
}

function renderGrammarMenu() {
    const tenses = Object.keys(gameData.grammar.tenses);
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Grammar Guru: Choose a Topic</h2>
            <div class="sub-menu-buttons">
                ${tenses.map(tense => `<button class="btn btn-primary sub-menu-btn" data-rule="${tense}">${tense}</button>`).join('')}
            </div>
            <button class="btn btn-secondary" onclick="goHome()" style="margin-top: 1.5rem;">Back to Main Menu</button>
        </div>
    `;
    document.querySelectorAll('.sub-menu-buttons .btn').forEach(button => {
        button.addEventListener('click', (event) => {
            gameState.currentRule = event.target.dataset.rule;
            gameState.currentIndex = 0;
            gameState.currentPool = shuffleArray(gameData.grammar.tenses[gameState.currentRule].quizQuestions);
            renderGrammarConcept();
        });
    });
}

function renderGrammarConcept() {
    const rule = gameData.grammar.tenses[gameState.currentRule];
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>${gameState.currentRule}</h2>
            <p class="info-text">${rule.description}</p>
            <p class="info-text"><strong>Structure:</strong> <span class="example-sentence">${rule.structure}</span></p>
            <h3>Examples:</h3>
            ${rule.examples.map(ex => `
                <div class="explanation-box" style="margin-bottom: 0.5rem; ${ex.type === 'incorrect' ? 'border-color: var(--error-color);' : ''}">
                    <p>${ex.type === 'incorrect' ? '❌ Incorrect:' : '✅ Correct:'} <span class="example-sentence">${ex.sentence}</span></p>
                    <p><strong>Explanation:</strong> ${ex.explanation}</p>
                    ${ex.correct ? `<p><strong>Correct Form:</strong> <span class="example-sentence">${ex.correct}</span></p>` : ''}
                </div>
            `).join('')}
            <div class="text-center" style="margin-top: 1.5rem;">
                <button class="btn btn-success" onclick="startGrammarQuiz()">Start Quiz</button>
                <button class="btn btn-secondary" onclick="initGrammarGame()">Back to Grammar Topics</button>
            </div>
        </div>
    `;
    speakText(`${gameState.currentRule}. ${rule.description}`);
}

function startGrammarQuiz() {
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderGrammarQuestion();
}

function renderGrammarQuestion() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const questionData = gameState.currentPool[gameState.currentIndex];
    let questionHtml = '';

    if (questionData.type === "multiple-choice") {
        questionHtml = `
            <div class="question-box">${questionData.question}</div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${questionData.options.map(opt => `<button class="btn btn-block" data-answer="${opt.text}">${opt.text}</button>`).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
        `;
    } else if (questionData.type === "fill-in-blank") {
        const parts = questionData.question.split('______');
        questionHtml = `
            <div class="question-box">
                <p>${parts[0]} <input type="text" id="fillInBlankInput" class="fill-in-blank-input" placeholder="Type answer here"/> ${parts[1] || ''}</p>
            </div>
            <div class="text-center">
                <button class="btn btn-primary" onclick="checkFillInBlankAnswer('${questionData.correctAnswer}')">Check Answer</button>
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
        `;
    }

    elements.gameArea.innerHTML = `
        <div class="container">
            <h2>Grammar Quiz</h2>
            ${questionHtml}
            ${renderScoreAndButtons()}
        </div>
    `;

    if (questionData.type === "multiple-choice") {
        document.getElementById('optionsContainer').addEventListener('click', (event) => {
            if (event.target.classList.contains('btn-block')) {
                checkGrammarMultipleChoice(event.target.dataset.answer, questionData);
            }
        });
    }
    speakText(questionData.question);
}

function checkGrammarMultipleChoice(selectedAnswer, questionData) {
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('#optionsContainer .btn-block');
    const correctOption = questionData.options.find(opt => opt.correct);

    disableOptions();

    if (selectedAnswer === correctOption.text) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Great job!";
        gameState.score++;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Correct! Great job!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct answer was: "${correctOption.text}"`;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-incorrect');
            }
            if (btn.dataset.answer === correctOption.text) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Incorrect. Let's learn from this.");
    }
    showExplanation(correctOption.explanation);
    updateScoreDisplay();
    setTimeout(nextGrammarQuestion, 2000);
}

function checkFillInBlankAnswer(correctAnswer) {
    const inputElement = document.getElementById('fillInBlankInput');
    const userAnswer = inputElement.value.trim().toLowerCase();
    const feedbackElement = document.getElementById('feedback');
    const explanationElement = document.getElementById('explanation');

    inputElement.disabled = true; // Disable input after submission

    if (userAnswer === correctAnswer.toLowerCase()) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! You got it!";
        gameState.score++;
        inputElement.classList.add('btn-correct'); // Visual feedback on input
        speakText("Correct! You got it!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct answer was: "${correctAnswer}"`;
        inputElement.classList.add('btn-incorrect'); // Visual feedback on input
        speakText("Incorrect. Don't worry, keep practicing.");
    }
    showExplanation(gameState.currentPool[gameState.currentIndex].explanation);
    updateScoreDisplay();
    setTimeout(nextGrammarQuestion, 2000);
}

function nextGrammarQuestion() {
    gameState.currentIndex++;
    renderGrammarQuestion();
}

// --- Shadowing Practice ---
function initShadowingGame() {
    gameState.currentLevel = null;
    gameState.currentIndex = 0;
    renderShadowingMenu();
}

function renderShadowingMenu() {
    const levels = Object.keys(gameData.shadowing);
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Shadowing Practice: Choose a Level</h2>
            <div class="sub-menu-buttons">
                ${levels.map(level => `<button class="btn btn-primary sub-menu-btn" data-level="${level}">${level}</button>`).join('')}
            </div>
            <button class="btn btn-secondary" onclick="goHome()" style="margin-top: 1.5rem;">Back to Main Menu</button>
        </div>
    `;
    document.querySelectorAll('.sub-menu-buttons .btn').forEach(button => {
        button.addEventListener('click', (event) => {
            gameState.currentLevel = event.target.dataset.level;
            gameState.currentIndex = 0;
            gameState.currentPool = shuffleArray(gameData.shadowing[gameState.currentLevel]);
            renderShadowingSentence();
        });
    });
}

function renderShadowingSentence() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen(); // Re-use for end of shadowing
        return;
    }
    const currentSentence = gameState.currentPool[gameState.currentIndex];

    elements.gameArea.innerHTML = `
        <div class="container text-center">
            <h2>Shadowing Practice</h2>
            <div class="question-box" style="margin-bottom: 1rem;">
                <p>Listen and repeat:</p>
                <p class="example-sentence" style="font-size: 1.2rem;">"${currentSentence.sentence}"</p>
                <p style="font-size: 0.9rem; color: #666;">(${currentSentence.khmer})</p>
                ${currentSentence.explanation ? `<p class="explanation-box" style="margin-top: 1rem; font-size: 0.85rem;"><strong>Note:</strong> ${currentSentence.explanation}</p>` : ''}
            </div>
            <button class="btn btn-primary" onclick="speakText('${currentSentence.sentence}')">🔊 Play Sentence</button>
            
            <div class="speech-controls">
                <button id="recordButton" class="mic-button">🎤</button>
                <button id="stopRecordButton" class="mic-button" style="display: none; background-color: var(--error-color);">⏹</button>
            </div>
            <div id="recordingStatus" class="feedback feedback-info" style="margin-top: 0.5rem; font-size: 1rem;"></div>

            <div id="playbackControls" class="playback-controls" style="display: none;">
                <button class="btn btn-secondary" id="playRecordingButton">▶ Play My Recording</button>
            </div>

            <div id="recognitionFeedback" class="feedback" style="margin-top: 1rem;"></div>

            <div class="text-center" style="margin-top: 2rem;">
                <button class="btn btn-success" onclick="nextShadowingSentence()">Next Sentence</button>
                <button class="btn btn-secondary" onclick="initShadowingGame()">Back to Shadowing Levels</button>
            </div>
        </div>
    `;
    
    setupSpeechRecognition(currentSentence.sentence);
    setupAudioRecording();
    speakText(currentSentence.sentence); // Play sentence automatically
}

function setupSpeechRecognition(targetSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recordButton = document.getElementById('recordButton');
    const stopRecordButton = document.getElementById('stopRecordButton');
    const recognitionFeedback = document.getElementById('recognitionFeedback');
    const recordingStatus = document.getElementById('recordingStatus');

    if (!SpeechRecognition) {
        recognitionFeedback.textContent = "Speech Recognition not supported in this browser. Please use Chrome or Edge for this feature.";
        recordButton.disabled = true;
        return;
    }

    gameState.recognition = new SpeechRecognition();
    gameState.recognition.continuous = false; // Only get one result per recognition
    gameState.recognition.interimResults = false; // Don't show interim results
    gameState.recognition.lang = 'en-US';

    gameState.recognition.onstart = () => {
        recordingStatus.textContent = "Listening...";
        recordButton.style.display = 'none';
        stopRecordButton.style.display = 'inline-block';
        stopRecordButton.classList.add('recording');
        gameState.recognitionActive = true;
        recognitionFeedback.textContent = ''; // Clear previous feedback
    };

    gameState.recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        const targetLower = targetSentence.toLowerCase();
        let feedbackMessage = '';

        if (speechResult.includes(targetLower) || targetLower.includes(speechResult)) {
            feedbackMessage = "🥳 Great! Your pronunciation is clear.";
            recognitionFeedback.className = 'feedback feedback-success';
        } else {
            feedbackMessage = `🤔 You said: "${speechResult}". Try to match: "${targetSentence}"`;
            recognitionFeedback.className = 'feedback feedback-error';
        }
        recognitionFeedback.textContent = feedbackMessage;
        recordingStatus.textContent = "Stopped.";
    };

    gameState.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        recognitionFeedback.className = 'feedback feedback-error';
        recognitionFeedback.textContent = `Error during speech recognition: ${event.error}`;
        recordingStatus.textContent = "Stopped.";
        recordButton.style.display = 'inline-block';
        stopRecordButton.style.display = 'none';
        stopRecordButton.classList.remove('recording');
        gameState.recognitionActive = false;
    };

    gameState.recognition.onend = () => {
        recordingStatus.textContent = "Stopped.";
        recordButton.style.display = 'inline-block';
        stopRecordButton.style.display = 'none';
        stopRecordButton.classList.remove('recording');
        gameState.recognitionActive = false;
    };

    recordButton.onclick = () => {
        gameState.audioChunks = []; // Clear previous recording
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                gameState.audioRecorder = new MediaRecorder(stream);
                gameState.audioRecorder.start();
                gameState.recognition.start();

                gameState.audioRecorder.ondataavailable = event => {
                    gameState.audioChunks.push(event.data);
                };

                gameState.audioRecorder.onstop = () => {
                    const audioBlob = new Blob(gameState.audioChunks, { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const playbackControls = document.getElementById('playbackControls');
                    const playRecordingButton = document.getElementById('playRecordingButton');
                    
                    playbackControls.style.display = 'flex';
                    playRecordingButton.onclick = () => {
                        const recordedAudio = new Audio(audioUrl);
                        recordedAudio.play();
                    };
                    // Clean up stream tracks after recording stops
                    stream.getTracks().forEach(track => track.stop());
                };
            })
            .catch(e => {
                console.error('Error getting audio stream:', e);
                recordingStatus.textContent = "Failed to access microphone. Please allow microphone access.";
                recordButton.disabled = true;
            });
    };

    stopRecordButton.onclick = () => {
        if (gameState.recognitionActive) {
            gameState.recognition.stop();
            gameState.recognitionActive = false;
        }
        if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
            gameState.audioRecorder.stop();
        }
    };
}

function setupAudioRecording() {
    // This function is mainly for setting up the UI for recording,
    // the actual MediaRecorder logic is within setupSpeechRecognition for combined functionality.
    // Keeping it separate for clarity if you wanted purely audio recording later.
}

function nextShadowingSentence() {
    if (gameState.recognition && gameState.recognitionActive) {
        gameState.recognition.stop();
    }
    if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
        gameState.audioRecorder.stop();
    }
    gameState.audioChunks = []; // Clear recorded audio
    gameState.currentIndex++;
    renderShadowingSentence();
}

// --- Q&A Game (CSS, JS, PHP) ---
function initQnAGame(mode) {
    gameState.currentPool = shuffleArray(gameData[mode]);
    gameState.currentIndex = 0;
    gameState.score = 0;
    renderQnAGame();
}

function renderQnAGame() {
    if (gameState.currentIndex >= gameState.currentPool.length) {
        displayGameEndScreen();
        return;
    }
    const currentQuestion = gameState.currentPool[gameState.currentIndex];
//////////==================================
    elements.gameArea.innerHTML = `
        <div class="container">
            <h2 class="text-center">Q&A: ${gameState.mode.substring(3).toUpperCase()}</h2>
            <div class="question-box">
                <p>${currentQuestion.question}</p>
            </div>
            <div id="optionsContainer" class="sub-menu-buttons">
                ${currentQuestion.options.map(option => `<button class="btn btn-block" data-answer="${option}">${option}</button>`).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
            <div id="explanation" class="explanation-box" style="display: none;"></div>
            ${renderScoreAndButtons()}
        </div>
    `;

    document.getElementById('optionsContainer').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-block')) {
            checkQnAAnswer(event.target.dataset.answer, currentQuestion);
        }
    });
    speakText(currentQuestion.question);
}

function checkQnAAnswer(selectedAnswer, questionData) {
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('#optionsContainer .btn-block');

    disableOptions();

    if (selectedAnswer === questionData.correctAnswer) {
        feedbackElement.className = 'feedback feedback-success';
        feedbackElement.textContent = "🥳 Correct! Excellent!";
        gameState.score++;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Correct! Excellent!");
    } else {
        feedbackElement.className = 'feedback feedback-error';
        feedbackElement.textContent = `❌ Incorrect. The correct answer was: "${questionData.correctAnswer}"`;
        options.forEach(btn => {
            if (btn.dataset.answer === selectedAnswer) {
                btn.classList.add('btn-incorrect');
            }
            if (btn.dataset.answer === questionData.correctAnswer) {
                btn.classList.add('btn-correct');
            }
        });
        speakText("Incorrect. Let's review.");
    }
    showExplanation(questionData.explanation);
    updateScoreDisplay();
    setTimeout(nextQnAQuestion, 2000);
}

function nextQnAQuestion() {
    gameState.currentIndex++;
    renderQnAGame();
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', goHome); // Display home screen on load
