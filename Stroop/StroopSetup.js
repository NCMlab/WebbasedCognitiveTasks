var ColorWelcome = "Welcome to the Stroop experiment. <p>In this experiment you will be identifying the color of the object that you see. You will see either a rectangular or a word.</p> Press any key to begin. "

var WordWelcome = "Welcome to the Stroop experiment. <p>In this experiment you will be identifying the color of the object that you see. You will see either a rectangular or a word.</p> Press any key to begin. "

var ColorWordWelcome = "Welcome to the Stroop experiment. <p>In this experiment you will be identifying the color of the object that you see. You will see either a rectangular or a word.</p> Press any key to begin. "

var ColorPracticeInstructions = '<p style="font-size:30px">You will see a colored rectangle. Press the key corresponding to the color you see. The keys are shown below. You will first start with some practice trials where you will receive feedback. Try to respond as quickly and accurately as possible.</p>'

var WordPracticeInstructions = '<p style="font-size:30px">You will see a colored word. Press the key corresponding to the color you see. The keys are shown below. You will first start with some practice trials where you will receive feedback. Try to respond as quickly and accurately as possible.</p>'

var ColorWordPracticeInstructions = '<p style="font-size:30px">You will see a colored word. Press the key corresponding to the color you see. The keys are shown below. You will first start with some practice trials where you will receive feedback. Try to respond as quickly and accurately as possible.</p>'

var ColorTestInstructions = '<p style="font-size:30px">You will see a colored rectangle. Press the key corresponding to the color you see. The keys are shown below. You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'

var WordTestInstructions = '<p style="font-size:30px">You will see a colored word. Press the key corresponding to the color you see. The keys are shown below. You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'

var ColorWordTestInstructions = '<p style="font-size:30px">You will see a colored word. Press the key corresponding to the color you see. The keys are shown below. You will now respond without any feedback. Try to respond as quickly and accurately as possible. </p>'

var ColorThankYouText = 'Thank you for participanting. Press any key to continue to the next task.'

var WordThankYouText = 'Thank you for participanting. Press any key to continue to the next task.'

var ColorWordThankYouText = 'Thank you for participating.'

/* If the response choice get modified here they also need to be modified below
*/
var ResponseChoices = ['v','b','n','m',27]

var FeedbackLength = 400; // This is in milliseconds

var FixationLength = 500; // This is in milliseconds

var ColorPracticeRepeats = 1
var WordPracticeRepeats = 1
var ColorWordPracticeRepeats = 1

// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var ColorTestRepeats = 1
// Since there are 4 possible trials, the number of trials will be 4 times the number of repeats
var WordTestRepeats = 1
// Since there are 16 possible trials, the number of trials will be 4 times the number of repeats
var ColorWordTestRepeats = 1

var StimulusFontSize = '60px'

/* ========================================================= 
	This is a function for positioning the instruction figure and stimuli on the screen
	If the instruction keyboard mapping figure is too low change the 'height' value below.
*/

function PutIntoTable(top='top', middle='mid', width=600, height=300) {
      return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'"><td valign="bottom"><img src="StroopColorsKeyboard.png"></td></tr></table>';
    }
/* ========================================================= 
	This is the stimuli list for both stroop color and word
   The green is very bright. TO make it less bright change it to something like (0,200,0)
*/

var StroopWordList = [
   {
      "Word": "Red",
      "Correct": "v",
      "Color": "(255,0,0)"
    },
    {
      "Word": "Yellow",
      "Correct": "b",
      "Color": "(255,255,0)"
    },
    {
      "Word": "Green",
      "Correct": "n",
      "Color": "(0,255,0)"
    },
    {
      "Word": "Blue",
      "Correct": "m",
      "Color": "(0,0,255)"
    }
]

/* ========================================================= 
	This is the stimuli list for stroop color/word
*/
var StroopColorWordList = [
 {
   "Word": "Red",
   "Congruency": "Con",
   "Correct": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Red",
   "Congruency": "Incon",
   "Correct": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Red",
   "Congruency": "Incon",
   "Correct": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Red",
   "Congruency": "Incon",
   "Correct": "n",
   "Color": "(0,255,0)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Incon",
   "Correct": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Con",
   "Correct": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Incon",
   "Correct": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Yellow",
   "Congruency": "Incon",
   "Correct": "n",
   "Color": "(0,255,0)"
 },
 {
   "Word": "Blue",
   "Congruency": "Incon",
   "Correct": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Blue",
   "Congruency": "Incon",
   "Correct": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Blue",
   "Congruency": "Con",
   "Correct": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Blue",
   "Congruency": "Incon",
   "Correct": "n",
   "Color": "(0,255,0)"
 },
 {
   "Word": "Green",
   "Congruency": "Incon",
   "Correct": "v",
   "Color": "(255,0,0)"
 },
 {
   "Word": "Green",
   "Congruency": "Incon",
   "Correct": "b",
   "Color": "(255,255,0)"
 },
 {
   "Word": "Green",
   "Congruency": "Incon",
   "Correct": "m",
   "Color": "(0,0,255)"
 },
 {
   "Word": "Green",
   "Congruency": "Con",
   "Correct": "n",
   "Color": "(0,255,0)"
 }
]