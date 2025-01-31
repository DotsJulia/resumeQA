const btnDarkMode = document.querySelector(".dark-mode-btn");

if(localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} 

//Проверка темной темы на основе системных настроек
// if(window.matchMedia && window.matchMedia("(prefers-color-sheme: dark)").matches) {
//     btnDarkMode.classList.add("dark-mode-btn--active");
//     document.body.classList.add("dark");
// }


//Включение ночного режима по копке
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if(isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}