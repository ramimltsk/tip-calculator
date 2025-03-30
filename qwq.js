const billnum = document.querySelector(".billnum")

const fiveP = document.querySelector(".tipfive")

const tenP = document.querySelector(".tipten")

const fiftP = document.querySelector(".tipfifteen")

const twentyfvP = document.querySelector(".tiptwntfive")

const numberpeople = document.querySelector(".numberpeople")

const fiftyP = document.querySelector(".tipfifty")

const amountTip = document.querySelector(".amountTip")

const amountTotal = document.querySelector(".amountTotal")

// -----------------------------


const buttons = document.querySelectorAll(".btnNum")


buttons.forEach((button) => {


    button.addEventListener("click", () => {

        const percent = +button.value

        const result = billnum.value * percent / numberpeople.value
        amountTip.textContent = "$" + result
        let resulttwo = result + +billnum.value / +numberpeople.value
        amountTotal.textContent = "$" + resulttwo
    })

})


