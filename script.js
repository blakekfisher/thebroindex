var workQuestions = [
  //Work
  "quit a job",
  "gotten your ass fired",
  "fired someone’s ass",
  "owned your own business",
  "gone bankrupt",
  "been paid big bucks for risking your life",
  "been paid for sex",
  "scored a major book, record, or movie deal",
  "pulled a big time switcheroo",
  //Sex
  "had sex with a teacher",
  "had sex with a hooker",
  "had sex with your boss",
  "had sex with anyone remotely swedish",
  "had sex with a porn star",
  "had sex with a lesbian",
  "slept with a friends mom",
  "french kissed a french girl",
  "been blown while driving down the highway",
  "had a secret affair with a married woman",
  "had a threesome",
  "had sex with a super model",
  //Sports
  "performed 5 one arm push-ups",
  "won your office hockey pool",
  "cheered your pro-team to a championship",
  "painted your face or body to show team solidarity",
  "scored a game winning touchdown or goal",
  "hit a grandslam or scored a hat trick",
  "nailed a hole in one",
  //Adventure
  "chopped down a tree",
  "chopped down a tree in a hotel lobby",
  "smoked a Cuban in Cuba",
  "driven an 18 Wheeler",
  "sky-dived, hang-glided, or bungee jumped",
  "flown a plane, piloted a skip, or operated a tank",
  "gotten a tattoo",
  "caught a fish bigger than your dog",
  "eaten a mammal you killed yourself",
  "spent a night in jail",
  "shot a gruelling set of rapids",
  "lived off the land for 48 hours",
  "lived off pizza for 48 hours",
  "Been shot, stabbed, hit by a car, or gored by a bull",
  "written your name on the great wall of china",
  "drunk a beer at the North or south pole",
  //Diet
  "eaten dirt",
  "eaten caviar",
  "eaten frog’s legs",
  "eaten haggis",
  "eaten a tequilla worm",
  "eaten alligator",
  "eaten zebra",
  //Skills
  "mastered turkey carving",
  "mastered the fine art of telling dirty jokes",
  "mastered a dancing style",
  "mastered burping on cue",
  "mastered a martial art",
  "mastered knife throwing",
  "mastered at least 3 bar tricks",
  "mastered the machette",
  "mastered gutting an animal",
  //Brawling
  " been tossed out of a bar",
  "been tossed from a strip club",
  "defended a buddy with your fists",
  "fought over a woman",
  "had two women fight over you",
  "stopped a crime in progress",
  "drawn blood in a fight",
  "broken somone's nose",
  "broken someone's limb",
  //Balls of steel
  "dined and dashed",
  "had sex in public",
  "joined the Mile High Club",
  "hot-wired a car",
  "hung up on a Lawyer",
  "gone to worked stoned",
  "come face to face with a wild animal",
  "starred into the barrell of gun",
  "dumped a pyscho chick",
  "defused a bomb",
  "performed in a porn movie",
  "been buried alive",
  //Miscellaneous
  "chewed tobacco",
  "drank form the milk carton",
  "picked up a gigantic bar tab",
  "wailed on an electric guitar",
  "shaved your head",
  "arm wrestled to square a dispute",
  "open a beer bottle with your teeth",
  "ordered beer in another language",
  "groped silcone breasts",
  "lost that gut",
  "triumphantly re-aquired that gut",
  "acquired a scar",
  "run the table in a pool game",
  "watched Brian's Song without crying",
  "driven across the country",
  "seen every James Bond movie",
  "given sex tips to a lesbian",
  "owned a motorcycle or ATV",
  "ridden a horse at full gallop",
  "stayed sloshed for 24 hours",
  "woken up with no idea of where you were or how you got there",
  "run a marathon",
  "tossed a keg",
  "blown a 100 bucks at craps"
];

