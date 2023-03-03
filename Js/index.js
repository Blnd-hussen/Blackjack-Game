let player = {
    name: "blnd",
    chips: 145
}

let firstCard, secondCard, sum;
let genratedNumbers = []; 
let cards = [];
let hasBlackjack = false; 
let isAlive = false;
let canStart = true;
let hasChips = player.chips > 0;
let msg = "";

let messageEl = document.getElementById("messageEl");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let new_btn = document.getElementById("new-btn");
let start_btn = document.getElementById("start-btn");
let score = document.getElementById("player-el");
let src = document.getElementById("cardsImg-el");

score.textContent = player.name + ": $" + player.chips;
// start game calls render game.
function startGame()
{
    if (canStart && hasChips)
    {
    resetGame();
    firstCard = genrateCard();
    secondCard = genrateCard();
    start_btn.innerText = "START GAME";
    cards.push(firstCard, secondCard);
    sum = get_sum(firstCard, secondCard); 
    renderGame();
    }
}

function renderGame()
{
    sumEl.textContent = "Sum: " + sum;
   // call the display cards function to display the cards line 84.
    displayCards();

    // call the function that checks for winning condtion line 65.
    checkGameStatus(sum);
}

// the button new card gets a new card and adds its value to the sum.
function newCard()
{
    if (isAlive && !hasBlackjack && hasChips)
    {
    let card = genrateCard();
    cards.push(card);
    sum += card;
    renderGame();
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
    let n;
    do
    {
        n = parseInt((Math.random() * (12)) + 1);
    }
    while (genratedNumbers.includes(n));
    genratedNumbers.push(n);
    showCards(n);

    if (n > 10)
    {
        return 10;
    }
    else if (n === 1)
    {
        return 11;
    }
    return n;
}

/* check the sum of cards values if its 21 then you won if more you lose
    if less you can get a new card and add it again
*/
function checkGameStatus(n)
{
    if (n <= 20)
    {
        msg = ("Do you want to draw a new card? ");
    }
    else if (n === 21)
    {
        msg = ("You got Blackjack!");
        start_btn.innerText = "PLAY AGAIN";
        player.chips += 25;
        score.textContent = player.name + ": $" + player.chips;
        hasBlackjack = true;
        canStart = true;
        
    }
    else
    {
        msg = ("you are out!");
        start_btn.innerText = "PLAY AGAIN";
        player.chips -= 25;
        score.textContent = player.name + ": $" + player.chips;
        isAlive = false;
        canStart = true;
       
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

function resetGame()
{
    sum = 0;
    cards = [];
    msg = "";
    genratedNumbers = [];
    hasBlackjack = false;
    isAlive = true;
    canStart = false; 
    sumEl.textContent = "Sum:";
    src.innerText = null;
}
function showCards(n)
{
    let img = document.createElement("img");
    switch (n)
    {
        case 1:
            img.src = "images/card-1.jpg";
            src.appendChild(img);
        break;
        case 2:
            img.src = "images/card-2.jpg";
            src.appendChild(img);
        break;
        case 3:
            img.src = "images/card-3.jpg";
            src.appendChild(img);
        break;
        case 4:
            img.src = "images/card-4.jpg";
            src.appendChild(img);
        break;
        case 5:
            img.src = "images/card-5.jpg";
            src.appendChild(img);
        break;
        case 6:
            img.src = "images/card-6.jpg";
            src.appendChild(img);
        break;
        case 7:
            img.src = "images/card-7.jpg";
            src.appendChild(img);
        break;
        case 8:
            img.src = "images/card-8.jpg";
            src.appendChild(img);
        break;
        case 9:
            img.src = "images/card-9.jpg";
            src.appendChild(img);
        break;
        case 10:
            img.src = "images/jester.jpg";
            src.appendChild(img);
        break;
        case 11:
            img.src = "images/queen.jpg";
            src.appendChild(img);
        break;
        case 12:
            img.src = "images/king.jpg";
            src.appendChild(img);
        break;
        default:
            alert("broken");
    }
}