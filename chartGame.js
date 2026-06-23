window.addEventListener(`DOMContentLoaded`, () => {
    
    // 1.Grabs elements AFTER page loads
    const playerDot = document.querySelector(`.dot`);
    const xSlider = document.querySelector(`.x-slider`);
    const ySlider = document.querySelector(`.y-slider`);

    // Default visual starting pos
    playerDot.style.left = "50%";
    playerDot.style.top = "50%";

    // Listen for X-axis changes
    xSlider.addEventListener("input", () => {
        let currentScore = xSlider.value;
        let xScore = currentScore;
        let xPercentage = (xScore / 10) * 98 + 1;
        playerDot.style.left = `${xPercentage}%`;
    });

    // Listen for Y-axis changes
    ySlider.addEventListener("input", () => {
        let currentScore = ySlider.value;
        let yScore = currentScore;
        let yPercentage = (yScore / 10) * 98 + 1;
        playerDot.style.top = `${yPercentage}%`;
    });

});
