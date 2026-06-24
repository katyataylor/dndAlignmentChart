window.addEventListener(`DOMContentLoaded`, () => {
  // Radio toggle inputs
  const radioA = document.getElementById("personality");
  const radioB = document.getElementById("action");

  // Elements
  const playerDot = document.querySelector(`.dot`);
  const containerA = document.querySelector(".optionA");
  const containerB = document.querySelector(".optionB");
  const submitBtn = document.getElementById("submit-quiz-btn"); // Grab the button

  // Toggle Functionality
  function toggle() {
    const selectedOption = document.querySelector(`input[name="eitherOrGroup"]:checked`).value;
    
    if (selectedOption === "A") {
      containerA.style.display = "block";
      containerB.style.display = "none";
    } else if (selectedOption === "B") {
      containerA.style.display = "none";
      containerB.style.display = "block";
    }
    
    // Hide the dot again if they switch quiz modes so they have to re-submit
    playerDot.style.display = "none";
  }

  radioA.addEventListener("change", toggle);
  radioB.addEventListener("change", toggle);

  // Core Math Logic Function
  const updateChart = () => {
    // 1. Find out which section is currently active
    const selectedOption = document.querySelector(`input[name="eitherOrGroup"]:checked`).value;
    let activeContainer = selectedOption === "A" ? containerA : containerB;

    // 2. Dynamically grab ONLY the sliders inside the active container
    const xSliders = activeContainer.querySelectorAll(`input[class*="x-slider"]`);
    const ySliders = activeContainer.querySelectorAll(`input[class*="y-slider"]`);

    // 3. Calculate X-Axis (Law vs Chaos)
    let totalXScore = 0;
    xSliders.forEach(slider => {
      totalXScore += Number(slider.value);
    });
    let maxXPoints = xSliders.length * 10; 
    let xPercentage = maxXPoints === 0 ? 50 : (totalXScore / maxXPoints) * 98 + 1;

    // 4. Calculate Y-Axis (Good vs Evil)
    let totalYScore = 0;
    ySliders.forEach(slider => {
      totalYScore += Number(slider.value);
    });
    let maxYPoints = ySliders.length * 10;
    let yPercentage = maxYPoints === 0 ? 50 : (totalYScore / maxYPoints) * 98 + 1;

    // 5. Move the dot to its final calculated coordinates
    playerDot.style.left = `${xPercentage}%`;
    playerDot.style.top = `${yPercentage}%`;

    // 6. REVEAL THE DOT! 
    playerDot.style.display = "block";
  };

  // Listen for the button click to run the math and show the dot
  submitBtn.addEventListener("click", updateChart);

  // Run initial setup on page load
  toggle();
});

