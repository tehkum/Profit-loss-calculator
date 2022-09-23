var inputAmount = document.querySelectorAll("#input-amt");
var checkBtn = document.querySelector("#check-btn");
var outputAmt = document.querySelector("#output-amt");

function getProfitOrLoss() {
  var initAmt = (Number(inputAmount[0].value) * Number(inputAmount[1].value));
  var finAmt = (Number(inputAmount[1].value) * Number(inputAmount[2].value));
  if (initAmt > finAmt) {
    outputAmt.innerText = "loss of " + (initAmt - finAmt) + "rs. Percentgage loss is : " + ((initAmt - finAmt) * 100) / initAmt;
  } else if (finAmt > initAmt) {
    outputAmt.innerText = "Profit of " + (finAmt - initAmt) + "rs. Percentgage Profit is : " + ((finAmt - initAmt) * 100) / initAmt;
  } else {
    outputAmt.innerText = "no profit no loss";
  }
  console.log(initAmt, finAmt)
}

checkBtn.addEventListener("click", getProfitOrLoss);