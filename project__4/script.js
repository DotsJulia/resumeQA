//TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs__item");
// console.log(tabsItems);

//Ф-я скрывает табы и убирает active у кнопок

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

//ф-я показывает переданный номер таба и делает соответствующую ему кнопку активной

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}));


//Anchars

const anchars = document.querySelectorAll(".header__nav a");

anchars.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault() //убирает #
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        })
    })
})