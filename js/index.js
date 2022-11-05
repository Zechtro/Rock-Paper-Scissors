// Dictionary
const handOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png"
}

let userSCORE = 0
let computerSCORE = 0
let highSCORE = 0

const play = () => {
    userSCORE = 0;
    computerSCORE = 0;

    setUserScore(userSCORE);
    setComputerScore(computerSCORE);

    let scoreboard = document.querySelector(".scoreboard");
    scoreboard.style.display = "flex";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let menu = document.querySelector(".menu");
    menu.style.display = "none";

    document.querySelector(".ohno").style.display = "none"
    document.querySelector(".continue").style.display = "flex"
    document.querySelector(".playAgain").style.display = "none"
}

// Fungsi/Procedure setelah user memencet pilihannya
const pickUserHand = (hand) => {
    // Hide halaman awal
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    
    // Tunjukkan halaman selanjutnya dengan gambar yang dipilih
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    
    // Menampilkan pilihan user
    document.getElementById("userPickImage").src = handOptions[hand];
    
    referee(hand, pickComputerHand());
    if (computerSCORE == 5) {
        document.querySelector(".continue").style.display = "none"
        document.querySelector(".playAgain").style.display = "flex"
        // Menentukan apakah ada highscore baru
        if (userSCORE > highSCORE) {
            highSCORE = userSCORE
            setHighScore(highSCORE)
        }
    }

}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    // Menentukan pilihan random computer
    // Math.random() mengeluarkan nilai float lebih besar sama dengan nol dan lebih kecil dari 1
    let computerHand = hands[Math.floor(Math.random()*hands.length)];
    
    // Set gambar pilihan computer
    document.getElementById("computerPickImage").src = handOptions[computerHand];
    
    return computerHand;
}

// Menentukan menang/kalah
const referee = (userHand, computerHand) => {
    if ((userHand == "rock" && computerHand == "paper")
    || (userHand == "paper" && computerHand == "scissors")
    || (userHand == "scissors" && computerHand == "rock")) {
        document.querySelector(".result h1").style.color = "orangered"
        let textResult = "YOU LOSE!"
        computerSCORE += 1
        setComputerScore(computerSCORE) 
        if (computerSCORE == 5) {
            textResult = "GAME OVER!"
            document.querySelector(".ohno").style.display = "flex"
        }
        setResult(textResult)
    }
    else if ((userHand == "rock" && computerHand == "scissors")
    || (userHand == "paper" && computerHand == "rock")
    || (userHand == "scissors" && computerHand == "paper")) {
        setResult("YOU WIN!")
        document.querySelector(".result h1").style.color = "limegreen"
        userSCORE += 1
        setUserScore(userSCORE)  
    }
    else {
        setResult("TIE!")
        document.querySelector(".result h1").style.color = "dimgray"
    }
}

// Continue
const continueGame = () => {
    // Menunjukkan halaman awal 
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    
    // Hide halaman penilaian
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const setResult = (result) => {
    document.querySelector(".result h1").innerText = result
}

const setUserScore = (score) => {
    document.getElementById("userScore").innerText = score
}

const setComputerScore = (score) => {
    document.getElementById("computerScore").innerText = score
}

// Mengubah tampilan nilai highscore
const setHighScore = (score) => {
    document.getElementById("highScore").innerText = score
}

const playAgain = () => {
    let scoreboard = document.querySelector(".scoreboard");
    scoreboard.style.display = "none";
    
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let menu = document.querySelector(".menu");
    menu.style.display = "flex";
}