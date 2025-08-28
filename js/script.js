// get The class name
const collections = document.getElementsByClassName("fa-heart");
// Access the existing heart value by id
let exitingHeartNum = parseInt(
  document.getElementById("existing_Hearts_num").innerText
);

let count = 0;
for (const collection of collections) {
  collection.addEventListener("click", function () {
    count++;
    // set the value
    document.getElementById("existing_Hearts_num").innerText = count;
  });
}
// get the coins by id
let coins = parseInt(getTextById("coins-number"));
// cards
document.getElementById("cardBtn1").addEventListener("click", function () {
  callBtnFunctionality("service-number1", "card-subTitle1", "card-title1");
});
document.getElementById("cardBtn2").addEventListener("click", function () {
  callBtnFunctionality("service-number2", "card-subTitle2", "card-title2");
});
document.getElementById("cardBtn3").addEventListener("click", function () {
  callBtnFunctionality("service-number3", "card-subTitle3", "card-title3");
});
document.getElementById("cardBtn4").addEventListener("click", function () {
  callBtnFunctionality("service-number4", "card-subTitle4", "card-title4");
});
document.getElementById("cardBtn5").addEventListener("click", function () {
  callBtnFunctionality("service-number5", "card-subTitle5", "card-title5");
});
document.getElementById("cardBtn6").addEventListener("click", function () {
  callBtnFunctionality("service-number6", "card-subTitle6", "card-title6");
});
document.getElementById("cardBtn7").addEventListener("click", function () {
  callBtnFunctionality("service-number7", "card-subTitle7", "card-title7");
});
document.getElementById("cardBtn8").addEventListener("click", function () {
  callBtnFunctionality("service-number8", "card-subTitle8", "card-title8");
});
document.getElementById("cardBtn9").addEventListener("click", function () {
  callBtnFunctionality("service-number9", "card-subTitle9", "card-title9");
});

// clear the history button
document
  .getElementById("clearHistoryBtn")
  .addEventListener("click", function () {
    const container = document.getElementById("container-history");
    container.innerText = "";
  });
// copy btns
let copies = parseInt(getTextById("existing_copies"));
const copyBtns = document.getElementsByClassName("copy_btn");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    copies++;
    document.getElementById("existing_copies").innerText = copies;

    // copy
    copyBtn.addEventListener("click", (e) => {
      const btn = e.target.closest(".copy-btn"); // works even if icon is clicked
      if (!btn) return;

      const card = btn.closest(".card"); // find the correct card
      if (!card) return;

      const textEl = card.querySelector(".copy-text"); // text to copy
      if (!textEl) return;

      const text = textEl.innerText;
      navigator.clipboard
        .writeText(text)
        .then(() => alert("Copied: " + text))
        .catch(() => alert("Copy failed!"));
    });
  });
}
