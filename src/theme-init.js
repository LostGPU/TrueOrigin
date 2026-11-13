const savedTheme = localStorage.getItem("trueorigin-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
document.documentElement.dataset.theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;
