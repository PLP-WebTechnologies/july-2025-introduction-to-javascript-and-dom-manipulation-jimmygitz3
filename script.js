let userName = "James";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log(`Welcome back, ${userName}!`);
} else {
  console.log("Please log in to continue.");
}
function greetUser() {
  const intro = document.getElementById("intro");
  intro.textContent = `Hello, ${userName}! Hope you're enjoying JavaScript.`;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
function showLoopResults() {
  const output = document.getElementById("output");
  output.innerHTML = "<h3>Loop Results:</h3>";

  // For loop
  for (let i = 1; i <= 5; i++) {
    output.innerHTML += `<p>For loop count: ${i}</p>`;
  }

  // While loop
  let j = 1;
  while (j <= 3) {
    output.innerHTML += `<p>While loop count: ${j}</p>`;
    j++;
  }
}
