

// Game Data - Moved to separate object for better organization
const gameData = {
  vocab:    [
      
      
        { 
          word: "unordered list", 
          meaning: "Creates a list with bullet points, without order.", 
          khmer: "បញ្ជីដែលគ្មានលំដាប់ (បញ្ចូលជាចំណុច)", 
          audio: "audio/unordered list.mp3" 
        },
        { 
          word: "ordered (numbered) list", 
          meaning: "Creates a list with numbers or letters in a specific order.", 
          khmer: "បញ្ជីដែលមានលំដាប់ (ជាលេខឬអក្សរ)", 
          audio: "audio/ordered (numbered) list.mp3" 
        },
        { 
          word: "behave like", 
          meaning: "To act or function in a similar way to someone or something.", 
          khmer: "ប្រព្រឹត្តដូចជា", 
          audio: "audio/.mp3" 
        },
        { 
          word: "Block-level elements", 
          meaning: "HTML elements that start on a new line and take up full width.", 
          khmer: "ធាតុកម្រិតប្លុក (ចាប់ផ្តើមបន្ទាត់ថ្មី និងយកទទឹងទាំងមូល)", 
          audio: "audio/Block-level elements.mp3" 
        },
        { 
          word: "Inline elements", 
          meaning: "HTML elements that stay in the same line with surrounding content.", 
          khmer: "ធាតុជួរដេក (នៅជាមួយខ្លឹមសាររង)", 
          audio: "audio/Inline elements.mp3" 
        },
        { 
          word: "default", 
          meaning: "The original or automatic setting when no other is selected.", 
          khmer: "លំនាំដើម", 
          audio: "audio/default.mp3" 
        },
        { 
          word: "Default (preset setting)<br>✅ Example: This app uses the default language.<br>→ កម្មវិធីនេះប្រើភាសាលំនាំដើម។", 
          meaning: "Used in computers to mean the pre-selected or automatic setting.", 
          khmer: "ការកំណត់ស្វ័យប្រវត្តិ", 
          audio: "audio/Default (preset setting).mp3" 
        },
        { 
          word: "Default (failure to act, e.g., fail to pay a loan)<br>✅ Example: He was in default on his loan.<br>→ គាត់បានខកខានក្នុងការសងប្រាក់កម្ចី។", 
          meaning: "Failing to meet a responsibility, such as repaying a loan or appearing in court.", 
          khmer: "ការខកខានក្នុងការធ្វើនូវអ្វីមួយ", 
          audio: "audio/Default (failure to act, e.g., fail to pay a loan).mp3" 
        },
        
      
        {
          "word": "element",
          "meaning": "A building block of an HTML document, such as <p>, <div>, or <img>.",
          "khmer": "ធាតុមូលដ្ឋានក្នុងឯកសារ HTML",
          "audio": "audio/element.mp3"
        },
        {
          "word": "attribute",
          "meaning": "Provides additional information about an element, usually in the form of key-value pairs.",
          "khmer": "គុណលក្ខណៈសម្រាប់ធាតុ (ជាចំណុចបន្ថែម)",
          "audio": "audio/attribute.mp3"
        },
        {
          "word": "tag",
          "meaning": "Used to define an HTML element, such as <h1> or <a>.",
          "khmer": "ស្លាកប្រើសម្រាប់កំណត់ធាតុ HTML",
          "audio": "audio/tag.mp3"
        },
        {
          "word": "nested elements",
          "meaning": "Elements placed inside other elements.",
          "khmer": "ធាតុដែលដាក់នៅខាងក្នុងធាតុផ្សេងទៀត",
          "audio": "audio/nested elements.mp3"
        },
        {
          "word": "doctype",
          "meaning": "Declaration that defines the version of HTML used in the document.",
          "khmer": "ការបញ្ជាក់ពីប្រភេទឯកសារ HTML",
          "audio": "audio/doctype.mp3"
        },
        {
          "word": "self-closing tag",
          "meaning": "A tag that doesn’t need a closing tag, like <img> or <br>.",
          "khmer": "ស្លាកដែលមិនចាំបាច់មានការបិទ",
          "audio": "audio/self-closing tag.mp3"
        },
        {
          "word": "semantic tag",
          "meaning": "Tags that describe the meaning of the content, like <article>, <footer>, or <section>.",
          "khmer": "ស្លាកដែលមានអត្ថន័យច្បាស់លាស់",
          "audio": "audio/semantic tag.mp3"
        },
        {
          "word": "hyperlink",
          "meaning": "A link that connects one web page to another using the <a> tag.",
          "khmer": "តំណភ្ជាប់គេហទំព័រ",
          "audio": "audio/hyperlink.mp3"
        },
        {
          "word": "form",
          "meaning": "Used to collect user input, such as text, checkboxes, and buttons.",
          "khmer": "សំណុំបែបបទសម្រាប់ទទួលពត៌មានពីអ្នកប្រើ",
          "audio": "audio/form.mp3"
        },
        {
          "word": "input",
          "meaning": "An element inside a form used to accept data from the user.",
          "khmer": "វាលបញ្ចូលព័ត៌មាន",
          "audio": "audio/input.mp3"
        },
              
        {
          word: "border",
          meaning: "The outer edge or boundary of an element.",
          khmer: "ស៊ុម",
          audio: "audio/border.mp3"  // Suggest recording with “border” pronunciation
        },
        {
          word: "appears",
          meaning: "Becomes visible or can be seen.",
          khmer: "បង្ហាញ",
          audio: "audio/appears.mp3"  // Suggest TTS: “uh-PEERS”
        },
        {
          word: "caption",
          meaning: "A short title or explanation for an image, table, or figure.",
          khmer: "ចំណងជើងពន្យល់",
          audio: "audio/caption.mp3"  // TTS: “KAP-shun”
        },
        {
          word: "form",
          meaning: "An HTML element used to collect user input.",
          khmer: "សំណុំបែបបទ",
          audio: "audio/form.mp3"  // TTS: “form”
        },
        {
          word: "improves",
          meaning: "Makes something better or more effective.",
          khmer: "ធ្វើឲ្យប្រសើរឡើង",
          audio: "audio/improves.mp3"  // TTS: “im-PROOVZ”
        },
        {
          word: "organization",
          meaning: "The structure or arrangement of things.",
          khmer: "ការរៀបចំ",
          audio: "audio/organization.mp3"  // TTS: "or-guh-ni-ZAY-shun"
        },
        {
          word: "accessibility",
          meaning: "The ability for people (especially with disabilities) to access content or services.",
          khmer: "ភាពងាយស្រួលក្នុងការចូលប្រើ",
          audio: "audio/accessibility.mp3"  // Cambridge Dictionary pronunciation :contentReference[oaicite:1]{index=1}
        },
      
          { 
          word: "tag", 
          meaning: "A keyword used to define elements in HTML.", 
          khmer: "ស្លាក", 
          audio: "audio/tag.mp3" 
        },
        { 
          word: "attribute", 
          meaning: "Additional information provided in a tag, such as id, class, or href.", 
          khmer: "គុណលក្ខណៈ", 
          audio: "audio/attribute.mp3" 
        },
        { 
          word: "syntax", 
          meaning: "The rules for how HTML code is written and structured.", 
          khmer: "វាក្យសម្ពន្ធ", 
          audio: "audio/syntax.mp3" 
        },
        { 
          word: "element", 
          meaning: "An individual component of HTML, defined by a tag and its content.", 
          khmer: "ធាតុ", 
          audio: "audio/element.mp3" 
        },
        { 
          word: "heading", 
          meaning: "A title or subtitle defined using <h1> to <h6> tags.", 
          khmer: "ចំណងជើង", 
          audio: "audio/heading.mp3" 
        },
        { 
          word: "paragraph", 
          meaning: "A block of text defined using the <p> tag.", 
          khmer: "កថាខណ្ឌ", 
          audio: "audio/paragraph.mp3" 
        },
        { 
          word: "break", 
          meaning: "An empty element used to insert a line break (<br>).", 
          khmer: "ចុះបន្ទាត់ថ្មី", 
          audio: "audio/break.mp3" 
        },
        { 
          word: "link", 
          meaning: "A clickable connection to another page or resource.", 
          khmer: "តំណភ្ជាប់", 
          audio: "audio/link.mp3" 
        },
        { 
          word: "image", 
          meaning: "A visual element displayed using the <img> tag.", 
          khmer: "រូបភាព", 
          audio: "audio/image.mp3" 
        },
        { 
          word: "container", 
          meaning: "An element used to hold and group other elements together.", 
          khmer: "ធាតុផ្ទុក", 
          audio: "audio/container.mp3" 
        },
       {
          word: "border",
          meaning: "The outer edge or boundary of an element.",
          khmer: "ស៊ុម",
          audio: "audio/border.mp3"  // Suggest recording with “border” pronunciation
        },
        {
          word: "appears",
          meaning: "Becomes visible or can be seen.",
          khmer: "បង្ហាញ",
          audio: "audio/appears.mp3"  // Suggest TTS: “uh-PEERS”
        },
        {
          word: "caption",
          meaning: "A short title or explanation for an image, table, or figure.",
          khmer: "ចំណងជើងពន្យល់",
          audio: "audio/caption.mp3"  // TTS: “KAP-shun”
        },
        {
          word: "form",
          meaning: "An HTML element used to collect user input.",
          khmer: "សំណុំបែបបទ",
          audio: "audio/form.mp3"  // TTS: “form”
        },
        {
          word: "improves",
          meaning: "Makes something better or more effective.",
          khmer: "ធ្វើឲ្យប្រសើរឡើង",
          audio: "audio/improves.mp3"  // TTS: “im-PROOVZ”
        },
        {
          word: "organization",
          meaning: "The structure or arrangement of things.",
          khmer: "ការរៀបចំ",
          audio: "audio/organization.mp3"  // TTS: "or-guh-ni-ZAY-shun"
        },
        {
          word: "accessibility",
          meaning: "The ability for people (especially with disabilities) to access content or services.",
          khmer: "ភាពងាយស្រួលក្នុងការចូលប្រើ",
          audio: "audio/accessibility.mp3"  // Cambridge Dictionary pronunciation :contentReference[oaicite:1]{index=1}
        },
          // HTML
        { 
          word: "doctype", 
          meaning: "Declaration that tells the browser what version of HTML the page uses.", 
          khmer: "សេចក្ដីប្រកាសប្រភេទឯកសារ", 
          audio: "audio/doctype.mp3" 
        },
        { 
          word: "anchor", 
          meaning: "An <a> tag used to create hyperlinks.", 
          khmer: "តំណភ្ជាប់", 
          audio: "audio/anchor.mp3" 
        },
        { 
          word: "metadata", 
          meaning: "Data about the page (title, description, charset) stored in <head>.", 
          khmer: "ទិន្នន័យអំពីទំព័រ", 
          audio: "audio/metadata.mp3" 
        },
      
        // CSS
        { 
          word: "selector", 
          meaning: "The part of a CSS rule that selects which HTML elements to style.", 
          khmer: "ឧបករណ៍ជ្រើសរើស", 
          audio: "audio/selector.mp3" 
        },
        { 
          word: "property", 
          meaning: "A style characteristic like color, width, font-size.", 
          khmer: "លក្ខណៈសម្បត្តិ", 
          audio: "audio/property.mp3" 
        },
        { 
          word: "value", 
          meaning: "The setting given to a CSS property.", 
          khmer: "តម្លៃ", 
          audio: "audio/value.mp3" 
        },
        { 
          word: "padding", 
          meaning: "Space between content and border of an element.", 
          khmer: "ចន្លោះខាងក្នុង", 
          audio: "audio/padding.mp3" 
        },
        { 
          word: "margin", 
          meaning: "Space outside the border of an element.", 
          khmer: "ចន្លោះខាងក្រៅ", 
          audio: "audio/margin.mp3" 
        },
        { 
          word: "responsive", 
          meaning: "Design that adapts to different screen sizes.", 
          khmer: "ឆបគ្នាទៅនឹងទំហំអេក្រង់", 
          audio: "audio/responsive.mp3" 
        },
      
        // JavaScript
        { 
          word: "function", 
          meaning: "A reusable block of code that performs a task.", 
          khmer: "អនុគមន៍", 
          audio: "audio/function.mp3" 
        },
        { 
          word: "variable", 
          meaning: "A container for storing data.", 
          khmer: "អថេរ", 
          audio: "audio/variable.mp3" 
        },
        { 
          word: "event", 
          meaning: "An action like a click, hover, or keypress.", 
          khmer: "ព្រឹត្តិការណ៍", 
          audio: "audio/event.mp3" 
        },
        { 
          word: "loop", 
          meaning: "A programming structure that repeats actions.", 
          khmer: "រង្វិលជុំ", 
          audio: "audio/loop.mp3" 
        },
        { 
          word: "condition", 
          meaning: "A decision-making expression that executes based on true/false.", 
          khmer: "លក្ខខណ្ឌ", 
          audio: "audio/condition.mp3" 
        },
      // More HTML words
        {
          word: "attribute",
          meaning: "Provides additional information about an HTML element.",
          khmer: "គុណលក្ខណៈ",
          audio: "audio/attribute.mp3"
        },
        {
          word: "input",
          meaning: "An HTML element used to collect user data (text, checkbox, etc.).",
          khmer: "វាលបញ្ចូល",
          audio: "audio/input.mp3"
        },
        {
          word: "label",
          meaning: "Describes an input field and is associated with it.",
          khmer: "ស្លាក",
          audio: "audio/label.mp3"
        },
        {
          word: "textarea",
          meaning: "An input field that allows multiline text entry.",
          khmer: "វាលបញ្ចូលច្រើនបន្ទាត់",
          audio: "audio/textarea.mp3"
        },
        {
          word: "submit",
          meaning: "A button that sends form data to a server.",
          khmer: "បញ្ជូន",
          audio: "audio/submit.mp3"
        },
      
        // More CSS words
        {
          word: "font-family",
          meaning: "Sets the font type used for text.",
          khmer: "គ្រួសារ​អក្សរ",
          audio: "audio/font-family.mp3"
        },
        {
          word: "font-size",
          meaning: "Specifies the size of text.",
          khmer: "ទំហំអក្សរ",
          audio: "audio/font-size.mp3"
        },
        {
          word: "color",
          meaning: "Sets the color of text.",
          khmer: "ពណ៌",
          audio: "audio/color.mp3"
        },
        {
          word: "background-color",
          meaning: "Sets the background color of an element.",
          khmer: "ពណ៌ផ្ទៃខាងក្រោយ",
          audio: "audio/background-color.mp3"
        },
        {
          word: "display",
          meaning: "Controls the layout behavior of an element (block, inline, flex, etc.).",
          khmer: "ការបង្ហាញ",
          audio: "audio/display.mp3"
        },
      
        // More JavaScript words
        {
          word: "array",
          meaning: "A list-like object used to store multiple values.",
          khmer: "អារេ",
          audio: "audio/array.mp3"
        },
        {
          word: "object",
          meaning: "A collection of related data and functions.",
          khmer: "វត្ថុ",
          audio: "audio/object.mp3"
        },
        {
          word: "DOM",
          meaning: "Document Object Model – represents the structure of an HTML page.",
          khmer: "គំរូវត្ថុឯកសារ (DOM)",
          audio: "audio/dom.mp3"
        },
        {
          word: "console.log",
          meaning: "A method used to print messages in the browser console for debugging.",
          khmer: "បញ្ជាក់សារ​ក្នុង​កុងសូល",
          audio: "audio/console-log.mp3"
        },
        {
          word: "alert",
          meaning: "Displays a popup box with a message.",
          khmer: "បង្ហាញប្រអប់ជូនដំណឹង",
          audio: "audio/alert.mp3"
        },
      //css property
              {
          word: "margin",
          meaning: "Defines the space outside the border of an element.",
          khmer: "ចន្លោះខាងក្រៅ",
          audio: "audio/margin.mp3"
        },
        {
          word: "padding",
          meaning: "Defines the space between the content and the border of an element.",
          khmer: "ចន្លោះខាងក្នុង",
          audio: "audio/padding.mp3"
        },
        {
          word: "border",
          meaning: "Defines the line surrounding an element.",
          khmer: "ស៊ុម",
          audio: "audio/border.mp3"
        },
        {
          word: "width",
          meaning: "Specifies how wide an element is.",
          khmer: "ទទឹង",
          audio: "audio/width.mp3"
        },
        {
          word: "height",
          meaning: "Specifies how tall an element is.",
          khmer: "កម្ពស់",
          audio: "audio/height.mp3"
        },
        {
          word: "text-align",
          meaning: "Controls the horizontal alignment of text (left, center, right).",
          khmer: "ការរៀបចំអក្សរតាមបញ្ឈរ",
          audio: "audio/text-align.mp3"
        },
        {
          word: "line-height",
          meaning: "Sets the amount of space between lines of text.",
          khmer: "កម្ពស់ជួរអក្សរ",
          audio: "audio/line-height.mp3"
        },
        {
          word: "overflow",
          meaning: "Specifies what happens when content overflows an element’s box.",
          khmer: "ការរអិលចេញក្រៅប្រអប់",
          audio: "audio/overflow.mp3"
        },
        {
          word: "visibility",
          meaning: "Determines if an element is visible or hidden without affecting layout.",
          khmer: "ភាពអាចមើលឃើញ",
          audio: "audio/visibility.mp3"
        },
        {
          word: "z-index",
          meaning: "Controls the vertical stacking order of elements (which appears on top).",
          khmer: "លំដាប់បង្ហាញជាន់ខ្ពស់",
          audio: "audio/z-index.mp3"
        },
        {
          word: "opacity",
          meaning: "Sets how transparent an element is.",
          khmer: "ភាពស្រអាប់",
          audio: "audio/opacity.mp3"
        },
        {
          word: "position",
          meaning: "Specifies the type of positioning method used for an element (static, relative, absolute, fixed, sticky).",
          khmer: "ទីតាំង",
          audio: "audio/position.mp3"
        },
        {
          word: "flexbox",
          meaning: "A layout mode in CSS used to align and distribute space among items in a container.",
          khmer: "រចនាប្លង់បែបបត់បែន (Flexbox)",
          audio: "audio/flexbox.mp3"
        },
        {
          word: "grid",
          meaning: "A layout system for arranging items into rows and columns.",
          khmer: "បណ្តាញប្លង់",
          audio: "audio/grid.mp3"
        },
        {
          word: "box-shadow",
          meaning: "Applies shadow effects around an element’s frame.",
          khmer: "ស្រមោលប្រអប់",
          audio: "audio/box-shadow.mp3"
        },
        {
          word: "transition",
          meaning: "Controls the speed of animation between property changes.",
          khmer: "ការផ្លាស់ប្ដូរយឺតៗ",
          audio: "audio/transition.mp3"
        },
        {
          word: "transform",
          meaning: "Applies 2D or 3D transformations to an element (e.g., rotate, scale).",
          khmer: "ការបម្លែង",
          audio: "audio/transform.mp3"
        },
        {
          word: "cursor",
          meaning: "Changes the type of cursor shown when the mouse is over an element.",
          khmer: "គ្រាប់ទស្សន៍",
          audio: "audio/cursor.mp3"
        },
        {
          word: "variable",
          meaning: "A container for storing data values.",
          khmer: "អថេរ",
          audio: "audio/variable.mp3"
        },
        {
          word: "function",
          meaning: "A block of code designed to perform a particular task.",
          khmer: "មុខងារ",
          audio: "audio/function.mp3"
        },
        {
          word: "parameter",
          meaning: "A value passed into a function to customize its behavior.",
          khmer: "ប៉ារ៉ាម៉ែត្រ",
          audio: "audio/parameter.mp3"
        },
        {
          word: "argument",
          meaning: "The actual value passed to a function parameter.",
          khmer: "អាគ្យូម៉ង់",
          audio: "audio/argument.mp3"
        },
        {
          word: "return",
          meaning: "Ends function execution and specifies a value to be returned.",
          khmer: "ត្រឡប់តម្លៃ",
          audio: "audio/return.mp3"
        },
        {
          word: "array",
          meaning: "An ordered collection of values.",
          khmer: "អារេ",
          audio: "audio/array.mp3"
        },
        {
          word: "object",
          meaning: "A collection of key-value pairs used to store structured data.",
          khmer: "វត្ថុ",
          audio: "audio/object.mp3"
        },
        {
          word: "loop",
          meaning: "A control structure used to repeat a block of code.",
          khmer: "រង្វិលជុំ",
          audio: "audio/loop.mp3"
        },
        {
          word: "condition",
          meaning: "A statement that controls code execution based on true or false.",
          khmer: "លក្ខខណ្ឌ",
          audio: "audio/condition.mp3"
        },
        {
          word: "boolean",
          meaning: "A data type with only two values: true or false.",
          khmer: "តម្លៃប៊ូលីន",
          audio: "audio/boolean.mp3"
        },
        {
          word: "string",
          meaning: "A sequence of characters used to represent text.",
          khmer: "ខ្សែអក្សរ",
          audio: "audio/string.mp3"
        },
        {
          word: "number",
          meaning: "A data type used to represent numeric values.",
          khmer: "លេខ",
          audio: "audio/number.mp3"
        },
        {
          word: "undefined",
          meaning: "A variable that has been declared but not assigned a value.",
          khmer: "មិនបានកំណត់",
          audio: "audio/undefined.mp3"
        },
        {
          word: "null",
          meaning: "Represents an intentional absence of any value or object.",
          khmer: "គ្មានតម្លៃ",
          audio: "audio/null.mp3"
        },
        {
          word: "event",
          meaning: "An action that occurs in the browser (like a click or keypress).",
          khmer: "ព្រឹត្តិការណ៍",
          audio: "audio/event.mp3"
        },
        {
          word: "DOM",
          meaning: "The Document Object Model — a tree structure representing HTML elements.",
          khmer: "គំរូវត្ថុឯកសារ (DOM)",
          audio: "audio/dom.mp3"
        },
        {
          word: "console",
          meaning: "A tool used to display messages for debugging.",
          khmer: "កុងសូល",
          audio: "audio/console.mp3"
        },
        {
          word: "debug",
          meaning: "To find and fix errors in code.",
          khmer: "ស្វែងរក និងជួសជុលកំហុស",
          audio: "audio/debug.mp3"
        },
        {
          word: "syntax",
          meaning: "The rules that define the structure of code.",
          khmer: "វាក្យសម្ពន្ធ",
          audio: "audio/syntax.mp3"
        },
      {
          word: "margin",
          meaning: "The space outside the border of an element.",
          khmer: "ចន្លោះខាងក្រៅ",
          audio: "audio/margin.mp3"
        },
        {
          word: "padding",
          meaning: "The space between the content and the border of an element.",
          khmer: "ចន្លោះខាងក្នុង",
          audio: "audio/padding.mp3"
        },
        {
          word: "border-radius",
          meaning: "Defines the roundness of element corners.",
          khmer: "ខ្នាតមូលនៃជ្រុង",
          audio: "audio/border-radius.mp3"
        },
        {
          word: "box-shadow",
          meaning: "Adds shadow effects to an element.",
          khmer: "ស្រមោលប្រអប់",
          audio: "audio/box-shadow.mp3"
        },
        {
          word: "display",
          meaning: "Specifies how an element is displayed on the page.",
          khmer: "បង្ហាញលើទំព័រ",
          audio: "audio/display.mp3"
        },
        {
          word: "position",
          meaning: "Specifies the type of positioning method used for an element.",
          khmer: "ទីតាំង",
          audio: "audio/position.mp3"
        },
        {
          word: "z-index",
          meaning: "Controls the vertical stacking order of elements.",
          khmer: "លំដាប់ស្រទាប់",
          audio: "audio/z-index.mp3"
        },
        {
          word: "flex",
          meaning: "A layout model for flexible and responsive elements.",
          khmer: "ប្លង់បត់បែន",
          audio: "audio/flex.mp3"
        },
        {
          word: "grid",
          meaning: "A layout system using rows and columns.",
          khmer: "ប្លង់ក្រឡា",
          audio: "audio/grid.mp3"
        },
        {
          word: "opacity",
          meaning: "Defines the transparency level of an element.",
          khmer: "ភាពស្រអាប់",
          audio: "audio/opacity.mp3"
        },
          {
          word: "callback",
          meaning: "A function passed into another function to be called later.",
          khmer: "មុខងារហៅត្រឡប់",
          audio: "audio/callback.mp3"
        },
        {
          word: "promise",
          meaning: "An object that represents the eventual result of an asynchronous operation.",
          khmer: "ពាក្យសន្យា (សម្រាប់ async)",
          audio: "audio/promise.mp3"
        },
        {
          word: "async",
          meaning: "Keyword that makes a function return a promise and allows use of await.",
          khmer: "មុខងារផ្នែកក្រោយ asynchronous",
          audio: "audio/async.mp3"
        },
        {
          word: "await",
          meaning: "Used to wait for a promise to resolve inside an async function.",
          khmer: "រងចាំការជួយផ្តល់តម្លៃ async",
          audio: "audio/await.mp3"
        },
        {
          word: "event loop",
          meaning: "A mechanism that handles asynchronous callbacks in JavaScript.",
          khmer: "រង្វិលព្រឹត្តិការណ៍",
          audio: "audio/event-loop.mp3"
        },
        {
          word: "closure",
          meaning: "A function that remembers the variables from its outer scope.",
          khmer: "បិទវដ្តអថេរខាងក្រៅ",
          audio: "audio/closure.mp3"
        },
        {
          word: "hoisting",
          meaning: "JavaScript's behavior of moving declarations to the top of the scope.",
          khmer: "លេចឡើងខាងលើ",
          audio: "audio/hoisting.mp3"
        },
        {
          word: "scope",
          meaning: "The accessibility of variables and functions in different parts of code.",
          khmer: "វិសាលភាព",
          audio: "audio/scope.mp3"
        },
        {
          word: "this",
          meaning: "Refers to the current object in context.",
          khmer: "តំណាងអ្វីដែលកំពុងត្រូវយោង",
          audio: "audio/this.mp3"
        },
        {
          word: "arrow function",
          meaning: "A shorter way to write functions using `=>` syntax.",
          khmer: "មុខងារមានសញ្ញាព្រិល (=>)",
          audio: "audio/arrow-function.mp3"
        },      

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
          { sentence: "Block-level elements are elements that occupy the full width of their container and always start on a new line in the document.", khmer: "" },
          { sentence: "Inline elements are elements that do not start on a new line and only take up as much width as necessary. They flow alongside other inline elements within the same block-level parent. ", khmer: "" },                       
          { sentence: "&lt;div&gt; is a block-level element, which means it starts on a new line and takes up the full width of its parent container by default. &lt;span&gt; is an inline-level element, so it only takes up as much width as its content requires and does not break to a new line. Both are commonly used for grouping elements for styling with CSS.", khmer: "" },
          { sentence: "Images are embedded using the &lt;img&gt; tag. The src attribute defines the path to the image file, and alt provides alternative text. ", khmer: "Using the &lt;img&gt; tag with a src attribute pointing to the image URL." },
          { sentence: " The 'action' attribute defines the server URL where form data should be sent. The 'method' attribute specifies how to send the data — commonly using 'GET' or 'POST'.", khmer: "To specify where and how to send the form data when submitted." },                         
          { sentence: "🔗target=_blank (Opens the link in a new tab or window.):✅ You want the user to open a link without leaving your site. ", khmer: "🔍Keeps your website open in the user's tab<br>🔍 Common for external links." },
          { sentence: "🔗target=_self :(Opens the link in the same tab (this is the default)).✅ You’re linking to another page within your site and don’t want to open a new tab", khmer: "🔍Keeps the browsing flow smooth.<br>🔍Ideal for internal navigation." },
          { sentence: "🔗target=_top: (Opens the link in the full body of the window, replacing any nested frames). ✅You're using frames (very rare now) or an embedded environment like an iframe, and want to break out and load in the main window.", khmer: "🔍Useful in iframes when you want to escape the frame and load the page in the top-level browser window." }, 
          { sentence: "🔗target=_parent (Opens the link in the immediate parent frame of the current one.) ✅You are inside a nested frame and want the link to open in the direct parent of that frame.", khmer: "🔍Rarely used, mostly in legacy frame-based layouts." },
          { sentence: "🔗 _blank	✅Open in 🔍New tab/window 	✅Common use case🔍 External links", khmer: "" },
          { sentence: "🔗_self	✅Open in🔍Same tab (default)	✅Common use case🔍Internal page navigation ", khmer: "" },
          { sentence: "🔗_top	✅Open in 🔍Top-most frame	✅Common use case🔍Escape iframe/frame to full window", khmer: "" },
          { sentence: "🔗_parent	✅Open in 🔍Immediate parent frame	✅Common use case🔍Open link in direct parent frame ", khmer: "" },
          { sentence: "🧱 A form in HTML is used to collect user input and send it to a server for processing (like logging in, signing up, or submitting a comment). ", khmer: "" },
          { sentence: "🧱Key Form Components: Tag form Purpose Wraps the entire form; defines where data goes (action) and how (method). ", khmer: "" },
          { sentence: "🧱Key Form Components: Tag input PurposeAccepts text, passwords, checkboxes, emails, etc. ", khmer: "" },
          { sentence: "🧱 Key Form Components Tag label	Purpose Describes each input ( ", khmer: "" }, 
          { sentence: "Name at least 5 types of type input fields: text, password, email, checkbox, submit ", khmer: " &lt;input type='text'&gt;,  &lt;input type='password'&gt;,  &lt;input type='email'&gt;,  &lt;input type='checkbox'&gt;,  &lt;input type='submit'&gt;,  &lt;input type='number'&gt;,  &lt;input type='date'&gt;, " },
          { sentence: " The <fieldset> and <legend> elements in HTML are used to group related form elements together in a structured and accessible way.", khmer: "" },
          { sentence: "✅  &lt;fieldset&gt; tag is used to group form controls(like input, selects, etc.) into a section. ", khmer: "Visually(Visual Clarity: Groups related inputs under a common title.) adds a box (border) around grouped elements.<br>Improves form organization(Structure: Helps organize long or complex forms.) and accessibility(Screen readers recognize field groups.)" },
          { sentence: "✅  &lt;legend&gt; tag defines a caption or title for the  &lt;fieldset&gt;. It usually appears at the top of the fieldset border.", khmer: "" },
          { sentence: "✅  &lt;section&gt represents a standalone block of content with a specific topic or purpose, and it typically has a heading.", khmer: "" }, 
          { sentence: " The &lt;section&gt; tag adds meaning (semantics) to your HTML by representing a defined block of content. &lt;div&gt; is purely structural with no implied meaning, used mainly for styling or grouping.", khmer: "What is the difference between &lt;section&gt; and &lt;div&gt; in HTML?" },
          { sentence: " &lt;section&gt; is semantic and indicates a block of related content, while &lt;div&gt; is a generic container with no meaning", khmer: "What is the difference between &lt;section&gt; and &lt;div&gt; in HTML?" },
          { sentence: "The &lt;section&gt; tag represents a standalone section of content, usually with its own heading, such as a chapter, tab, or part of a page. ", khmer: "What is the &lt;section&gt; tag used for in HTML?" },
          { sentence: "To define standalone blocks of content with a specific theme or purpose. ", khmer: "What is the &lt;section&gt; tag used for in HTML?" },
          
          { sentence: "What happens when you place two &lt;div&gt; elements next to each other in HTML?", khmer: "They stack vertically because &lt;div&gt; is a block-level element." },
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
      },
      {
        question: "What are the different types of selectors in CSS?",
        options: [
          "Element, ID, Class, Universal, Grouping, Attribute",
          "HTML, Body, JavaScript, Python, PHP",
          "Button, Input, Submit, Reset, Label",
          "Padding, Margin, Border, Font, Display"
        ],
        correctAnswer: "Element, ID, Class, Universal, Grouping, Attribute",
        explanation: "CSS provides several types of selectors to target HTML elements: Element selector (e.g., `h1`), ID selector (e.g., `#header`), Class selector (e.g., `.menu`), Universal selector (`*`), Grouping selector (`h1, h2`), and Attribute selector (`input[type='text']`)."
      },
      {
            question: "What are the common types of selectors in CSS?",
            options: [
              "Tag selector, Class selector, ID selector",
              "Function selector, Method selector, Object selector",
              "Click selector, Hover selector, Key selector",
              "Header selector, Footer selector, Body selector"
            ],
            correctAnswer: "Tag selector, Class selector, ID selector",
            explanation: "The most common CSS selectors are: Tag selector (targets HTML tags like `p`, `h1`), Class selector (targets elements with a class using `.` like `.menu`), and ID selector (targets a unique element with `#` like `#header`)."
      },
      {
            question: "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
            options: [
              "They are all used to hide elements on scroll.",
              "They control how elements behave in CSS Grid.",
              "They determine how an element is positioned relative to its normal position or other elements.",
              "They are types of animations applied to elements."
            ],
            correctAnswer: "They determine how an element is positioned relative to its normal position or other elements.",
            explanation: "CSS position values like `relative`, `absolute`, `fixed`, and `sticky` control how an element is positioned. `relative` moves from its normal position, `absolute` positions relative to the nearest positioned ancestor, `fixed` stays in place relative to the viewport, and `sticky` sticks to a position based on scroll."
          },
      {
        question: "What does the CSS 'position' property do?",
        options: [
          "It sets the background color of an element.",
          "It controls the visibility of an element.",
          "It determines how an element is positioned on the page.",
          "It adjusts the size of an element."
        ],
        correctAnswer: "It determines how an element is positioned on the page.",
        explanation: "The `position` property in CSS specifies how an element is positioned in the document—whether it's static, relative, absolute, fixed, or sticky."
      },
      {
        question: "What does 'position: relative' do in CSS?",
        options: [
          "Positions the element at the bottom of the page.",
          "Makes the element invisible.",
          "Positions the element relative to its normal position.",
          "Positions the element based on the viewport."
        ],
        correctAnswer: "Positions the element relative to its normal position.",
        explanation: "`relative` positioning means the element is moved relative to where it would normally be in the document flow."
      },
      {
        question: "What is the effect of 'position: absolute' in CSS?",
        options: [
          "It fixes the element to the top of the page.",
          "It removes the element from the normal flow and positions it relative to its closest positioned ancestor.",
          "It causes the element to disappear.",
          "It makes the element scroll with the page."
        ],
        correctAnswer: "It removes the element from the normal flow and positions it relative to its closest positioned ancestor.",
        explanation: "`absolute` positioning removes the element from the flow and positions it according to the nearest ancestor with a `position` other than `static`."
      },
      {
        question: "What does 'position: fixed' do in CSS?",
        options: [
          "It locks the element inside its parent container.",
          "It makes the element move with the page.",
          "It positions the element relative to the viewport and keeps it fixed during scrolling.",
          "It centers the element horizontally."
        ],
        correctAnswer: "It positions the element relative to the viewport and keeps it fixed during scrolling.",
        explanation: "`fixed` positioning locks an element to a specific location on the screen, and it stays there even when the page scrolls."
      },
      {
        question: "How does 'position: sticky' behave in CSS?",
        options: [
          "The element stays hidden until clicked.",
          "It behaves like `fixed` positioning permanently.",
          "It toggles between `relative` and `fixed` based on scroll position.",
          "It pushes other elements out of view."
        ],
        correctAnswer: "It toggles between `relative` and `fixed` based on scroll position.",
        explanation: "`sticky` positioning keeps the element in its normal flow until a scroll threshold is reached, then it sticks to a position like `fixed`."
      },
      {
        question: "Which CSS position type should you use to create a sticky navigation bar that stays at the top after scrolling?",
        options: [
          "relative",
          "absolute",
          "sticky",
          "fixed"
        ],
        correctAnswer: "sticky",
        explanation: "`position: sticky` allows a navbar to scroll normally until it reaches a certain point, after which it sticks to that position."
      },
      {
        question: "Which position should you use to place a tooltip relative to a button element?",
        options: [
          "fixed",
          "absolute",
          "static",
          "sticky"
        ],
        correctAnswer: "absolute",
        explanation: "`position: absolute` allows the tooltip to appear near the button by positioning it relative to the nearest non-static ancestor (usually the button’s container)."
      },
      {
        question: "You want to place a button at the bottom-right corner of the viewport. Which CSS position is best?",
        options: [
          "relative",
          "fixed",
          "static",
          "sticky"
        ],
        correctAnswer: "fixed",
        explanation: "`position: fixed` is perfect for placing elements like floating action buttons that should remain in place even when scrolling."
      },
      {
        question: "In the following code, where will the red box appear?\n\n.container {\n  position: relative;\n}\n.box {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}",
        options: [
          "10px from the browser’s top-left corner",
          "10px from the page's scroll position",
          "10px from the closest positioned ancestor ('.container')",
          "Centered on the page"
        ],
        correctAnswer: "10px from the closest positioned ancestor ('.container')",
        explanation: "`absolute` positioning is relative to the nearest ancestor with a `position` value other than `static`. Here, `.container` is `relative`."
      },
     {
        question: "When no `position` is specified for an element in CSS, what is its default behavior?",
        options: [
          "relative",
          "absolute",
          "static",
          "fixed"
        ],
        correctAnswer: "static",
        explanation: "By default, all elements have `position: static`, which means they appear in the normal flow of the document without any special positioning."
      },
      {
          question: "What is Flexbox used for in CSS?",
          options: [
            "Creating 3D animations",
            "Styling fonts and colors",
            "Creating responsive layouts with flexible boxes",
            "Adding interactivity to HTML elements"
          ],
          correctAnswer: "Creating responsive layouts with flexible boxes",
          explanation: "Flexbox (Flexible Box Layout) is used to design one-dimensional layouts that adjust items in rows or columns."
        },
        {
          question: "Which CSS property enables Flexbox on a container?",
          options: [
            "position: flex;",
            "display: flex;",
            "flex: enable;",
            "layout: flex;"
          ],
          correctAnswer: "display: flex;",
          explanation: "Setting `display: flex;` on a container turns it into a Flexbox container, allowing its children to be flex items."
        },
        {
          question: "What does justify-content: center; do in a Flexbox container?",
          options: [
            "Aligns items to the top",
            "Centers items horizontally",
            "Moves items to the right",
            "Stacks items vertically"
          ],
          correctAnswer: "Centers items horizontally",
          explanation: "`justify-content: center;` horizontally centers the flex items within the container."
        },
        {
          question: "How is CSS Grid different from Flexbox?",
          options: [
            "Grid is for animations, Flexbox is not",
            "Grid is for two-dimensional layouts, Flexbox is for one-dimensional layouts",
            "Grid only works on images, Flexbox only works on text",
            "Grid requires JavaScript to work"
          ],
          correctAnswer: "Grid is for two-dimensional layouts, Flexbox is for one-dimensional layouts",
          explanation: "CSS Grid is designed for both rows and columns (2D), while Flexbox handles either rows or columns (1D) but not both at once."
        },
        {
          question: "Which CSS property activates Grid layout?",
          options: [
            "display: grid;",
            "grid: true;",
            "layout: grid;",
            "position: grid;"
          ],
          correctAnswer: "display: grid;",
          explanation: "To use CSS Grid, you set `display: grid;` on the container."
        },
        {
          question: "What does the media query @media (max-width: 768px) do?",
          options: [
            "Applies styles when the screen is at least 768px wide",
            "Applies styles only on desktop devices",
            "Applies styles when the screen width is 768px or less",
            "Disables styles on mobile devices"
          ],
          correctAnswer: "Applies styles when the screen width is 768px or less",
          explanation: "`@media (max-width: 768px)` is used for responsive design. It triggers styles for devices smaller than or equal to 768 pixels wide."
        },
        {
          question: "Why is Flexbox better than floats for layout?",
          options: [
            "Because it uses JavaScript",
            "Because it automatically wraps text",
            "Because it provides alignment and distribution tools",
            "Because it removes the need for CSS"
          ],
          correctAnswer: "Because it provides alignment and distribution tools",
          explanation: "Flexbox makes it easier to align, center, and space elements compared to using float-based layouts."
        },
        {
          question: "How do you make a flex item take up all remaining space?",
          options: [
            "flex: auto;",
            "flex: 1;",
            "width: 100%;",
            "margin: 0;"
          ],
          correctAnswer: "flex: 1;",
          explanation: "`flex: 1;` tells the item to grow and take up the remaining space in the flex container."
        },
          {
          question: "What is the purpose of a media query in CSS?",
          options: [
            "To change text color only",
            "To make JavaScript work on mobile",
            "To apply styles based on device characteristics like screen size",
            "To embed images into HTML"
          ],
          correctAnswer: "To apply styles based on device characteristics like screen size",
          explanation: "Media queries help create responsive designs by applying CSS rules only when certain conditions are met, such as screen width or orientation."
        },
        {
          question: "Which media query applies styles only on screens wider than 1024px?",
          options: [
            "@media (min-width: 1024px)",
            "@media (max-width: 1024px)",
            "@media (width: 1024px)",
            "@media screen and (max-width: 1024px)"
          ],
          correctAnswer: "@media (min-width: 1024px)",
          explanation: "`@media (min-width: 1024px)` targets screens that are 1024 pixels wide or wider."
        },
        {
          question: "What does this media query mean? @media screen and (max-width: 600px)",
          options: [
            "It applies styles to all screens regardless of size",
            "It applies styles when the screen width is exactly 600px",
            "It applies styles when the screen width is 600px or less",
            "It applies styles to printers only"
          ],
          correctAnswer: "It applies styles when the screen width is 600px or less",
          explanation: "The `max-width: 600px` condition limits the styles to small screens, like smartphones."
        },
        {
          question: "How can you apply styles only when the device is in landscape mode?",
          options: [
            "@media (orientation: portrait)",
            "@media (orientation: landscape)",
            "@media screen and (landscape: true)",
            "@media (max-orientation: landscape)"
          ],
          correctAnswer: "@media (orientation: landscape)",
          explanation: "`@media (orientation: landscape)` targets devices in horizontal (landscape) orientation."
        },
        {
          question: "Which media feature detects high-resolution (Retina) screens?",
          options: [
            "resolution",
            "pixel-density",
            "device-ratio",
            "screen-quality"
          ],
          correctAnswer: "resolution",
          explanation: "You can use `min-resolution` or `-webkit-min-device-pixel-ratio` to target high-density displays like Retina."
        },
        {
          question: "What’s the correct syntax to change the background color for screens smaller than 768px?",
          options: [
            "@media screen and (max-width: 768px) { body { background: red; } }",
            "@media (min-width: 768px) { body { background: red; } }",
            "@screen (768px) { background: red; }",
            "@media screen 768px { background: red; }"
          ],
          correctAnswer: "@media screen and (max-width: 768px) { body { background: red; } }",
          explanation: "This media query applies styles only to screens that are 768 pixels wide or less."
        },
        {
          question: "Can you combine multiple conditions in a media query?",
          options: [
            "No, only one condition per query",
            "Yes, using commas only",
            "Yes, using `and`, `or`, and `not`",
            "Yes, but only in JavaScript"
          ],
          correctAnswer: "Yes, using `and`, `or`, and `not`",
          explanation: "CSS media queries can combine conditions using `and`, `,` (comma as OR), and `not` to create complex responsive rules."
        },  
      {
          question: "What are CSS breakpoints used for?",
          options: [
            "To define font sizes only",
            "To break the layout into sections",
            "To apply different styles based on screen size",
            "To load different pages"
          ],
          correctAnswer: "To apply different styles based on screen size",
          explanation: "Breakpoints help you create responsive layouts by applying CSS rules at specific screen widths."
        },
        {
          question: "Which is a common breakpoint for tablets?",
          options: [
            "min-width: 320px",
            "max-width: 1024px",
            "min-width: 768px and max-width: 1024px",
            "min-width: 1440px"
          ],
          correctAnswer: "min-width: 768px and max-width: 1024px",
          explanation: "Tablets are usually targeted between 768px and 1024px screen widths."
        },
        {
          question: "How do you write a media query that targets desktop screens only?",
          options: [
            "@media screen and (min-width: 1025px)",
            "@media screen and (max-width: 1024px)",
            "@media desktop",
            "@media only (desktop: true)"
          ],
          correctAnswer: "@media screen and (min-width: 1025px)",
          explanation: "Desktops usually start at widths above 1024px, so `min-width: 1025px` targets them."
        },
        {
          question: "Which media query would apply styles only to mobile phones?",
          options: [
            "@media screen and (max-width: 768px)",
            "@media screen and (min-width: 769px)",
            "@media (min-height: 800px)",
            "@media only mobile"
          ],
          correctAnswer: "@media screen and (max-width: 768px)",
          explanation: "Mobile screens are usually considered to be 768px or smaller in width."
        },
        {
          question: "What does this media query do? @media (min-width: 768px) and (max-width: 1024px)",
          options: [
            "Applies styles to very small screens only",
            "Targets tablet screen sizes",
            "Applies styles only on large desktop screens",
            "Has no effect on screen size"
          ],
          correctAnswer: "Targets tablet screen sizes",
          explanation: "This query applies styles to devices with widths between 768px and 1024px, typically tablets."
        },
        {
          question: "What is the advantage of using multiple breakpoints in responsive design?",
          options: [
            "It breaks the layout",
            "It makes the website less accessible",
            "It allows fine-tuning of styles for different screen sizes",
            "It hides content for all devices"
          ],
          correctAnswer: "It allows fine-tuning of styles for different screen sizes",
          explanation: "Multiple breakpoints give you better control over how your design adapts to various devices."
        },
        {
          question: "What does the comma (,) operator do in a media query?",
          options: [
            "Combines conditions with AND",
            "Separates completely different media rules (OR)",
            "Negates a condition",
            "It has no meaning in CSS"
          ],
          correctAnswer: "Separates completely different media rules (OR)",
          explanation: "Using a comma allows you to apply styles if either condition is true — it's like using OR."
        },







      



  ],
  
  qnajs: [
       {
          question: "What are loops in JS?",
          options: [
              `Loops allow you to run the same block of code multiple times—automatically.`,
              "You cannot change the value later. also block-scoped.Good for values that don't change (like pi, app settings, etc).",
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `function sayHi() { console.log ("Hello!");} sayHi();//call the function`
          ],
          correctAnswer: `Loops allow you to run the same block of code multiple times—automatically.`,
          explanation: `Example if you want to print "Hello " 5 times— a loop can do that in just a few lines!`
      },
      {
          question: "Why use loops? ",
          options: [
              `Example if you want to print "Hello " 5 times— a loop can do that in just a few lines!`,
              `function sayHi() { console.log ("Hello!");} sayHi();//call the function`,
              `Loops allow you to run the same block of code multiple times—automatically.`,
                `Repeat actions (like showing items in a list), Reduce code repetition, Automate tasks`
          ],
          correctAnswer: `Repeat actions (like showing items in a list), Reduce code repetition, Automate tasks`,
          explanation: `Example if you want to print "Hello " 5 times— a loop can do that in just a few lines!`
      },
      {
          question: "Types of loops in JS",
          options: [
              `Loops allow you to run the same block of code multiple times—automatically.`,
              `Repeat actions (like showing items in a list), Reduce code repetition, Automate tasks`,
              `Example if you want to print "Hello " 5 times— a loop can do that in just a few lines!`,
               `for (Loop with a couter (fixed times), while (loop while condition is true), do...while (like while, but runs at least once), for..of (loop through array values), for...in(loop through object keys))`
          ],
          correctAnswer: `for (Loop with a couter (fixed times), while (loop while condition is true), do...while (like while, but runs at least once), for..of (loop through array values), for...in(loop through object keys))`,
          explanation:`for (Loop with a couter (fixed times), while (loop while condition is true), do...while (like while, but runs at least once), for..of (loop through array values), for...in(loop through object keys))`
      },
      {
          question: "for loop (most common)",
          options: [
              `Loops allow you to run the same block of code multiple times—automatically.`,
              `Repeat actions (like showing items in a list), Reduce code repetition, Automate tasks`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
               `for (Loop with a couter (fixed times), while (loop while condition is true), do...while (like while, but runs at least once), for..of (loop through array values), for...in(loop through object keys))`
          ],
          correctAnswer: `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
          explanation:`starts at i =0, runs while i<5, increases i by 1 each time.`
      },
      {
          question: "while loop (most common)",
          options: [
              `Loops allow you to run the same block of code multiple times—automatically.`,
              `Repeat actions (like showing items in a list), Reduce code repetition, Automate tasks`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
               `let i=0; while (i<3) {console.log("Count: "+ i); i++} `
          ],
          correctAnswer: `let i=0; while (i<3) {console.log("Count: "+ i); i++} `,
          explanation:`good when you don't know exactly how many times you'll loop.`
      },
      {
          question: "do while loop ",
          options: [
              `Loops allow you to run the same block of code multiple times—automatically.`,
              `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
               `let i=0; while (i<3) {console.log("Count: "+ i); i++} `
          ],
          correctAnswer: `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
          explanation:`Runs the code at least once, even if the condition is false.`
      },
      {
          question: "for...of loop (arrays)",
          options: [
              `let fruits = ["apple", "banana", "mango"]; for (let fruit of fruits){ console.log(fruit);}`,
              `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
               `let i=0; while (i<3) {console.log("Count: "+ i); i++} `
          ],
          correctAnswer: `let fruits = ["apple", "banana", "mango"]; for (let fruit of fruits){ console.log(fruit);}`,
          explanation:`Easy way to loop through array values.`
      },
      {
          question: "for...in loop (arrays)",
          options: [
              `let fruits = ["apple", "banana", "mango"]; for (let fruit of fruits){ console.log(fruit);}`,
              `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
             `let person = {name: "Sovanna", age: 22}; for (let key in person){console.log(key + ":" + person[key]);}`
          ],
          correctAnswer: `let person = {name: "Sovanna", age: 22}; for (let key in person){console.log(key + ":" + person[key]);}`,
          explanation:`Loops through the keys of an object.`
      },
      {
          question: "for...in loop ?",
          options: [
              `let fruits = ["apple", "banana", "mango"]; for (let fruit of fruits){ console.log(fruit);}`,
              `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
              `Loop through object properties`,
             `let person = {name: "Sovanna", age: 22}; for (let key in person){console.log(key + ":" + person[key]);}`
          ],
          correctAnswer: `Loop through object properties`,
          explanation:`Loops through the keys of an object.`
      },
      {
          question: "for...of loop ?",
          options: [
              `let fruits = ["apple", "banana", "mango"]; for (let fruit of fruits){ console.log(fruit);}`,
              `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
              `Loop through object properties`,
             `Loop through array values`
          ],
          correctAnswer: `Loop through array values`,
          explanation:`Loops through the keys of an array`
      },
      {
          question: "What is forEach()",
          options: [
              `Loops allow you to run the same block of code multiple times—automatically.`,
              `Repeat actions (like showing items in a list), Reduce code repetition, Automate tasks`,
              `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`,
               `for (Loop with a couter (fixed times), while (loop while condition is true), do...while (like while, but runs at least once), for..of (loop through array values), for...in(loop through object keys), forEach())`
          ],
          correctAnswer: `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`,
          explanation:`for (Loop with a couter (fixed times), while (loop while condition is true), do...while (like while, but runs at least once), for..of (loop through array values), for...in(loop through object keys))`
      },
      {
          question: "forEach() Syntax? ",
          options: [
              // `let fruits = ["apple", "banana", "mango"]; for (let fruit of fruits){ console.log(fruit);}`,
              `let i= 0; do{ console.log("At least once: " + i); i++}while (i<2);`,
              `for (let i=0; i<5; i++) { console.log("hello" + i);}`,
               `array.forEach(function(element, index, array){ //your code here});`,
               `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`
          ],
          correctAnswer: `array.forEach(function(element, index, array){ //your code here});`,
          explanation:`Easy way to loop through array values.`
      },
       {
          question: "Example forEach() ? ",
          options: [
              // `array: (Optional)the original array`,
              // `index: (optional) Current item's index`,
              `element: Current item in the array`,
              `let fruits = ["apple", "banana", "mango"]; fruits.forEach(function(fruit){console.log(fruit); });`,
               `array.forEach(function(element, index, array){ //your code here});`,
               `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`
          ],
          correctAnswer: `let fruits = ["apple", "banana", "mango"]; fruits.forEach(function(fruit){console.log(fruit); });`,
          explanation:`   apple
                          banana
                          mango
                                  `
      },
      {
          question: "Example with arrow function (shorter version) forEach() ? ",
          options: [
              `array: (Optional)the original array`,
              `index: (optional) Current item's index`,
              `element: Current item in the array`,
              `fruits.forEach(fruit => console.log(fruit));`,
              // `let fruits = ["apple", "banana", "mango"]; fruits.forEach(function(fruit){console.log(fruit); });`,
              //  `array.forEach(function(element, index, array){ //your code here});`,
              //  `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`
          ],
          correctAnswer: `fruits.forEach(fruit => console.log(fruit));`,
          explanation:``   
                                  
      },
      {
          question: "Example with Index forEach() ? ",
          options: [
              // `array: (Optional)the original array`,
              // `index: (optional) Current item's index`,
              // `element: Current item in the array`,
              `fruits.forEach((fruit, index) => { console.log(index + ":" + fruit); });`
              // `fruits.forEach(fruit => console.log(fruit));`,
              `let fruits = ["apple", "banana", "mango"]; fruits.forEach(function(fruit){console.log(fruit); });`,
               `array.forEach(function(element, index, array){ //your code here});`,
               `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`
          ],
          correctAnswer: `fruits.forEach((fruit, index) => { console.log(index + ":" + fruit); });`,
          explanation:``   
                                  
      },
      {
          question: "forEach() Syntax? ",
          options: [
              `array: (Optional)the original array`,
              `index: (optional) Current item's index`,
              `element: Current item in the array`,
               `array.forEach(function(element, index, array){ //your code here});`,
               `forEach() is a built-in array method in JavaScript. It runs a function once for each element in an array.`
          ],
          correctAnswer: `array.forEach(function(element, index, array){ //your code here});`,
          explanation:``
      },
       {
          question: "What is Encapsulation?",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              `A function is a block of reusable code that performs a task or returns a value. You can define it once and call it as many times as you want.`,
              `Encapsulation means hiding the internal details of how an object works and only exposing what is necessary.`
          ],
          correctAnswer: `Encapsulation means hiding the internal details of how an object works and only exposing what is necessary.`,
          explanation:  `Keep data and code safe inside an object, and control access to it.
                          Encapsulation is about keeping data private and providing controlled access through methods.`
      },
      {
          question: "What is Event Handling in JS?",
          options: [
              "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values.",
              "JavaScript is a programming language used to make web pages interactive.",
              "Detecting and responding to user actions like: Clicking a button, Typing in a textbox, Hovering over an element, Submitting a form and pressing a key.",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "Detecting and responding to user actions like: Clicking a button, Typing in a textbox, Hovering over an element, Submitting a form and pressing a key.",
          explanation: ""
      },
      {
          question: "Event",
          options: [
              "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values.",
              "JavaScript is a programming language used to make web pages interactive.",
              "Detecting and responding to user actions like: Clicking a button, Typing in a textbox, Hovering over an element, Submitting a form and pressing a key.",
              "The action (click, hover, etc."
          ],
          correctAnswer: "The action (click, hover, etc.",
          explanation: ""
      },
      {
          question: "Handler",
          options: [
              "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values.",
              "The function that runs when it happens",
              "Detecting and responding to user actions like: Clicking a button, Typing in a textbox, Hovering over an element, Submitting a form and pressing a key.",
              "The action (click, hover, etc."
          ],
          correctAnswer: "The function that runs when it happens",
          explanation: ""
      },
      {
          question: "addEventListener",
          options: [
              "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values.",
              "The function that runs when it happens",
              "Detecting and responding to user actions like: Clicking a button, Typing in a textbox, Hovering over an element, Submitting a form and pressing a key.",
              "Method to attach a handler"
          ],
          correctAnswer: "Method to attach a handler",
          explanation: ""
      },
      {
          question: "What is a function in JS?",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              `A function is a block of reusable code that performs a task or returns a value. You can define it once and call it as many times as you want.`,
              "An Array is a collection of data stored as key-value pairs."
          ],
          correctAnswer: `A function is a block of reusable code that performs a task or returns a value. You can define it once and call it as many times as you want.`,
          explanation:  `A function is a block of reusable code that performs a task or returns a value. You can define it once and call it as many times as you want.`
      },
      {
          question: "Why use functions?",
          options: [
              "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values.",
              "JavaScript is a programming language used to make web pages interactive.",
              "You can change the value later . block-scoped (safe inside{})",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values.",
          explanation: "Avoid repeating code. Organize your program into smaller parts. Reuse code with different values."
      },
      {
          question: "Function declaration (Function Syntax)",
          options: [
              `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`,
              "You cannot change the value later. also block-scoped.Good for values that don't change (like pi, app settings, etc).",
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `function sayHi() { console.log ("Hello!");} sayHi();//call the function`
          ],
          correctAnswer: `function sayHi() { console.log ("Hello!");} sayHi();//call the function`,
          explanation: `function sayHi() { console.log ("Hello!");} sayHi();//call the function`
      },
      {
          question: "Function with parameters",
          options: [
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `function sayHi() { console.log ("Hello!");} sayHi();//call the function`,
              "function-scoped(not block-scoped).Can cause bugs—avoid using in modern code.",
               `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`
          ],
          correctAnswer: `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`,
          explanation:  `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`
      },
      {
          question: "Function with return values",
          options: [
              `console.log(person[ "name"]); Bracket notation for object key`,
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `function sayHi() { console.log ("Hello!");} sayHi();//call the function`,
               `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`
          ],
          correctAnswer: `function add(a,b){ return a+b; } let result = add(4,4);`,
          explanation: `function add(a,b){ return a+b; } let result = add(4,4);`
      },
      {
          question: "Function Expression (Anonymous)",
          options: [
              `function sayHi() { console.log ("Hello!");} sayHi();//call the function`,
              `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`,
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `let multiply = function(x,y){ return x*y; }; console.log(multiply(2,4));`
          ],
          correctAnswer: `let multiply = function(x,y){ return x*y; }; console.log(multiply(2,4));`,
          explanation: `let multiply = function(x,y){ return x*y; }; console.log(multiply(2,4));`
      },
      {
          question: "Arrow function (ES6+)",
          options: [
              `let square = (x) => x*x; console.log (square(5));`,
              `function greet(name){ console.log("Hello, " + name + "!");} greet("Sovanna");`,
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `let multiply = function(x,y){ return x*y; }; console.log(multiply(2,4));`
          ],
          correctAnswer: `let square = (x) => x*x; console.log (square(5));`,
          explanation: `let square = (x) => x*x; console.log (square(5));`
      },
      {
          question: "Function",
          options: [
              `let square = (x) => x*x; console.log (square(5));`,
              `Keyword to define a function`,
              `function add(a,b){ return a+b; } let result = add(4,4);`,
              `let multiply = function(x,y){ return x*y; }; console.log(multiply(2,4));`
          ],
          correctAnswer: `Keyword to define a function`,
          explanation: `A function is a block for reusable code that performs a task or returns a value. You can define it once and call it as many times as you want.`
      },
      {
          question: "Parmeter",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "Variable used inside function (x, y)"
          ],
          correctAnswer: "Variable used inside function (x, y)",
          explanation: "Variable used inside function (x, y)"
      },
      {
          question: "argument",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "Actual value passed (5, 10)"
          ],
          correctAnswer: "Actual value passed (5, 10)",
          explanation: "Actual value passed (5, 10)"
      },
      {
          question: "return",
          options: [
              "'null'",
              "Sends a value back out of the function",
              "'undefined'",
              "'string'"
          ],
          correctAnswer: "Sends a value back out of the function",
          explanation: "Sends a value back out of the function"
      },
       {
          question: "🟨 Syntax the ternary operator(? :)",
          options: [
              "a programming language used to make web pages interactive",
              "The ternary operator in js is a short way to write an if...else statement. It's also called the conditional operator: condition ? trueResult:falseResult",
              "A condition lets your program make decisions. You use it to check if something is true or false, and run code only if the condition is true.",
              "condition ? value_if_true : Value_if_false;"
          ],
          correctAnswer: "condition ? value_if_true : Value_if_false;",
          explanation: ` 
                      let age = 20;
                      let message = (age >= 18) ? "You are an adult" : "You are a minor" <br>
                      Same as: 
                      if (age>=18){
                          message = "You are an adult";
                      }else{
                          message = "You are a minor";
                      }
                      Another example:
                      let loggedIn = true;
                      let status = loggedIn ? "Welcome back!" : "Please log in";`
      },
      {
          question: "You can also use ternary directly in output",
          options: [
              "condition ? value_if_true : Value_if_false",
              "Use ternary only for simple conditions . for complex logic, use full if...else statements-easier to read and debug.",
              "console.log(age >= 18 ? 'Adult' : 'Child');",
              "if statement, if...else, if...else if...else, switch statement, ternary(? :)"
          ],
          correctAnswer: "console.log(age >= 18 ? 'Adult' : 'Child');",
          explanation: ""
      },
      {
          question: "🟢 what is a Condition in JS?",
          options: [
              "a programming language used to make web pages interactive",
              "create sliders or animation, show pup-up messages, control audio/video, validate forms,",
              "Run in your browser console or an online editor like JSFiddle, codePen, playcode.",
              "A condition lets your program make decisions. You use it to check if something is true or false, and run code only if the condition is true."
          ],
          correctAnswer: "A condition lets your program make decisions. You use it to check if something is true or false, and run code only if the condition is true.",
          explanation: "✅ you use it to check if something is true or false, and run code only if the condition is true."
      },
      {
          question: "Common condition statements:",
          options: [
              "'==' checks value only, '===' checks value and type",
              "is like a container that stores a value. you can use it to store numbers, text, or anything you want. ",
              "Called loose equality. compares values after converting them to the same type (type coercion)",
              "if statement, if...else, if...else if...else, switch statement"
          ],
          correctAnswer: "if statement, if...else, if...else if...else, switch statement",
          explanation: ""
      },
      {
          question: "if statement",
          options: [
              "Runs code only if the condition is true",
              "Runs one block if true, another if false",
              "Checks multiple conditions in order.",
              "static"
          ],
          correctAnswer: "Runs code only if the condition is true",
          explanation: "let age = 19; <br>if (age>=19){ <br>console.log('you are an adult.');"
      },
      {
          question: "if...else statement",
          options: [
              "Runs code only if the condition is true",
              "Runs one block if true, another if false",
              "Checks multiple conditions in order.",
              "Sorts the elements of an array"
          ],
          correctAnswer: "Runs one block if true, another if false",
          explanation: "let age =16; <br>if (age >=18) {<br>console.log('You can vote')} <br> else<br>{<br>console.log('You are too young to vote')}"
      },
      {
          question: "if....else if...else statement",
          options: [
              "Runs code only if the condition is true",
              "Runs one block if true, another if false",
              "Checks multiple conditions in order.",
              "Good for multiple fixed values."
          ],
          correctAnswer: "Checks multiple conditions in order.",
          explanation: "let score =75; <br> if (score >= 90){ <br> console.log('A grade');}<br> else if (score>=70){ <br> console.log('B grade');}else{<br>console.log('C grade');}"
      },
      {
          question: "switch statement",
          options: [
              "Runs code only if the condition is true",
              "Runs one block if true, another if false",
              "Checks multiple conditions in order.",
              "Good for multiple fixed values."
          ],
          correctAnswer: "Good for multiple fixed values.",
          explanation: `let day = "Monday";
                          switch (day){
                              case "Monday":
                                  console.log("Start of the week!");
                                  break;
                              case "Friday":
                                  console.log("Almost weekend!");
                                  break;
                              default:
                                  console.log("Just another day.");
                          }`
      },
      {
          question: "How to declare a variable in JS?",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              `let name = "Sovanna"; const pi = 3.14; var city = "Phnom Penh"`,
              "An Array is a collection of data stored as key-value pairs."
          ],
          correctAnswer: `let name = "Sovanna"; const pi = 3.14; var city = "Phnom Penh"`,
          explanation: `You can declare a variable using one of these three keywords`
      },
      {
          question: "let",
          options: [
              "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
              "JavaScript is a programming language used to make web pages interactive.",
              "You can change the value later . block-scoped (safe inside{})",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "You can change the value later . block-scoped (safe inside{})",
          explanation: `-Modern & commonly used`
      },
      {
          question: "const",
          options: [
              "I'm creating an array using square brackets.",
              "You cannot change the value later. also block-scoped.Good for values that don't change (like pi, app settings, etc).",
              "List of values( a type of object)",
              "Numbers, no need to distinguish int/float"
          ],
          correctAnswer: "You cannot change the value later. also block-scoped.Good for values that don't change (like pi, app settings, etc).",
          explanation: `-Constant value(cannot change)`
      },
      {
          question: "Var",
          options: [
              "console.log(fruits[0]); Accessing value at index",
              "Accessing the value usig bracket notation.",
              "function-scoped(not block-scoped).Can cause bugs—avoid using in modern code.",
              "Code that can be called"
          ],
          correctAnswer: "function-scoped(not block-scoped).Can cause bugs—avoid using in modern code.",
          explanation: `-Old way (not recommended now)`
      },
      {
          question: "What is an Object in JavaScript?",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              "When you need named properties",
              "An Array is a collection of data stored as key-value pairs."
          ],
          correctAnswer: "When you need named properties",
          explanation: `object.key or object["key"] key-vlaue pairs`
      },
      {
          question: "What is an Array in JS?",
          options: [
              "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
              "JavaScript is a programming language used to make web pages interactive.",
              "When you need a list or order",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "When you need a list or order",
          explanation: `array[index] list of values`
      },
      {
          question: "Non-Primitive (Reference) Data type",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              "is a collection of data stored as key-values pairs.",
              "These can hold collections of values."
          ],
          correctAnswer: "These can hold collections of values.",
          explanation: ""
      },
      {
          question: "Object (non-primitive Data types)",
          options: [
              "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
              "JavaScript is a programming language used to make web pages interactive.",
              "Key-value pairs.",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "Key-value pairs.",
          explanation: `{name:  "Sovanna", age: " 22"}`
      },
      {
          question: "Array",
          options: [
              "I'm creating an array using square brackets.",
              "Declares a function-scoped variable",
              "List of values( a type of object)",
              "Numbers, no need to distinguish int/float"
          ],
          correctAnswer: "List of values( a type of object)",
          explanation: `[1,2,3] or ["a","b", "c"]`
      },
      {
          question: "Function",
          options: [
              "console.log(fruits[0]); Accessing value at index",
              "Accessing the value usig bracket notation.",
              "JSON.objectify()",
              "Code that can be called"
          ],
          correctAnswer: "Code that can be called",
          explanation: `function sayHi(){alert("Hi");}`
      },
      {
          question: "Date (non-primitive data types)",
          options: [
              `console.log(person[ "name"]); Bracket notation for object key`,
              "useful when the key is dynamic (e.g from a variable).",
              "Decleared, but no value",
              "built-in object for dates and times"
          ],
          correctAnswer: "built-in object for dates and times",
          explanation: "new Date()"
      },
      {
          question: "Primitive Data type",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              "is a collection of data stored as key-values pairs.",
              "These are the most basic types. They store a single value."
          ],
          correctAnswer: "These are the most basic types. They store a single value.",
          explanation: ""
      },
      {
          question: "String",
          options: [
              "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
              "JavaScript is a programming language used to make web pages interactive.",
              "Text, inside quotes.",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "Text, inside quotes.",
          explanation: ""
      },
      {
          question: "Number",
          options: [
              "I'm creating an array using square brackets.",
              "Declares a function-scoped variable",
              "Declares a constant variable",
              "Numbers, no need to distinguish int/float"
          ],
          correctAnswer: "Numbers, no need to distinguish int/float",
          explanation: ""
      },
      {
          question: "Boolean",
          options: [
              "console.log(fruits[0]); Accessing value at index",
              "Accessing the value usig bracket notation.",
              "JSON.objectify()",
              "Yes/no, On/Off, true/false"
          ],
          correctAnswer: "Yes/no, On/Off, true/false",
          explanation: "true, false"
      },
      {
          question: "Undefined",
          options: [
              "console.log(person[double quote name]); Bracket notation for object key",
              "useful when the key is dynamic (e.g from a variable).",
              "Decleared, but no value",
              "Refers to the previous object"
          ],
          correctAnswer: "Decleared, but no value",
          explanation: "let x semicolon"
      },
      {
          question: "Null",
          options: [
              "Bracket notation (array)",
              "Intentionally empty",
              "Bracket notation (object)",
              "Character"
          ],
          correctAnswer: "Intentionally empty",
          explanation: "let x = null semicolon"
      },
      {
          question: "Symbol",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "Unique identifiers (advanced use)"
          ],
          correctAnswer: "Unique identifiers (advanced use)",
          explanation: "Symbol(double quote id)"
      },
      {
          question: "BigInt",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "For very large number (rarely used)"
          ],
          correctAnswer: "For very large number (rarely used)",
          explanation: "123455677788999n"
      },
      {
          question: "what is an object in JavaScript?",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              "is a collection of data stored as key-values pairs.",
              "Declares a private variable"
          ],
          correctAnswer: "is a collection of data stored as key-values pairs.",
          explanation: ""
      },
      {
          question: "what is an Array in JavaScript?",
          options: [
              "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
              "JavaScript is a programming language used to make web pages interactive.",
              "is a special object used to store a list  of values.",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "is a special object used to store a list  of values.",
          explanation: ""
      },
      {
          question: "This is an array literal.",
          options: [
              "I'm creating an array using square brackets.",
              "Declares a function-scoped variable",
              "Declares a constant variable",
              "Declares a private variable"
          ],
          correctAnswer: "I'm creating an array using square brackets.",
          explanation: "If you write [] alone or assign it to a variable: here,[] is called an array literal-it creates a new array."
      },
      {
          question: "Bracket Notation (for Accessing)",
          options: [
              "console.log(fruits[0]); Accessing value at index",
              "Accessing the value usig bracket notation.",
              "JSON.objectify()",
              "JSON.convert()"
          ],
          correctAnswer: "Accessing the value usig bracket notation.",
          explanation: "When you use [] to get or set a value, it's called bracket notation."
      },
      {
          question: "In Object (Dynamic Keys)",
          options: [
              "console.log(person[double quote name]); Bracket notation for object key",
              "useful when the key is dynamic (e.g from a variable).",
              "Refers to the parent object",
              "Refers to the previous object"
          ],
          correctAnswer: "console.log(person[double quote name]); Bracket notation for object key",
          explanation: "Useful when the key is dynamic"
      },
      {
          question: "[]",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "Character"
          ],
          correctAnswer: "Array literal",
          explanation: ""
      },
      {
          question: "[double quote key]",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "Character"
          ],
          correctAnswer: "Bracket notation (object)",
          explanation: ""
      },
      {
          question: "[index]",
          options: [
              "Bracket notation (array)",
              "Array literal",
              "Bracket notation (object)",
              "Character"
          ],
          correctAnswer: "Bracket notation (array)",
          explanation: ""
      },
      {
          question: "What is JavaScript",
          options: [
              "It's the standard language used to create and structure content on the web.",
              "avaScript is a programming language used to make web pages interactive.",
              "It's used to style and design HTML pages.",
              "Declares a private variable"
          ],
          correctAnswer: "JavaScript is a programming language used to make web pages interactive.",
          explanation: "For example: show pop-up massages , create sliders or animations, Validate forms and control audio/Video. Example (Run in your browser or an online editor like JSFiddle, codePen, or PlayCode."
      },
      {
          question: "What is a Variable?",
          options: [
              "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
              "JavaScript is a programming language used to make web pages interactive.",
              "It's used to style and design HTML pages.",
              "While HTML builds the structure (like text, images and buttons), CSS controls how that structure looks: colors, fonts, layout (position of elements), sizes, spacing, and animation."
          ],
          correctAnswer: "A variable is like a container that stores a value. You can use it to store numbers, text, or anything you want.",
          explanation: "For example: show pop-up messages, create sliders or animations, validate forms, and control audio/video. Example (Run in your browser or an online editor like JSFiddle, CodePen, or PlayCode)."
      },
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
  },
   {
  question: "How do you embed an image in an HTML page?",
  options: [
      "Using the &lt;img&gt; tag with a src attribute pointing to the image URL.",
      "Using the &lt;image&gt; tag inside a &lt;form&gt;.",
      "By linking to the image with the &lt;a&gt; tag.",
      "By inserting the image directly into the &lt;head&gt; section."
  ],
      correctAnswer: "Using the &lt;img&gt; tag with a src attribute pointing to the image URL.",
      explanation: "Images are embedded using the &lt;img&gt; tag. The src attribute defines the path to the image file, and alt provides alternative text."
  },
  {
      question: "When do we use the 'action' and 'method' attributes in an HTML form?",
      options: [
          "To apply CSS styles to the form layout.",
          "To connect the form with a database directly.",
          "To specify where and how to send the form data when submitted.",
          "To create hidden inputs in the form."
      ],
      correctAnswer: "To specify where and how to send the form data when submitted.",
      explanation: "The 'action' attribute defines the server URL where form data should be sent. The 'method' attribute specifies how to send the data — commonly using 'GET' or 'POST'."
  }, 
  {
      question: "What is the purpose of &lt;fieldset&gt; and &lt;legend&gt; in an HTML form?",
      options: [
          "They are used to style form buttons with gradients.",
          "They embed video or audio inside forms.",
          "They group related form elements and provide a caption for the group.",
          "They store form data in a local cache."
      ],
      correctAnswer: "They group related form elements and provide a caption for the group.",
      explanation: "&lt;fieldset&gt; is used to group related elements within a form, and &lt;legend&gt; defines a caption or title for that group. This improves both structure and accessibility."
  },
   {
      question: "What is the &lt;section&gt; tag used for in HTML?",
      options: [
          "To create inline text containers.",
          "To define standalone blocks of content with a specific theme or purpose.",
          "To group CSS style rules.",
          "To insert external JavaScript files."
      ],
      correctAnswer: "To define standalone blocks of content with a specific theme or purpose.",
      explanation: "The &lt;section&gt; tag represents a standalone section of content, usually with its own heading, such as a chapter, tab, or part of a page."
  },
    {
      question: "What is the difference between &lt;section&gt; and &lt;div&gt; in HTML?",
      options: [
          "&lt;section&gt; is used only for navigation, while &lt;div&gt; is for styling.",
          "&lt;div&gt; adds default styling, while &lt;section&gt; does not.",
          "&lt;section&gt; is semantic and indicates a block of related content, while &lt;div&gt; is a generic container with no meaning.",
          "&lt;div&gt; can only be used inside &lt;body&gt;, but &lt;section&gt; cannot."
      ],
      correctAnswer: "&lt;section&gt; is semantic and indicates a block of related content, while &lt;div&gt; is a generic container with no meaning.",
      explanation: "The &lt;section&gt; tag adds meaning (semantics) to your HTML by representing a defined block of content. &lt;div&gt; is purely structural with no implied meaning, used mainly for styling or grouping."
  },

     










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
      startTimer(30, updateTimerBar, () => {
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
      const percentage = (timeLeft / 30) * 100; // 15 is the initial time
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
