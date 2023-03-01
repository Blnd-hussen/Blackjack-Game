let firstCard, secondCard, sum; 
let cards = [];
let hasBlackjack = false; 
let isAlive = false;
let msg = "";

let messageEl = document.getElementById("messageEl");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let new_btn = document.getElementById("new-btn");

// start game calls render game.
function startGame()
{
    isAlive = true;
    firstCard = genrateCard();
    secondCard = genrateCard();
    cards.push(firstCard, secondCard);
    sum = get_sum(firstCard, secondCard);
    renderGame();
}

function renderGame()
{
    sumEl.textContent = "Sum: " + sum;
   // call the display cards function to display the cards line 84.
    displayCards();

    // call the function that checks for winning condtion line 65.
    checkIfWon(sum);
}

// the button new card gets a new card and adds its value to the sum.
function newCard()
{
    if (isAlive)
    {
    let card = genrateCard();
    cards.push(card);
    sum += card;
    renderGame();
    }
    else
    {
        isAlive = false;
        alert("game stoped");
    }
}

// get the sum of the first two card values.
function get_sum(f, l)
{
    return f + l;
}

// genrate a new card between 2 and 11.
function genrateCard()
{
    let n = parseInt((Math.random() * (13)) + 1);
    if (n > 10)
    {
        return 11;
    }
    else if (n === 1)
    {
        return 10;
    }
    return n;
}

/* check the sum of cards values if its 21 then you won if more you lose
    if less you can get a new card and add it again
*/
function checkIfWon(n)
{
    if (n <= 20)
    {
        msg = ("Do you want to draw a new card? ");
    }
    else if (n === 21)
    {
        msg = ("You got Blackjack!");
        hasBlackjack = true;
    }
    else
    {
        msg = ("you are out!");
        isAlive = false;
    }
    messageEl.textContent = msg;
}

// iritate between the cards and display each one to the screen.
function displayCards()
{
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
}