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

let coins = parseInt(getTextById("coins-number"));
document.getElementById("cardBtn1").addEventListener("click", function () {
  const num1 = getTextById("service-number1");
  const subTitle1 = getTextById("card-subTitle1");
  const title = getTextById("card-title1");
  coins = coins - 20;
  if (coins < 0) {
    alert(
      "You Don't Have sufficient Coins to call.You need At least 20 coins to call"
    );
    return;
  }

  const div = document.createElement("div");
  const container = document.getElementById("container-history");
  div.innerHTML = `
      <div
            class="min-h-5 my-3 p-2 flex justify-between items-center bg-[#FAFAFA] rounded-lg"
            >
            <div class="">
              <h1 class="text-[18px] font-semibold">${title}</h1>
              <h1 class="text-[#5C5C5C] font-normal text-[18px]">${num1}</h1>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
  `;
  container.appendChild(div);
  // show alert
  // alert(`Calling ${subTitle1} ${num1}...`);
  document.getElementById("coins-number").innerText = coins;
});
document
  .getElementById("clearHistoryBtn")
  .addEventListener("click", function () {
    const container = document.getElementById("container-history");
    container.innerText = "";
  });
