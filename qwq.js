const billnum = document.querySelector(".billnum")

const fiveP = document.querySelector(".tipfive")

const tenP = document.querySelector(".tipten")

const fiftP = document.querySelector(".tipfifteen")

const twentyfvP = document.querySelector(".tiptwntfive")

const fiftyP = document.querySelector(".tipfifty")

const

const amountTip = document.querySelector(".amountTip")

const amountTotal = document.querySelector(".amountTotal")

fiveP.addEventListener("click", () => {
    const result = billnum.value * 0.05
    amountTip.textContent = result

    console.log(result)
})

tenP.addEventListener("click", () => {
    const result = billnum.value * 0.10
    amountTip.textContent = result

    console.log(result)
})

fiftP.addEventListener("click", () => {
    const result = billnum.value * 0.15
    amountTip.textContent = result

    console.log(result)
})

twentyfvP.addEventListener("click", () => {
    const result = (billnum.value * 0.25) /
        amountTip.textContent = result

    console.log(result)
})

fiftyP.addEventListener("click", () => {
    const result = billnum.value * 0.50
    amountTip.textContent = result

    console.log(result)
})






