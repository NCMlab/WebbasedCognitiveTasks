function PutIntoTable(top='top', middle='mid', width=600, height=300) {
      return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:60px;">'+middle+'</div></td></tr><tr height="'+height+'"><td valign="bottom"><img src="StroopColorsKeyboard.png"></td></tr></table>';
    }

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
/*
var StroopColorList = [
   {
      "Rect": "<svg width="400" height="100"><rect width="400" height="100" style="fill:rgb(255,0,0);  stroke-width:3;stroke:rgb(0,0,0)" /></svg>",
      "Correct": "v",
      "Color": "Red"
   },
   {
      "Rect": "<svg width="400" height="100"><rect width="400" height="100" style="fill:rgb(255,255,0);  stroke-width:3;stroke:rgb(0,0,0)" /></svg>",
      "Correct": "b",
      "Color": "Yellow"
   },
   {
      "Rect": "<svg width="400" height="100"><rect width="400" height="100" style="fill:rgb(0,255,0);  stroke-width:3;stroke:rgb(0,0,0)" /></svg>",
      "Correct": "n",
      "Color": "Green"
   },
   {
      "Rect": "<svg width="400" height="100"><rect width="400" height="100" style="fill:rgb(0,0,255);  stroke-width:3;stroke:rgb(0,0,0)" /></svg>",
      "Correct": "m",
      "Color": "Blue"
   }
]
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