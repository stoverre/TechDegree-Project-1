/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * collection of 10 quotes. 2 from movies, 3 from books, and 5 from people
 * added a category property to each quote based on the media it originated
***/
let quotes = [
  {quote: `Do. Or do not. There is not try.`, source: `Yoda`, citation: `<i>The Empire Strikes Back</i>`, year: 1980, category: 'movie'},
  {quote: `Fear is the path to the dark side...fear leads to anger...anger leads to hate..hate leads to suffering.`, source: `Yoda`, citation: `<i>The Phantom Menace</i>`, year: 1999, category: 'movie'},
  {quote: `Real courage is when you know you're licked before you begin, but you begin anyway and see it through no matter what.`, source: `Atticus Finch`, citation: `<i>To Kill a Mockingbird</i>`, category: 'book'},
  {quote: `It matters not what someone is born, but what they grow to be`, source: `Professor Albus Dumbledore`, citation: `<i>Harry Potter and the Goblet of Fire</i>`, category: 'book'},
  {quote: `All we have to decide is what to do with the time that is given us.`, source: `Gandalf`, citation: `<i>The Fellowship fo the Ring</i>`, category: 'book'},
  {quote: `If you do what you've always done, you'll get what you've always gotten`, source: `Tony Robbins`, category: 'person'},
  {quote: `The more rejection you get, the better you are, the more you’ve learned, the closer you are to your outcome`, source: `Tony Robbins`, category: 'person'},
  {quote: `Do not go where the path may lead, go instead where there is no path and leave a trail.`, source: `Ralph Waldo Emerson`, category: 'person'},
  {quote: `Only a life lived for others is a life worthwhile.`, source: `Albert Einstein`, category: 'person'},
  {quote: `I find that the harder I work, the more luck I seem to have.`, source: `Thomas Jefferson`, category: 'person'}
];
let quoteIndex;

//pick a random number from low to high
function randomNum (low, high) {
  return Math.round(Math.random() * (high-low)+low);
}

/***
 * `getRandomQuote` function
 * Pass in an array
 * Pick a random index of the array and return the object at that index
***/
function getRandomQuote(quoteList) {
  
  //get a random number to index the passed in list (pick a random object)
  //needs to be -1 from the length due to the zero index of arrays
  quoteIndex = randomNum(0, quoteList.length-1);

  //return the random quote as an object
  return quoteList[quoteIndex];
}

/***
 * `printQuote` function
 * call the getRandomQuote()
 * use the returned quote object to build an HTML string of its properties
 * display the HTML string to the browser
***/

function printQuote() {
  //get the random quote from getRandomQuote() and create the
  //HTML string from its quote and source properties
  let randomQuote = getRandomQuote(quotes);
  let htmlStr = `<p class="quote">${randomQuote.quote} </p>`;
  htmlStr += `<p class="source">${randomQuote.source}`;

  //if the quote has a citation, add it the HTML string
  if (randomQuote.citation != null) {
    htmlStr += `<span class="citation">${randomQuote.citation}</span>`;
  }

  //if the quote has a year, add it the HTML string
  if (randomQuote.year != null) {
    htmlStr += `<span class="citation">${randomQuote.citation}</span>`; 
  }

  //add the closing <p> to the HTML string
  htmlStr += `</p>`;

  return htmlStr;
}

//put the htmlStr on the webpage
document.getElementById('quote-box').innerHTML = printQuote(); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);