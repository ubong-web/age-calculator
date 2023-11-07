
const btnEl = document.querySelector("#button");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");


const calYear = document.querySelector(".cal-year");
const calMonth = document.querySelector(".cal-month");
const calDay = document.querySelector(".cal-day");




btnEl.addEventListener("click", function(e){
    e.preventDefault();

    const day = Number(dayEl.value);
    const month = Number(monthEl.value);
    const year = Number(yearEl.value);
    
    const birthYear = new Date(year, month, day);
    const now = new Date();

    const caluYear = now.getFullYear() - birthYear.getFullYear();
    const caluMonth = now.getMonth() + 1 - birthYear.getMonth();
    const caluDay = birthYear.getDate();


    calYear.textContent = caluYear;
    calMonth.textContent = caluMonth;
    calDay.textContent = caluDay;


    
})




