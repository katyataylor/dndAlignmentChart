window.addEventListener(`DOMContentLoaded`, () => {
    
    // Defines initial variable containers
    let idScore = 0;
    let superegoScore = 0;
    let benefitScore = 0;
    let harmScore = 0;

    // Grabs elements AFTER page loads
    const playerDot = document.querySelector(`.dot`);
    const xSlider = document.querySelector(`.x-slider`);
    const ySlider = document.querySelector(`.y-slider`);
    
    // The math logic
    let totalXPoints = idScore + superegoScore;
    let totalYPoints = harmScore + benefitScore;

    // Default points
    let xScore = totalXPoints === 0 ? 5 : (idScore / totalXPoints) * 10;
    let yScore = totalYPoints === 0 ? 5 : (benefitScore / totalYPoints) * 10;

    // Convert default scores into padded percentages for dot starting point
    let initialXPercent = (xScore / 10) * 98 +1;
    let initialYPercent = (yScore / 10) * 98 +1;
    playerDot.style.left = `${initialXPercent}%`;
    playerDot.style.top = `${initialYPercent}%`;

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
