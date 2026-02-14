const envelope = document.getElementById("envelop-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// click envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

//Logic to make the no btn move randomly
noBtn.addEventListener("click", () => {
    const min = 200;
    const max = 200;
    
    const distance = Math.random() * (max -min) + min;
    const angle = Math.random() * 2 * Math.PI;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


// to link the picture page
document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const finalText = document.getElementById("final-text");
    const goToPictureBtn = document.getElementById("go-to-picture");

    // When "Yes" is clicked
    yesBtn.addEventListener("click", function() {
        finalText.style.display = "block";       // Show final text
        goToPictureBtn.style.display = "inline"; // Show button
    });

    // When "See Surprise Picture" button is clicked
    goToPictureBtn.addEventListener("click", function() { 
        console.log("Redirecting to MaAndy.html"); // Debug line 
        window.location.href = "pages/MaAndy.html"; // Redirect to your actual page
    });
});



// Logic to make yes btn to grow bigger
// let yesScale = 1;

// yesBtn.style.position = "relative";
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;
//     if (yesBtn.style.position !== fixed){
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// Yes btn click event
yesBtn.addEventListener("click", () => {
    title.textContent = "I Knew You Would Say Yes! MY LOVE!";
    catImg.src = "cute-cat-love.jpg";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";

});