//Bonus Round
var bonus = [
  "Score 1 point for every professional sports arena in which you’ve seen at least one game",
  "Have you had sex with a major star? If yes, who?",
  "Have you evern floored a Ferrarri? How fast did you drive? (1 point for every 20 miles per hour)",
  "Have you climbed a significant mountain peak? (1 for every 5000 ft)"
];

var workScores = [
  2, 3, 4, 4, 5, 5, 6, 7, 8,
  1, 2, 3, 5, 10, 20, 2, 3, 5, 5, 10, 45,
  1, 1, 2, 2, 3, 4, 6,
  1, 5, 2, 2, 2, 4, 5, 6, 7, 7, 7, 8, 9, 10, 12, 15,
  1, 2, 2, 3, 5, 6, 25,
  1, 2, 3, 3, 3, 5, 4, 7, 10,
  1 ,2 ,2 ,3 ,4 ,5 ,5 ,6 ,7,
  1, 2, 2, 2, 2, 3, 4, 5, 8, 10, 12, 15,
  1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 5
];

var questionValue = 0;
var score = 0;
var questionIndex = 0;
var scoreIndex = 0;
var questions = document.querySelector(".question");
var yes = document.querySelector(".yes");
var no = document.querySelector(".no");
var begin = document.querySelector(".begin");
var points = document.querySelector(".points");
var total = document.querySelector(".total");
var finalScore = document.querySelector(".final-score");
var title = document.querySelector(".title");
var reset = document.querySelector(".reset");

document.onload = start();

//the Start Function
function start() {
  //the begin button
  begin.addEventListener("click", function() {
    console.log("clicked");
    //runs the question function
    questionLoad();
    //disables the begin button
    begin.disabled = true;
  });
};


reset.addEventListener("click", function() {
  console.log("clicked");
  playAgain();
});

//The Reset function
function playAgain() {
  questionValue = 0;
  score = 0;
  questionIndex = 0;
  scoreIndex = 0;
  total.innerHTML = "";
  points.innerHTML = "";
  questions.innerHTML = "CLICK BEGIN TO TRY AGAIN";
  //enables the buttons
  begin.disabled = false;
  yes.disabled = false;
  no.disabled = false;
  start();
};

//The Yes Button
//add an event lister to the Yes button
yes.addEventListener("click", function() {
  console.log("clicked");
  score = score + workScores[scoreIndex];
  runningTotal();
  questionLoad();
  buttonStop();
});

//The No Button
no.addEventListener("click", function() {
  console.log("clicked");
  runningTotal();
  questionLoad();
  buttonStop();
});

//The Load Question Function
function questionLoad() {
  //displays the question to screen
  questions.innerHTML = workQuestions[questionIndex];
  //displays the value of the question on the screen
  points.innerHTML = "Question Value = " + workScores[scoreIndex];
  points.style.display = "visible";
  total.innerHTML = "Total = " + score;
};

//the Score Total Function
function runningTotal() {
  // total.innerHTML = "Total = " + score;
  scoreIndex++;
  questionIndex++;
};

//Button stop function
function buttonStop() {
  //Stop yes no buttons
  if (scoreIndex === 105 && questionIndex === 105) {
    yes.disabled = true;
    no.disabled = true;
    finish();
  };
};

//Finish Game Function
function finish() {
  if (score <= 30) {
    title.innerHTML = "You're Too Nice. Try Harder.";
  } else if (score > 30 && score <= 100) {
    title.innerHTML = "You'r a Stud. Keep Going.";
  } else if (score > 100 && score <= 150) {
    title.innerHTML = "You'r a Super-Stud. Keep living life to the max.";
  } else {
    title.innerHTML = "You'r a Super-freak. Frankly, you are scaring me.";
  }
  //Display final scores to the screen
  questions.innerHTML = "Finished!";
  points.innerHTML = "";
  total.innerHTML = "Your score is: " + score;
  finalScore.innerHTML = "You scored " + score
  // points.innerHTML = "Question value: " + question[9];
  $('#exampleModalCenter').modal('show');
};
