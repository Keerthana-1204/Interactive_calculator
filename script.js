//Clicking the toggle button to switch between light and dark mode

const toggleButton = document.getElementById("themetoggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  // Optional: Save preference in local storage
  const currentTheme = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";
  localStorage.setItem("theme", currentTheme);
});

// On page load – restore saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(`${savedTheme}-theme`);
  } else {
    document.body.classList.add("dark-theme"); // default
  }
});

//To perform the calculation:

//clicking the numbers & operations button to display the number in the input field

const input = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .btn-operator");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.value;

    if (value === "clear") {
      input.value = "";
    } else if (value === "equals") {
      try {
        let expression = input.value
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");
        input.value = eval(expression);
      } catch (error) {
        input.value = "Error";
      }
    } else if (value === "backspace") {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += value;
    }
  }
  );
}
);

