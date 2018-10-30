/***********************************************************
Questions
Work
Have you ever:
quit a job 2
gotten your ass fired 3
fired someone’s ass 4
owned your own business 4
gone bankrupt 5
been paid big bucks for risking your life 5
been paid for sex 6
scored a major book, record, or movie deal 7
pulled a big time switcheroo 8

Sex
Have you ever had sex with:
a teacher 1
a hooker 2
your boss 3
anyone remotely swedish 5
a porn star 10 (Bonus 25 points if she is a major star)
a lesbian 20
slept with a friends mom 2
french kissed a french girl 3
been blown while driving down the highway 5
had a secret affair with a married woman 5
had a threesome 10 (close but no cigar)
had sex with a super model 45

Sports
Have you ever:
performed 5 one arm push-ups 1
won your office hockey pool 1
cheered your pro-team to a championship 2
painted your face or body to show team solidarity 2
scored a game winning touchdown/goal 3
hit a grandslam/scored a hat trick 4
nailed a hole in one 6
bonus Score 1 point for every professional sports arena in which you’ve seen at least one game

Adventure
Have you ever:
floored a Ferrarri (1 point for every 20 miles per hour)
chopped Down a tree 1
chopped down a tree in a hotel lobby 5
smoked a Cuban in Cuba 2
driven an 18 Wheeler 2
sky-dived, hang-glided, or bungee jumped 2
flown a plane, piloted a skip, or operated a tank 4
gotten a tattoo 5
caught a fish bigger than your dog 6
eaten a mammal you killed yourself 7
spent a night in jail 7
shot a gruelling set of rapids 7
lived off the land for 48 hours 8
lived off pizza for 48 hours 8.5
Been, shot, stabbed, hit by a car, gored by a bull 10
climbed a significant mountain peak (1 for every 5000 ft)
written your name on the great wall of china 12 (close but no cigar)
drunk a beer at the North or south pole 15

Diet
Have you ever eaten:
dirt 1
caviar 2
frog’s legs 2
haggis 3
a tequilla worm 5
alligator 6
zebra 25

Skills
Have you mastered:
turkey carving 1
the fine art of telling dirty jokes 2
a dancing style 3
burping on cue 3
a martial art 3
knife throwing 5
at least 3 bar tricks 4
the machette 7
gutting an animal 10

Brawling
Have you ever:
been tossed out of a bar 1
been tossed from a strip club 2
defended a buddy with your fists 2
fought over a woman 3
had two women fight over you 4
stopped a crime in progress 5
drawn blood in a fight 5
broken somones nose 6 (didn't ask but maybe)
broken someones limb 7

Balls of steel
Have you ever:
Dined and dashed 1
had sex in public 2
joined the Mile High Club 2
hot-wired a car 2 (watched it be done)
hung up on a Lawyer (called her a liar) 2
gone to worked stoned 3
come face to face with a wild animal 4
starred into the barrell of gun 5
dumped a pyscho chick 8
defused a bomb 10
performed in a porn movie 12
been buried alive 15

Miscellaneous
Have you ever:
chewed tobacco 1
drank form the milk carton 1
picked up a gigantic bar tab 1
wailed on an electric guitar 1
shaved your head 1
arm wrestled to square a dispute 1
open a beer bottle with your teeth 1
ordered beer in another language 1
groped silcon breasts 2
lost that gut 2
triumphantly reaquired that gut 2
acquired a scar 2
run the table in a pool game 2
watched Brian's Song without crying 2
driven across the country 2
seen every james bond movie 2
given sex tips to a lesbian 2
owned a motorcycle or atv 2 (rode but didn't own)
ridden a horse at full gallop 2
stayed sloshed for 24 hours 2
woken up with no idea of where you were or how you got there 2
run a marathon 3
tossed a keg 3
blown a 100 bucks at craps 5

Score 65
Total
0-30 - You're Too Nice. Try Harder
30-100 - Stud - You're trying. Keep Going.
100 - 150 - Super-stud. Living life to the max
150 - Super-freak. You're scary
*/

var workQuestions = [
  "quit a job",
  "gotten your ass fired",
  "fired someone’s ass",
  "owned your own business",
  "gone bankrupt",
  "been paid big bucks for risking your life",
  "been paid for sex",
  "scored a major book, record, or movie deal",
  "pulled a big time switcheroo"
];

var workScores = [2, 3, 4, 4, 5, 5, 6, 7, 8];

var score = 0;

var questions = document.querySelector(".question");
var yes = document.querySelector(".yes");
var no = document.querySlector(".no");
var begin = document.querySelector(".begin");




// create a function to begin the test

// create a function to load the questions and tally the score
